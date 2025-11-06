{{-- resources/views/admin/doctors/edit.blade.php --}}
@extends('layouts.app')

@section('content')
<div class="row">
    <div class="col-md-12">
        <div class="card">
            <div class="card-header">
                <h5 class="card-title">Edit Doctor</h5>
            </div>
            <div class="card-body">
                <form method="POST" action="{{ route('doctors.update', $doctor->id) }}" enctype="multipart/form-data">
                    @csrf
                    @method('PUT')

                    <div class="row">
                        <div class="col-md-6"> 
                            <div class="mb-3">
                                <label class="form-label"> Image</label>
                                <div class="custom-file-container form-control" data-upload-id="doctorImage">
                                    <label class="custom-file-container__custom-file">
                                        <input type="file" name="image" class="custom-file-container__custom-file__custom-file-input">
                                        <input type="hidden" name="MAX_FILE_SIZE" value="10485760">
                                        <span class="custom-file-container__custom-file__custom-file-control"></span>
                                    </label>
                                    <div class="custom-file-container__image-preview" style="display: {{ $doctor->image_path ? 'block' : 'none' }};">
                                        <img src="{{ asset('storage/'.$doctor->image_path) }}" width="100" class="mt-2">
                                    </div>
                                </div>
                                <small class="form-text text-muted">Allowed JPG, PNG or GIF. Max size 2MB</small>
                            </div>
                        </div> 
                        <div class="col-md-6"> 
                            <div class="mb-3">
                                <label class="form-label">Name<span class="text-danger">*</span></label>
                                <input type="text" name="name" class="form-control @error('name') is-invalid @enderror" 
                                    value="{{ old('name', $doctor->name) }}" required>
                                @error('name')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>
                        </div>
                        <div class="col-md-6"> 
                            <div class="mb-3">
                                <label class="form-label">Title<span class="text-danger">*</span></label>
                                <input type="text" name="title" class="form-control @error('title') is-invalid @enderror" 
                                    value="{{ old('title', $doctor->title) }}" required>
                                @error('title')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>
                        </div>
                        <div class="col-md-6"> 
                            <div class="mb-3">
                                <label class="form-label">Experience<span class="text-danger">*</span></label>
                                <input type="text" name="experience" class="form-control @error('experience') is-invalid @enderror" 
                                    value="{{ old('experience', $doctor->experience) }}" required>
                                @error('experience')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Specialization<span class="text-danger">*</span></label>
                                <textarea name="specialization" class="form-control @error('specialization') is-invalid @enderror" 
                                    rows="3" required>{{ old('specialization', $doctor->specialization) }}</textarea>
                                @error('specialization')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Expertise (JSON Array)<span class="text-danger">*</span></label>
                                <small class="text-muted">e.g., ["Point 1", "Point 2"]</small>
                                <textarea name="expertise" class="form-control @error('expertise') is-invalid @enderror" 
                                    rows="3" required>{{ old('expertise', json_encode($doctor->expertise)) }}</textarea>
                                @error('expertise')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="mb-3">
                                <label class="form-label">Quote<span class="text-danger">*</span></label>
                                <textarea name="quote" class="form-control @error('quote') is-invalid @enderror" 
                                    rows="3" required>{{ old('quote', $doctor->quote) }}</textarea>
                                @error('quote')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>
                        </div>
                        <div class="col-md-6"> 
                            <div class="mb-3">
                                <label class="form-label">Phone<span class="text-danger">*</span></label>
                                <input type="text" name="phone" class="form-control @error('phone') is-invalid @enderror" 
                                    value="{{ old('phone', $doctor->phone) }}" required>
                                @error('phone')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>
                        </div>
                        <div class="col-md-6"> 
                            <div class="mb-3">
                                <label class="form-label">Email<span class="text-danger">*</span></label>
                                <input type="email" name="email" class="form-control @error('email') is-invalid @enderror" 
                                    value="{{ old('email', $doctor->email) }}" required>
                                @error('email')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>
                        </div>
                    </div>
                    
                    <div class="text-end">
                        <a href="{{ route('doctors') }}" class="btn btn-light me-2">Cancel</a>
                        <button type="submit" class="btn btn-primary">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection

@section('scripts')
<script>
    // Initialize file upload preview
    document.addEventListener('DOMContentLoaded', function() {
        const fileInput = document.querySelector('input[name="image"]');
        const previewContainer = document.querySelector('.custom-file-container__image-preview');
        
        fileInput.addEventListener('change', function() {
            if (this.files && this.files[0]) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    previewContainer.style.display = 'block';
                    previewContainer.querySelector('img').src = e.target.result;
                }
                reader.readAsDataURL(this.files[0]);
            }
        });
    });
</script>
@endsection