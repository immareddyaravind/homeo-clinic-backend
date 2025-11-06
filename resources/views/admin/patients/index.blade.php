@extends('layouts.app')

@section('content')
<div class="row">
    <div class="col-md-12">
        @if(session('success'))
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                {{ session('success') }}
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        @endif

        <!-- Add Patient Form -->
        <div class="card">
            <div class="card-header">
                <h5 class="card-title">Add New Patient</h5>
            </div>
            <div class="card-body">
                <form method="POST" action="{{ route('admin.patients.store') }}">
                    @csrf
                    <div class="row">
                        <div class="col-md-4">
                            <div class="mb-3">
                                <label class="form-label">Full Name <span class="text-danger">*</span></label>
                                <input type="text" name="full_name" class="form-control" value="{{ old('full_name') }}" required>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="mb-3">
                                <label class="form-label">Phone Number <span class="text-danger">*</span></label>
                                <input type="tel" name="phone_number" class="form-control" value="{{ old('phone_number') }}" required>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="mb-3">
                                <label class="form-label">Email Address <span class="text-danger">*</span></label>
                                <input type="email" name="email_address" class="form-control" value="{{ old('email_address') }}" required>
                            </div>
                        </div>
                    </div>
                    <div class="text-end">
                        <button type="submit" class="btn btn-primary">Add Patient</button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Search Form -->
        <form method="GET" action="{{ route('admin.patients.index') }}" class="card mt-3">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6">
                        <input type="text" name="search" value="{{ $search }}" class="form-control" placeholder="Search by name, phone, or email...">
                    </div>
                    <div class="col-md-2">
                        <button type="submit" class="btn btn-primary">Search</button>
                    </div>
                    @if($search)
                        <div class="col-md-4">
                            <a href="{{ route('admin.patients.index') }}" class="btn btn-secondary">Clear</a>
                        </div>
                    @endif
                </div>
            </div>
        </form>

        <!-- Patients List -->
        <div class="card mt-4">
            <div class="card-header">
                <h5 class="card-title">All Patients List</h5>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table id="datatable" class="table table-striped">
                        <thead>
                            <tr>
                                <th>S. No.</th>
                                <th>Full Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Created At</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($patients as $patient)
                                <tr>
                                    <td>{{ $loop->iteration }}</td>
                                    <td>{{ $patient->full_name }}</td>
                                    <td>{{ $patient->phone_number }}</td>
                                    <td>{{ $patient->email_address }}</td>
                                    <td>{{ $patient->created_at->format('d/m/Y') }}</td>
                                    <td>
                                        <a href="{{ route('admin.patients.show', $patient->id) }}" class="btn btn-sm btn-info">
                                            View
                                        </a>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                    {{ $patients->appends(['search' => $search])->links() }}
                </div>
            </div>
        </div>
    </div>
</div>
@endsection