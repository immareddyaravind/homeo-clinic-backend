{{-- resources/views/admin/doctors/index.blade.php --}}
@extends('layouts.app')

@section('content')
<div class="row">
    <div class="col-md-12">
        @if(session('success'))
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            {{ session('success') }}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        @endif
        
        @if(session('error'))
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            {{ session('error') }}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        @endif
        <!-- Create Doctor Form -->
        <div class="card">
            <div class="card-header">
                <h5 class="card-title"> Doctors</h5>
            </div>
            <div class="card-body">
                <form method="POST" action="{{ route('doctors.store') }}" enctype="multipart/form-data">
                    @csrf
                    <div class="row">
                        <div class="col-md-6"> 
                            <div class="mb-3">
                                <label class="form-label"> Image<span class="text-danger">*</span></label>
                                <input type="file" class="form-control @error('image') is-invalid @enderror" 
                                    id="image" name="image" accept="image/*" required>
                                @error('image')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>
                        </div> 
                        <div class="col-md-6"> 
                            <div class="mb-3">
                                <label class="form-label">Name<span class="text-danger">*</span></label>
                                <input type="text" class="form-control @error('name') is-invalid @enderror" 
                                    id="name" name="name" value="{{ old('name') }}" required>
                                @error('name')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>
                        </div>
                        <div class="col-md-6"> 
                            <div class="mb-3">
                                <label class="form-label">Title<span class="text-danger">*</span></label>
                                <input type="text" class="form-control @error('title') is-invalid @enderror" 
                                    id="title" name="title" value="{{ old('title') }}" required>
                                @error('title')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>
                        </div>
                        <div class="col-md-6"> 
                            <div class="mb-3">
                                <label class="form-label">Experience<span class="text-danger">*</span></label>
                                <input type="text" class="form-control @error('experience') is-invalid @enderror" 
                                    id="experience" name="experience" value="{{ old('experience') }}" required>
                                @error('experience')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Specialization<span class="text-danger">*</span></label>
                                <textarea class="form-control @error('specialization') is-invalid @enderror" 
                                    id="specialization" name="specialization" rows="3" required>{{ old('specialization') }}</textarea>
                                @error('specialization')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Expertise (JSON Array)<span class="text-danger">*</span></label>
                                <small class="text-muted">e.g., ["Point 1", "Point 2"]</small>
                                <textarea class="form-control @error('expertise') is-invalid @enderror" 
                                    id="expertise" name="expertise" rows="3" required>{{ old('expertise') }}</textarea>
                                @error('expertise')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="mb-3">
                                <label class="form-label">Quote<span class="text-danger">*</span></label>
                                <textarea class="form-control @error('quote') is-invalid @enderror" 
                                    id="quote" name="quote" rows="3" required>{{ old('quote') }}</textarea>
                                @error('quote')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>
                        </div>
                        <div class="col-md-6"> 
                            <div class="mb-3">
                                <label class="form-label">Phone<span class="text-danger">*</span></label>
                                <input type="text" class="form-control @error('phone') is-invalid @enderror" 
                                    id="phone" name="phone" value="{{ old('phone') }}" required>
                                @error('phone')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>
                        </div>
                        <div class="col-md-6"> 
                            <div class="mb-3">
                                <label class="form-label">Email<span class="text-danger">*</span></label>
                                <input type="email" class="form-control @error('email') is-invalid @enderror" 
                                    id="email" name="email" value="{{ old('email') }}" required>
                                @error('email')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>
                        </div>
                    </div>
                    <div class="text-end">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        <!-- End Create Form -->

        <!-- Doctors List -->
        <div class="card mt-4">
            <div class="card-header">
                <h5 class="card-title"> Doctors List</h5>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table id="datatable" class="table table-striped">
                        <thead>
                            <tr>
                                <th>S. No.</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Title</th>
                                <th>Experience</th>
                                <th>Quote</th>
                                <th>Status</th> 
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($doctors as $doctor)
                            <tr>
                                <td>{{ $loop->iteration }}</td>
                                <td><img src="{{ asset('storage/'.$doctor->image_path) }}" width="60px"></td>
                                <td>{{ Str::limit($doctor->name, 50) }}</td> 
                                <td>{{ Str::limit($doctor->title, 50) }}</td> 
                                <td>{{ Str::limit($doctor->experience, 50) }}</td> 
                                <td>{{ Str::limit(strip_tags($doctor->quote), 50) }}</td> 
                                <td>
                                    <span class="badge bg-{{ $doctor->status ? 'success' : 'danger' }}">
                                        {{ $doctor->status ? 'Published' : 'Draft' }}
                                    </span>
                                </td>
                                <td>
                                    <a href="{{ route('doctors.edit', $doctor->id) }}" class="btn btn-icon btn-sm btn-success">
                                        <i class="feather-edit"></i>
                                    </a>
                                    <form action="{{ route('doctors.toggle-status', $doctor->id) }}" method="POST" style="display:inline">
                                        @csrf
                                        <button type="submit" class="btn btn-icon btn-sm btn-info">
                                            <i class="feather-pause-circle"></i>
                                        </button>
                                    </form>
                                    <form action="{{ route('doctors.destroy', $doctor->id) }}" method="POST" style="display:inline">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="btn btn-icon btn-sm btn-danger" onclick="return confirm('Are you sure?')">
                                            <i class="feather-trash"></i>
                                        </button>
                                    </form>
                                </td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection