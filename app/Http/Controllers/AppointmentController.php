<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use App\Models\Appointment;
use App\Models\Visit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Log;

class AppointmentController extends Controller
{
    // ==================================================================
    // 1. TODAY'S APPOINTMENTS + SEARCH
    // ==================================================================
    public function index(Request $request)
    {
        $today = today()->toDateString();
        $search = $request->get('search');

        $latestAppointmentIds = DB::table('appointments')
            ->select('patient_id', DB::raw('MAX(id) as latest_id'))
            ->groupBy('patient_id');

        $query = Appointment::query()
            ->with('patient')
            ->joinSub($latestAppointmentIds, 'latest', function ($join) {
                $join->on('appointments.id', '=', 'latest.latest_id');
            })
            ->whereDate('appointments.appointment_date', $today)
            ->select('appointments.*');

        if ($search) {
            $query->whereHas('patient', function ($q) use ($search) {
                $q->where('full_name', 'like', "%{$search}%")
                  ->orWhere('phone_number', 'like', "%{$search}%");
            });
        }

        $appointments = $query->orderBy('appointments.appointment_time')->get();

        return view('admin.appointments.index', compact('appointments', 'search'));
    }

    // ==================================================================
    // 2. STORE MANUAL APPOINTMENT
    // ==================================================================
    public function store(Request $request)
    {
        $request->validate([
            'full_name' => 'required|string|max:255',
            'phone_number' => 'required|string|max:20',
            'appointment_date' => 'required|date|after_or_equal:today',
            'appointment_time' => 'required|date_format:H:i'
        ]);

        $appointment_time = $this->convertTo24Hour($request->appointment_time);

        $patient = Patient::where('phone_number', $request->phone_number)->first();
        if (!$patient) {
            $patient = Patient::create([
                'full_name' => $request->full_name,
                'phone_number' => $request->phone_number,
                'email_address' => null
            ]);
        } else {
            $patient->update(['full_name' => $request->full_name]);
        }

        $exists = Appointment::where('appointment_date', $request->appointment_date)
                             ->where('appointment_time', $appointment_time)
                             ->exists();
        if ($exists) {
            return redirect()->back()->withErrors(['appointment_time' => 'This time slot is already booked.']);
        }

        Appointment::create([
            'patient_id' => $patient->id,
            'appointment_date' => $request->appointment_date,
            'appointment_time' => $appointment_time,
            'type' => 'manual',
            'status' => 'confirmed'
        ]);

        return redirect()->route('admin.appointments.index')->with('success', 'Appointment added successfully!');
    }

    // ==================================================================
    // 3. PATIENTS LIST + SEARCH
    // ==================================================================
    public function patients(Request $request)
    {
        $search = $request->get('search');
        $query = Patient::query();

        if ($search) {
            $query->where('full_name', 'like', "%{$search}%")
                  ->orWhere('phone_number', 'like', "%{$search}%")
                  ->orWhere('email_address', 'like', "%{$search}%");
        }

        $patients = $query->paginate(10);

        return view('admin.patients.index', compact('patients', 'search'));
    }

    // ==================================================================
    // 4. STORE NEW PATIENT
    // ==================================================================
    public function storePatient(Request $request)
    {
        $request->validate([
            'full_name' => 'required|string|max:255',
            'phone_number' => 'required|string|max:20|unique:patients',
            'email_address' => 'nullable|email|unique:patients'
        ]);

        $data = $request->all();
        $data['email_address'] = $data['email_address'] ?: null;

        Patient::create($data);

        return redirect()->route('admin.patients.index')->with('success', 'Patient added successfully.');
    }

    // ==================================================================
    // 5. SHOW PATIENT + VISITS
    // ==================================================================
    public function showPatient($id)
    {
        $patient = Patient::with(['appointments', 'visits'])->findOrFail($id);
        $visits = $patient->visits()->orderBy('visit_date', 'desc')->get();

        return view('admin.patients.show', compact('patient', 'visits'));
    }

    // ==================================================================
    // 6. ADD NEW VISIT – CLEAN SYMPTOMS
    // ==================================================================
    public function storeVisit(Request $request, $patientId)
    {
        $request->validate([
            'visit_date' => 'required|date',
            'symptoms' => 'required|string|max:1000',
            'medical_notes' => 'nullable|string'
        ]);

        // Clean symptoms: split, trim, lowercase, remove empty
        $symptomArray = array_filter(array_map(function ($s) {
            return trim(strtolower($s));
        }, explode(',', $request->symptoms)));

        $cleanSymptoms = !empty($symptomArray) ? implode(', ', $symptomArray) : null;

        Visit::create([
            'patient_id' => $patientId,
            'visit_date' => $request->visit_date,
            'symptoms' => $cleanSymptoms,
            'medical_notes' => $request->medical_notes,
        ]);

        return redirect()->route('admin.patients.show', $patientId)
                         ->with('success', 'New visit added successfully.');
    }

    // ==================================================================
    // 7. ONLINE BOOKING (API)
    // ==================================================================
    public function bookOnline(Request $request)
    {
        try {
            $request->validate([
                'full_name' => 'required|string|max:255',
                'phone_number' => 'required|string|max:20',
                'email_address' => 'required|email',
                'appointment_date' => 'required|date|after_or_equal:today',
                'appointment_time' => 'required'
            ]);
        } catch (ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $e->errors()
            ], 422);
        }

        $appointment_time = $this->convertTo24Hour($request->appointment_time);
        if (!$appointment_time) {
            return response()->json(['success' => false, 'message' => 'Invalid time format.'], 400);
        }

        $exists = Appointment::where('appointment_date', $request->appointment_date)
                             ->where('appointment_time', $appointment_time)
                             ->exists();
        if ($exists) {
            return response()->json([
                'success' => false,
                'message' => 'Time slot already booked.',
                'errors' => ['appointment_time' => ['Slot not available.']]
            ], 422);
        }

        $patient = Patient::where('email_address', $request->email_address)->first();
        if (!$patient) {
            $patient = Patient::create([
                'full_name' => $request->full_name,
                'phone_number' => $request->phone_number,
                'email_address' => $request->email_address
            ]);
        } else {
            $patient->update([
                'full_name' => $request->full_name,
                'phone_number' => $request->phone_number
            ]);
        }

        $appointment = Appointment::create([
            'patient_id' => $patient->id,
            'appointment_date' => $request->appointment_date,
            'appointment_time' => $appointment_time,
            'type' => 'online',
            'status' => 'confirmed'
        ]);

        return response()->json([
            'success' => true,
            'appointment_id' => $appointment->id,
            'message' => 'Appointment booked!',
            'appointment' => [
                'date' => $request->appointment_date,
                'time' => $request->appointment_time,
                'formatted_time' => $appointment_time
            ]
        ], 200);
    }

    // ==================================================================
    // 8. DASHBOARD – COMMON SYMPTOMS (TODAY) + DEBUG
    // ==================================================================
   // ==================================================================
// 8. DASHBOARD – COMMON SYMPTOMS (TODAY) – PURE SQL
// ==================================================================
// ==================================================================
// 8. DASHBOARD – COMMON SYMPTOMS (TODAY) – PURE SQL + JUNK FILTER
// ==================================================================
public function dashboard()
{
    $totalPatients      = Patient::count();
    $todayAppointments  = Appointment::whereDate('appointment_date', today())->count();
    $manualAppointments = Appointment::where('type', 'manual')->whereDate('appointment_date', today())->count();
    $onlineAppointments = Appointment::where('type', 'online')->whereDate('appointment_date', today())->count();

    // PURE SQL: Only valid real symptoms (3+ letters, no junk)
    $commonSymptoms = collect(DB::select("
        SELECT 
            TRIM(LOWER(SUBSTRING_INDEX(SUBSTRING_INDEX(CONCAT(v.symptoms, ','), ',', n.n), ',', -1))) AS symptom,
            COUNT(*) AS count
        FROM visits v
        CROSS JOIN numbers n
        WHERE v.symptoms IS NOT NULL
          AND v.symptoms != ''
          AND v.symptoms REGEXP '^[a-zA-Z, ]+$'
          AND n.n <= 1 + (LENGTH(v.symptoms) - LENGTH(REPLACE(v.symptoms, ',', '')))
          AND DATE(v.visit_date) = CURDATE()
        GROUP BY symptom
        HAVING symptom != '' 
           AND symptom REGEXP '^[a-z ]{3,}$'           -- Only 3+ letter words
           AND symptom NOT IN ('krneng', 'grgrg')       -- Block junk
        ORDER BY count DESC
        LIMIT 10
    "))->mapWithKeys(function ($item) {
        return [ucwords($item->symptom) => $item->count];
    });

    $weeklyVisits = Visit::where('visit_date', '>=', now()->subDays(6))
        ->selectRaw('DATE(visit_date) as date, COUNT(*) as count')
        ->groupBy('date')
        ->orderBy('date')
        ->pluck('count', 'date')
        ->toArray();

    return view('admin.dashboard', compact(
        'totalPatients',
        'todayAppointments',
        'manualAppointments',
        'onlineAppointments',
        'commonSymptoms',
        'weeklyVisits'
    ));
}
    // ==================================================================
    // HELPER: Convert 12-hour to 24-hour
    // ==================================================================
    private function convertTo24Hour($time)
    {
        $time = trim($time);
        if (preg_match('/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/', $time)) {
            return $time;
        }
        if (preg_match('/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i', $time, $matches)) {
            $hours = (int)$matches[1];
            $minutes = $matches[2];
            $period = strtoupper($matches[3]);
            if ($hours == 12) {
                $hours = $period === 'AM' ? 0 : 12;
            } else {
                $hours = $period === 'PM' ? $hours + 12 : $hours;
            }
            return sprintf('%02d:%s', $hours, $minutes);
        }
        return false;
    }
}