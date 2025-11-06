@extends('layouts.app')

@section('content')
<div class="row">
    <div class="col-md-12">

        <!-- Success Message -->
        @if(session('success'))
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                {{ session('success') }}
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        @endif

        <!-- Add Manual Appointment -->
        <div class="card mb-4">
            <div class="card-header">
                <h5 class="card-title mb-0">Add Manual Appointment</h5>
            </div>
            <div class="card-body">
                <form method="POST" action="{{ route('admin.appointments.store') }}">
                    @csrf
                    <div class="row g-3">
                        <div class="col-md-3">
                            <label class="form-label">Full Name <span class="text-danger">*</span></label>
                            <input type="text" name="full_name" class="form-control" value="{{ old('full_name') }}" required>
                            @error('full_name') <small class="text-danger">{{ $message }}</small> @enderror
                        </div>
                        <div class="col-md-3">
                            <label class="form-label">Phone Number <span class="text-danger">*</span></label>
                            <input type="tel" name="phone_number" class="form-control" value="{{ old('phone_number') }}" required>
                            @error('phone_number') <small class="text-danger">{{ $message }}</small> @enderror
                            <small class="text-muted">Auto-link to existing patient</small>
                        </div>
                        <div class="col-md-3">
                            <label class="form-label">Date <span class="text-danger">*</span></label>
                            <input type="date" name="appointment_date" class="form-control" min="{{ date('Y-m-d') }}" value="{{ old('appointment_date') }}" required>
                            @error('appointment_date') <small class="text-danger">{{ $message }}</small> @enderror
                        </div>
                        <div class="col-md-3">
                            <label class="form-label">Time <span class="text-danger">*</span></label>
                            <input type="time" name="appointment_time" class="form-control" value="{{ old('appointment_time') }}" required>
                            @error('appointment_time') <small class="text-danger">{{ $message }}</small> @enderror
                        </div>
                    </div>
                    <div class="text-end mt-3">
                        <button type="submit" class="btn btn-primary">Add Appointment</button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Search Form -->
        <div class="card mb-3">
            <div class="card-body">
                <form method="GET" action="{{ route('admin.appointments.index') }}" class="row g-3 align-items-end">
                    <div class="col-md-4">
                        <label class="form-label">Search Patient</label>
                        <input type="text" name="search" class="form-control" 
                               placeholder="Name or Phone Number" value="{{ $search ?? '' }}">
                    </div>
                    <div class="col-md-3">
                        <button type="submit" class="btn btn-primary w-100">
                            Search
                        </button>
                    </div>
                    @if($search)
                    <div class="col-md-3">
                        <a href="{{ route('admin.appointments.index') }}" class="btn btn-secondary w-100">
                            Clear
                        </a>
                    </div>
                    @endif
                </form>
            </div>
        </div>

        <!-- Today's Appointments -->
        <div class="card">
            <div class="card-header d-flex justify-content-between align-items-center">
                <h5 class="card-title mb-0">
                    Today's Appointments
                    <small class="text-muted">({{ \Carbon\Carbon::today()->format('d-m-Y') }})</small>
                </h5>
                <span class="badge bg-primary fs-6">{{ $appointments->count() }}</span>
            </div>
            <div class="card-body">
                @if($appointments->isEmpty())
                    <p class="text-center text-muted mb-0">
                        {{ $search ? 'No matching appointments found.' : 'No appointments scheduled for today.' }}
                    </p>
                @else
                    <div class="table-responsive">
                        <table class="table table-hover align-middle">
                            <thead class="table-light">
                                <tr>
                                    <th>#</th>
                                    <th>Time</th>
                                    <th>Patient</th>
                                    <th>Type</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($appointments as $appointment)
                                    <tr>
                                        <td>{{ $loop->iteration }}</td>
                                        <td><strong>{{ $appointment->appointment_time }}</strong></td>
                                        <td>
                                            <div>{{ $appointment->patient->full_name ?? '—' }}</div>
                                            <small class="text-muted">{{ $appointment->patient->phone_number ?? '' }}</small>
                                        </td>
                                        <td>
                                            <span class="badge bg-{{ $appointment->type == 'online' ? 'info' : 'secondary' }}">
                                                {{ ucfirst($appointment->type) }}
                                            </span>
                                        </td>
                                        <td>
                                            <span class="badge bg-{{ 
                                                $appointment->status == 'pending' ? 'warning' : 
                                                ($appointment->status == 'completed' ? 'success' : 'danger') 
                                            }}">
                                                {{ ucfirst($appointment->status) }}
                                            </span>
                                        </td>
                                        <td>
                                            <a href="{{ route('admin.patients.show', $appointment->patient_id) }}" 
                                               class="btn btn-sm btn-outline-info">
                                                View
                                            </a>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                @endif
            </div>
        </div>
    </div>
</div>
@endsection