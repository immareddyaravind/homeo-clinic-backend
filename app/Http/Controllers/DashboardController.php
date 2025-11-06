<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Patient;
use App\Models\Appointment;
use App\Models\Visit;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Collection;

class DashboardController extends Controller
{
    public function index()
    {
        $today = Carbon::today();

        // 1. Total Patients
        $totalPatients = Patient::count();

        // 2. Today's Appointments - Use Carbon for date comparison
        $todayAppointments = Appointment::whereDate('appointment_date', $today)->count();

        // 3. Manual & Online (Total)
        $manualAppointments = Appointment::where('type', 'manual')->count();
        $onlineAppointments = Appointment::where('type', 'online')->count();

        // 4. Weekly Visits (Last 7 Days)
        $startDate = $today->copy()->subDays(6);
        $weeklyData = DB::table('visits')
            ->selectRaw('DATE(visit_date) as date, COUNT(*) as count')
            ->whereDate('visit_date', '>=', $startDate)
            ->groupBy('date')
            ->orderBy('date')
            ->get()
            ->pluck('count', 'date');

        // Fill missing dates
        $weeklyVisits = collect();
        for ($i = 6; $i >= 0; $i--) {
            $date = $today->copy()->subDays($i);
            $dateKey = $date->format('Y-m-d');
            $weeklyVisits[$dateKey] = $weeklyData->get($dateKey, 0);
        }

        // 5. Common Symptoms This Month (3+ Occurrences)
        $startOfMonth = $today->copy()->startOfMonth();
        $endOfMonth = $today->copy()->endOfMonth();

        $symptomQuery = DB::table('visits')
            ->whereBetween('visit_date', [$startOfMonth, $endOfMonth])
            ->whereNotNull('symptoms')
            ->where('symptoms', '!=', '')
            ->selectRaw('LOWER(TRIM(symptoms)) as symptom, COUNT(*) as count')
            ->groupBy('symptom')
            ->orderByDesc('count')
            ->get();

        $commonSymptoms = collect($symptomQuery)->filter(function ($item) {
            return $item->count >= 3;
        })->pluck('count', 'symptom')->sortByDesc(function ($count) {
            return $count;
        });

        return view('admin.dashboard', compact(
            'totalPatients',
            'todayAppointments',
            'manualAppointments',
            'onlineAppointments',
            'weeklyVisits',
            'commonSymptoms'
        ));
    }
}