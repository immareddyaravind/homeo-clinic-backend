<?php

// app/Http/Controllers/DoctorController.php
namespace App\Http\Controllers;

use App\Models\Doctor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class DoctorController extends Controller
{
    public function index()
    {
        $doctors = Doctor::all();
        return view('admin.doctors.index', compact('doctors'));
    }

    public function create()
    {
        // Not needed - using index blade for create form
    }

    public function store(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:2048',
            'name' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'experience' => 'required|string|max:500',
            'specialization' => 'required|string|max:500',
            'expertise' => 'required|json|min:2', // JSON array string
            'quote' => 'required|string|max:1000',
            'phone' => 'required|string|max:20',
            'email' => 'required|email|max:255',
        ]);

        // Handle image upload
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('doctors', 'public');
        }

        Doctor::create([
            'name' => $request->name,
            'title' => $request->title,
            'experience' => $request->experience,
            'specialization' => $request->specialization,
            'expertise' => json_decode($request->expertise, true), // Decode to array
            'quote' => $request->quote,
            'phone' => $request->phone,
            'email' => $request->email,
            'image_path' => $imagePath,
            'status' => 1 // Default active
        ]);

        return redirect()->route('doctors')->with('success', 'Doctor created successfully.');
    }

    public function show(Request $request)
    {
        $query = Doctor::select('doctors.*')->where('status', 1)->get();

        return response()->json([
            'success' => true,
            'data' => $query
        ]);
    }

    public function edit(Doctor $doctor)
    {
        return view('admin.doctors.edit', compact('doctor'));
    }

    public function update(Request $request, Doctor $doctor)
    {
        $request->validate([
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:2048',
            'name' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'experience' => 'required|string|max:500',
            'specialization' => 'required|string|max:500',
            'expertise' => 'required|json|min:2',
            'quote' => 'required|string|max:1000',
            'phone' => 'required|string|max:20',
            'email' => 'required|email|max:255',
        ]);

        $data = [
            'name' => $request->name,
            'title' => $request->title,
            'experience' => $request->experience,
            'specialization' => $request->specialization,
            'expertise' => json_decode($request->expertise, true),
            'quote' => $request->quote,
            'phone' => $request->phone,
            'email' => $request->email
        ];

        // Handle image upload if new image is provided
        if ($request->hasFile('image')) {
            // Delete old image
            if ($doctor->image_path) {
                Storage::disk('public')->delete($doctor->image_path);
            }
            $data['image_path'] = $request->file('image')->store('doctors', 'public');
        }

        $doctor->update($data);

        return redirect()->route('doctors')->with('success', 'Doctor updated successfully.');
    }

    public function destroy(Doctor $doctor)
    {
        // Delete image from storage
        if ($doctor->image_path) {
            Storage::disk('public')->delete($doctor->image_path);
        }
        
        $doctor->delete();

        return redirect()->route('doctors')->with('success', 'Doctor deleted successfully.');
    }

    public function toggleStatus($id)
    {
        $query = Doctor::findOrFail($id);
        $query->status = $query->status == 1 ? 0 : 1; // Toggle between 0 and 1
        $query->save();

        return back()->with('success', 'Status updated successfully');
    }
}