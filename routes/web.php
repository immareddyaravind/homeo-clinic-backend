<?php

// routes/web.php (Corrected - consistent DoctorController usage)
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DatabaseExportController;
use App\Http\Controllers\ChatbotController;
use App\Http\Controllers\PatientAIController;
// Home Controllers
use App\Http\Controllers\HomeBannerController;
use App\Http\Controllers\DoctorController; // Corrected import (was DoctorsController)
use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\PatientController;

Route::get('/', fn() => redirect()->route('login'));

// Guest Routes
Route::middleware('guest')->group(function () {
    Route::get('/login', [AuthenticatedSessionController::class, 'create'])->name('login');
    Route::post('/login', [AuthenticatedSessionController::class, 'store']);
});



// routes/web.php
Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [App\Http\Controllers\AppointmentController::class, 'dashboard'])
        ->name('dashboard');

//chat-bot
// Route::post('/chatbot/respond', [ChatbotController::class, 'respond'])->name('chatbot.respond');
// Route::post('/ai/find-similar', [PatientAIController::class, 'findSimilarSymptoms'])->name('ai.findSimilar');
Route::post('/chatbot/respond', [ChatbotController::class, 'respond'])->name('chatbot.respond');
Route::get('/chatbot/health', [ChatbotController::class, 'health'])->name('chatbot.health');

    // Database Export
    Route::get('/export-database', [DatabaseExportController::class, 'export'])->name('export.database');

    // ──────────────────────────────────────
    // Home Banners (CRUD + Toggle Status)
    // ──────────────────────────────────────
    Route::get('/home-banners', [HomeBannerController::class, 'index'])->name('home-banners');

    Route::resource('home-banners', HomeBannerController::class)->except(['index']);

    Route::post('/home-banners/{homeBanner}/toggle-status', [HomeBannerController::class, 'toggleStatus'])
         ->name('home-banners.toggle-status');

    // ──────────────────────────────────────
    // Doctors (CRUD + Toggle Status)
    // ──────────────────────────────────────
    Route::get('/doctors', [DoctorController::class, 'index'])->name('doctors'); // Fixed class name

    Route::resource('doctors', DoctorController::class)->except(['index']); // Fixed class name

    Route::post('/doctors/{doctor}/toggle-status', [DoctorController::class, 'toggleStatus']) // Fixed class name
         ->name('doctors.toggle-status');
    

// Admin Routes (Prefix: admin)
Route::prefix('admin')->name('admin.')->group(function () {
    /// Appointments Management
    Route::get('/appointments', [AppointmentController::class, 'index'])->name('appointments.index');
    Route::post('/appointments', [AppointmentController::class, 'store'])->name('appointments.store');

    // Patients Management
    Route::get('/patients', [AppointmentController::class, 'patients'])->name('patients.index');
    Route::post('/patients', [AppointmentController::class, 'storePatient'])->name('patients.store');
    Route::get('/patients/{id}', [AppointmentController::class, 'showPatient'])->name('patients.show');
    Route::post('/patients/{patientId}/visits', [AppointmentController::class, 'storeVisit'])->name('patients.visits.store');
});

    // ──────────────────────────────────────
    // Profile & Logout
    // ──────────────────────────────────────
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');
});
Route::get('/debug-gemini', function() {
    return [
        'env_key' => env('GEMINI_API_KEY') ? 'Set (' . substr(env('GEMINI_API_KEY'), 0, 10) . '...)' : 'Not set',
        'config_key' => config('services.gemini.key') ? 'Set (' . substr(config('services.gemini.key'), 0, 10) . '...)' : 'Not set',
        'config_services' => config('services.gemini')
    ];
});
require __DIR__.'/auth.php';