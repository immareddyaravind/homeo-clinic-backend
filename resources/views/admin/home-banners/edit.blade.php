{{-- resources/views/admin/home-banners/edit.blade.php --}}
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

        <div class="card">
            <div class="card-header">
                <h5 class="card-title mb-0">Edit Home Banner</h5>
            </div>
            <div class="card-body">
                <form method="POST" action="{{ route('home-banners.update', $homeBanner->id) }}" enctype="multipart/form-data">
                    @csrf
                    @method('PUT')

                    <div class="row">
                        <div class="col-md-6">
                            <!-- Current Image -->
                            @if($homeBanner->image)
                                <div class="mb-3">
                                    <label class="form-label">Current Image</label><br>
                                    <img src="{{ asset('storage/'.$homeBanner->image) }}"
                                         alt="Current Banner" width="150" height="100" style="object-fit: cover;">
                                </div>
                            @endif

                            <!-- New Image -->
                            <div class="mb-3">
                                <label class="form-label">New Image (optional)</label>
                                <input type="file" class="form-control @error('image') is-invalid @enderror"
                                       name="image" accept="image/*">
                                @error('image')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Title <span class="text-danger">*</span></label>
                                <input type="text" class="form-control @error('title') is-invalid @enderror"
                                       name="title" value="{{ old('title', $homeBanner->title) }}" required>
                                @error('title')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="mb-3">
                                <label class="form-label">Content <span class="text-danger">*</span></label>
                                <textarea class="form-control @error('content') is-invalid @enderror"
                                          name="content" rows="5" required>{{ old('content', $homeBanner->content) }}</textarea>
                                @error('content')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>
                        </div>
                    </div>

                    <div class="text-end">
                        <button type="submit" class="btn btn-primary">Update</button>
                        <a href="{{ route('home-banners') }}" class="btn btn-secondary">Cancel</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection