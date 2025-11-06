<?php
// app/Http/Controllers/PatientController.php
namespace App\Http\Controllers;

use App\Models\Patient;
use App\Models\Appointment;
use Illuminate\Http\Request;

class PatientController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->get('search');
        
        $patients = Patient::when($search, function($query) use ($search) {
            return $query->search($search);
        })
        ->withCount('appointments')
        ->orderBy('name')
        ->paginate(20);

        return view('admin.patients.index', compact('patients', 'search'));
    }

    public function show($id)
    {
        $patient = Patient::with(['appointments' => function($query) {
            $query->orderBy('appointment_date', 'desc');
        }, 'appointments.prescription'])->findOrFail($id);

        return view('admin.patients.show', compact('patient'));
    }

    public function create()
    {
        return view('admin.patients.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'age' => 'nullable|integer|min:1|max:120',
            'phone' => 'required|string|max:20|unique:patients,phone',
            'email' => 'nullable|email|max:255',
            'address' => 'nullable|string',
            'gender' => 'nullable|in:male,female,other',
            'blood_group' => 'nullable|string|max:10',
            'emergency_contact' => 'nullable|string|max:20',
            'medical_history' => 'nullable|string',
            'allergies' => 'nullable|string'
        ]);

        // Generate patient ID
        $patientId = 'PAT' . str_pad(Patient::count() + 1, 4, '0', STR_PAD_LEFT);

        Patient::create([
            'patient_id' => $patientId,
            'name' => $request->name,
            'age' => $request->age,
            'phone' => $request->phone,
            'email' => $request->email,
            'address' => $request->address,
            'gender' => $request->gender,
            'blood_group' => $request->blood_group,
            'emergency_contact' => $request->emergency_contact,
            'medical_history' => $request->medical_history,
            'allergies' => $request->allergies
        ]);

        return redirect()->route('patients.index')->with('success', 'Patient created successfully.');
    }

    public function edit($id)
    {
        $patient = Patient::findOrFail($id);
        return view('admin.patients.edit', compact('patient'));
    }

    public function update(Request $request, $id)
    {
        $patient = Patient::findOrFail($id);

        $request->validate([
            'name' => 'required|string|max:255',
            'age' => 'nullable|integer|min:1|max:120',
            'phone' => 'required|string|max:20|unique:patients,phone,' . $patient->id,
            'email' => 'nullable|email|max:255',
            'address' => 'nullable|string',
            'gender' => 'nullable|in:male,female,other',
            'blood_group' => 'nullable|string|max:10',
            'emergency_contact' => 'nullable|string|max:20',
            'medical_history' => 'nullable|string',
            'allergies' => 'nullable|string'
        ]);

        $patient->update($request->all());

        return redirect()->route('patients.show', $patient->id)->with('success', 'Patient updated successfully.');
    }

    public function destroy($id)
    {
        $patient = Patient::findOrFail($id);
        $patient->delete();

        return redirect()->route('patients.index')->with('success', 'Patient deleted successfully.');
    }

    public function addMedicalNotes($id)
    {
        $patient = Patient::findOrFail($id);
        return view('admin.patients.add-medical-notes', compact('patient'));
    }

    public function storeMedicalNotes(Request $request, $id)
    {
        $patient = Patient::findOrFail($id);

        $request->validate([
            'problems' => 'required|string',
            'medical_notes' => 'required|string',
            'appointment_date' => 'required|date',
            'appointment_time' => 'required|string|max:50',
            'doctor_name' => 'required|string|max:255',
            'consultation_fee' => 'required|numeric|min:0'
        ]);

        // Check if time slot is available
        $existingAppointment = Appointment::where('appointment_date', $request->appointment_date)
            ->where('appointment_time', $request->appointment_time)
            ->whereIn('status', ['pending', 'confirmed'])
            ->first();

        if ($existingAppointment) {
            return back()->with('error', 'This time slot is already booked. Please choose another time.');
        }

        // Get visit count
        $visitCount = $patient->appointments()->count() + 1;

        // Create appointment with medical notes
        Appointment::create([
            'patient_id' => $patient->id,
            'patient_name' => $patient->name,
            'age' => $patient->age,
            'phone' => $patient->phone,
            'email' => $patient->email,
            'appointment_date' => $request->appointment_date,
            'appointment_time' => $request->appointment_time,
            'doctor_name' => $request->doctor_name,
            'consultation_fee' => $request->consultation_fee,
            'status' => 'confirmed',
            'payment_status' => 'paid',
            'booking_type' => 'manual',
            'symptoms' => $request->problems,
            'notes' => $request->medical_notes,
            'visit_count' => $visitCount
        ]);

        return redirect()->route('patients.show', $patient->id)->with('success', 'Medical notes and appointment added successfully.');
    }
}
?>