@extends('layouts.app')

@section('title', 'Dashboard')

@section('content')
<style>
    :root {
        --primary-color: #3d6b48;
        --primary-dark: #1a201b;
        --primary-light: #06B6D4;
        --secondary-color: #10B981;
        --warning-color: #F59E0B;
        --danger-color: #EF4444;
        --info-color: #3B82F6;
    }

    .welcome-wrap {
        background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
        padding: 30px;
        border-radius: 12px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }

    .card {
        transition: all 0.3s ease;
        border: none;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    }

    .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    }

    .avatar-lg {
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 12px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }

    .avatar-lg i { color: white; }

    .bg-primary { background: linear-gradient(135deg, var(--primary-color), var(--primary-light)) !important; }
    .bg-success { background: linear-gradient(135deg, var(--secondary-color), #059669) !important; }
    .bg-info { background: linear-gradient(135deg, var(--info-color), #2563EB) !important; }
    .bg-warning { background: linear-gradient(135deg, var(--warning-color), #D97706) !important; }

    .text-primary { color: var(--primary-color) !important; }
    .text-success { color: var(--secondary-color) !important; }

    .btn-light {
        background: white;
        color: var(--primary-color);
        border: 2px solid white;
        font-weight: 600;
        padding: 10px 24px;
        border-radius: 8px;
        transition: all 0.3s ease;
    }

    .btn-light:hover {
        background: var(--primary-light);
        color: white;
        border-color: var(--primary-light);
        transform: translateY(-2px);
    }

    .card-header h5 {
        color: var(--primary-dark);
        font-weight: 600;
    }

    .page-title {
        color: var(--primary-dark);
        font-weight: 700;
    }

    .card-body h4 {
        color: var(--primary-dark);
        font-weight: 700;
        font-size: 28px;
    }

    .symptom-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;
        font-size: 0.95rem;
        border-bottom: 1px solid #eee;
    }

    .symptom-name {
        flex: 1;
        font-weight: 500;
        color: var(--primary-dark);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .symptom-count {
        font-weight: bold;
        color: var(--primary-color);
        min-width: 40px;
        text-align: right;
    }

    .symptom-bar {
        height: 10px;
        background: var(--primary-light);
        border-radius: 5px;
        transition: width 0.6s ease;
        margin: 0 10px;
        flex: 0 0 150px;
    }

    .no-data {
        text-align: center;
        color: #6c757d;
        font-style: italic;
        padding: 40px 20px;
    }

    .debug-box {
        background: #f8f9fa;
        border: 1px solid #dee2e6;
        border-radius: 8px;
        padding: 15px;
        margin-bottom: 20px;
        font-family: monospace;
        font-size: 0.9rem;
        max-height: 300px;
        overflow-y: auto;
    }
</style>

<div class="row">
    <div class="col-md-12">
        <div class="page-header">
            <div class="row align-items-center">
                <div class="col-md-4">
                    <h3 class="page-title">Dashboard</h3>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Welcome Section -->
<div class="welcome-wrap mb-4">
    <div class="d-flex align-items-center justify-content-between flex-wrap">
        <div class="mb-3">
            <h2 class="mb-1 text-white">Welcome {{ Auth::user()->name ?? 'Doctor' }}</h2>
            <p class="text-light">Your Clinic Management Dashboard</p>
        </div>
        <div class="d-flex align-items-center flex-wrap mb-1">
            <a href="{{ route('admin.patients.index') }}" class="btn btn-light btn-md mb-2">View Patients</a>
        </div>
    </div>
</div>

<!-- DEBUG: Remove this entire block after confirming it works -->
@if(isset($rawVisits))
<div class="debug-box">
    <strong>DEBUG: Today's Visits (Raw)</strong><br>
    <pre>{{ print_r($rawVisits->toArray(), true) }}</pre>
    <strong>DEBUG: Common Symptoms Query Result</strong><br>
    <pre>{{ print_r($commonSymptoms->toArray(), true) }}</pre>
</div>
@endif

<!-- Stats Cards -->
<div class="row">
    <!-- Total Patients -->
    <div class="col-lg-3 col-md-6 d-flex">
        <div class="card flex-fill">
            <div class="card-body d-flex align-items-center justify-content-between">
                <div>
                    <p class="fs-12 fw-medium mb-1 text-truncate">Total Patients</p>
                    <h4>{{ $totalPatients ?? 0 }}</h4>
                </div>
                <div>
                    <span class="avatar avatar-lg bg-primary flex-shrink-0">
                        <i class="ti ti-users fs-30"></i>
                    </span>
                </div>
            </div>
        </div>
    </div>

    <!-- Today's Appointments -->
    <div class="col-lg-3 col-md-6 d-flex">
        <div class="card flex-fill">
            <div class="card-body d-flex align-items-center justify-content-between">
                <div>
                    <p class="fs-12 fw-medium mb-1 text-truncate">Appointments Today</p>
                    <h4>{{ $todayAppointments ?? 0 }}</h4>
                </div>
                <div>
                    <span class="avatar avatar-lg bg-success flex-shrink-0">
                        <i class="ti ti-calendar-event fs-30"></i>
                    </span>
                </div>
            </div>
        </div>
    </div>

    <!-- Manual Appointments -->
    <div class="col-lg-3 col-md-6 d-flex">
        <div class="card flex-fill">
            <div class="card-body d-flex align-items-center justify-content-between">
                <div>
                    <p class="fs-12 fw-medium mb-1 text-truncate">Manual Bookings</p>
                    <h4>{{ $manualAppointments ?? 0 }}</h4>
                </div>
                <div>
                    <span class="avatar avatar-lg bg-info flex-shrink-0">
                        <i class="ti ti-calendar-check fs-30"></i>
                    </span>
                </div>
            </div>
        </div>
    </div>

    <!-- Online Appointments -->
    <div class="col-lg-3 col-md-6 d-flex">
        <div class="card flex-fill">
            <div class="card-body d-flex align-items-center justify-content-between">
                <div>
                    <p class="fs-12 fw-medium mb-1 text-truncate">Online Bookings</p>
                    <h4>{{ $onlineAppointments ?? 0 }}</h4>
                </div>
                <div>
                    <span class="avatar avatar-lg bg-warning flex-shrink-0">
                        <i class="ti ti-world fs-30"></i>
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Common Symptoms Today -->
<!-- Common Symptoms Today -->
<div class="row mt-4">
    <div class="col-12 d-flex">
        <div class="card flex-fill">
            <div class="card-header pb-2">
                <h5 class="mb-2">Common Symptoms (Today)</h5>
            </div>
            <div class="card-body">
                @if($commonSymptoms->isEmpty())
                    <p class="no-data">No valid symptoms recorded today.</p>
                @else
                    @php $maxCount = $commonSymptoms->values()->max(); @endphp
                    @foreach($commonSymptoms as $symptom => $count)
                        <div class="symptom-item">
                            <div class="symptom-name" title="{{ $symptom }}">{{ Str::limit($symptom, 30) }}</div>
                            <div class="symptom-bar" style="width: {{ ($count / $maxCount) * 100 }}%"></div>
                            <div class="symptom-count">{{ $count }}</div>
                        </div>
                    @endforeach
                @endif
            </div>
        </div>
    </div>
</div>
</div>

@endsection

@section('scripts')
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', function () {
        const weeklyVisitsData = @json($weeklyVisits ?? []);
        const dates = Object.keys(weeklyVisitsData);
        const counts = Object.values(weeklyVisitsData);

        const formattedDates = dates.map(date => {
            const d = new Date(date + 'T00:00:00');
            return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
        });

        const ctx = document.getElementById('weeklyVisitsChart');
        if (ctx && counts.some(c => c > 0)) {
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: formattedDates,
                    datasets: [{
                        label: 'Patients Visited',
                        data: counts,
                        borderColor: '#3d6b48',
                        backgroundColor: 'rgba(61, 107, 72, 0.1)',
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: '#3d6b48',
                        pointRadius: 5
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: { y: { beginAtZero: true, ticks: { stepSize: 1 }, min: 0 } }
                }
            });
        }
    });
</script>
@endsection