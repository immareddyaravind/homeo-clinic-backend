<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use GuzzleHttp\Client as HttpClient;
use App\Models\Patient;
use Carbon\Carbon;

class ChatbotController extends Controller
{
    private function getApiKey(): ?string
    {
        $apiKey = env('GEMINI_API_KEY');
        if (empty($apiKey)) {
            Log::error('GEMINI_API_KEY is missing.');
            return null;
        }
        return $apiKey;
    }

    public function health(Request $request)
    {
        $apiKey = $this->getApiKey();
        
        if (is_null($apiKey)) {
            return response()->json(['status' => 'Error', 'message' => 'GEMINI_API_KEY not found.'], 500);
        }

        $keyLength = strlen($apiKey);
        $keyStatus = $keyLength >= 39 
            ? 'Loaded (Length: ' . $keyLength . ' - OK)' 
            : 'Loaded (Length: ' . $keyLength . ' - WARNING: Invalid)';

        try {
            $client = new HttpClient();
            $client->head('https://www.google.com', ['timeout' => 5]);
            $networkStatus = 'OK - Internet accessible';
        } catch (\Exception $e) {
            $networkStatus = 'Error - No internet: ' . $e->getMessage();
        }

        return response()->json([
            'status' => 'OK',
            'message' => 'API Key loaded.',
            'key_status' => $keyStatus,
            'network_status' => $networkStatus
        ]);
    }

    public function respond(Request $request)
    {
        $apiKey = $this->getApiKey();
        $userMessage = $request->input('message');
        $patientId = $request->input('patient_id');

        if (is_null($apiKey) || empty($userMessage)) {
            return response()->json(['reply' => 'Error: Missing message or API key.'], 400);
        }

        $patient = Patient::with('visits')->find($patientId);
        if (!$patient) {
            return response()->json(['reply' => 'Patient not found.']);
        }

        $visitsText = $patient->visits->map(function ($visit) {
            return "Date: " . Carbon::parse($visit->visit_date)->format('d-m-Y') .
                   ", Symptoms: " . ($visit->symptoms ?: 'None') .
                   ", Notes: " . ($visit->medical_notes ?: 'None');
        })->implode("\n");

        $pageContext = "Patient: {$patient->full_name}\n" .
                       "Phone: {$patient->phone_number}\n" .
                       "Email: " . ($patient->email_address ?: '—') . "\n" .
                       "Total Visits: {$patient->visits->count()}\n" .
                       "Visit History:\n{$visitsText}";

        // CORRECT: v1beta + gemini-2.5-flash (2025 model)
        $model = 'gemini-2.5-flash';
        $endpoint = "https://generativelanguage.googleapis.com/v1beta/models/{$model}:generateContent?key=" . $apiKey;

        try {
            Log::info('Gemini API call starting with model: ' . $model);

            $client = new HttpClient();

            $data = [
                'contents' => [
                    [
                        'role' => 'model',
                        'parts' => [
                            ['text' => "You are a medical AI assistant. Use ONLY this patient data to answer questions:\n\n{$pageContext}\n\nAnswer in Telugu if the question is in Telugu, else English. Be concise and professional."]
                        ]
                    ],
                    [
                        'role' => 'user',
                        'parts' => [
                            ['text' => $userMessage]
                        ]
                    ]
                ]
            ];

            $response = $client->request('POST', $endpoint, [
                'json' => $data,
                'headers' => ['Content-Type' => 'application/json'],
                'timeout' => 30,
                'connect_timeout' => 10
            ]);

            $apiResponse = json_decode($response->getBody()->getContents(), true);
            
            // Check for errors in response
            if (isset($apiResponse['error'])) {
                throw new \Exception('API Error: ' . json_encode($apiResponse['error']));
            }

            $reply = $apiResponse['candidates'][0]['content']['parts'][0]['text'] ?? 'No response from AI.';

            return response()->json(['reply' => $reply]);

        } catch (\GuzzleHttp\Exception\ClientException $e) {
            $errorBody = $e->getResponse()->getBody()->getContents();
            Log::error("Client Error (likely 404/400): " . $errorBody);
            return response()->json([
                'reply' => $this->fallbackResponse($userMessage, $pageContext),
                'note' => 'API failed (check model/key): ' . $errorBody
            ]);
        } catch (\GuzzleHttp\Exception\ConnectException $e) {
            Log::error("Connection Error: " . $e->getMessage());
            return response()->json([
                'reply' => $this->fallbackResponse($userMessage, $pageContext),
                'note' => 'Network issue - using local logic.'
            ]);
        } catch (\Exception $e) {
            Log::error("General Error: " . $e->getMessage());
            return response()->json([
                'reply' => $this->fallbackResponse($userMessage, $pageContext),
                'note' => 'API failed: ' . $e->getMessage()
            ]);
        }
    }

    private function fallbackResponse(string $message, string $pageContext): string
    {
        $message = strtolower($message);
        $context = strtolower($pageContext);

        // Better matching for common questions
        if (strpos($message, 'last visit') !== false || strpos($message, 'చివరి విజిట్') !== false) {
            if (preg_match('/date: (\d{2}-\d{2}-\d{4})/', $context, $matches)) {
                return "Last visit date: " . $matches[1] . ". Check symptoms in table.";
            }
        }

        if (strpos($message, 'symptoms') !== false || strpos($message, 'లక్షణాలు') !== false) {
            if (preg_match('/symptoms: (.+?)(?=, notes|$)/i', $context, $matches)) {
                return "Recent symptoms: " . trim($matches[1]);
            }
        }

        if (strpos($message, 'total visits') !== false || strpos($message, 'మొత్తం విజిట్స్') !== false) {
            preg_match('/total visits: (\d+)/', $context, $matches);
            return "Total visits: " . ($matches[1] ?? '0');
        }

        if (strpos($message, 'fever') !== false || strpos($message, 'జ్వరం') !== false) {
            return "Fever mentioned in history. Consult doctor if ongoing.";
        }

        // General word search
        $words = explode(' ', $message);
        foreach ($words as $word) {
            if (strlen($word) > 3 && strpos($context, strtolower($word)) !== false) {
                $pos = strpos($context, strtolower($word));
                return "Found in data: " . substr($context, max(0, $pos - 50), 150) . '...';
            }
        }

        return "No exact match. Try: 'Last visit?', 'Symptoms?', 'జ్వరం ఉందా?', or 'Total visits?'";
    }
}