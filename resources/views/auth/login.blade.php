<!DOCTYPE html>
<html lang="en"> 
<head>

    <!-- Meta Tags -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description">
    <meta name="keywords">
    <meta name="author" content="">
    <meta name="robots" content="">

    <!-- Title -->
    <title>Positive Homeo Health Care</title>

    <!-- Apple Touch Icon -->
    <link rel="apple-touch-icon" sizes="180x180" href="assets/img/apple-touch-icon.png">

    <!-- Favicon -->
    <link rel="icon" href="assets/img/favicon.png" type="image/x-icon">
    <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.png">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">

    <!-- Tabler Icon CSS -->
    <link rel="stylesheet" href="assets/plugins/tabler-icons/tabler-icons.css">

    <!-- Fontawesome CSS -->
    <link rel="stylesheet" href="assets/plugins/fontawesome/css/fontawesome.min.css">
    <link rel="stylesheet" href="assets/plugins/fontawesome/css/all.min.css">

    <!-- Main CSS -->
    <link rel="stylesheet" href="assets/css/style.css">

</head>

<body class="account-page">

    <!-- Main Wrapper -->
    <div class="main-wrapper">

        <div class="account-content">
            <div class="d-flex flex-wrap w-100 vh-100 overflow-hidden account-bg-01">
                <div class="d-flex align-items-center justify-content-center w-50 account-bg-01">
                    <!-- Background image will be handled by CSS -->
                </div>
                <div
                    class="d-flex align-items-center justify-content-center flex-wrap vh-100 overflow-auto p-4 w-50 bg-backdrop">
                    <div class="flex-fill">
                        <div class="mx-auto mw-450">
                            <div class="text-center mb-4">
                                <img src="assets/images/logo.png" class="img-fluid" alt="Logo" width="200px">
                            </div>
                            <div class="mb-4">
                                <!-- <h4 class="mb-2 fs-20">Sign In</h4> -->
                                <!-- <p>Access the CRMS panel using your email and passcode.</p> -->
                            </div>

                            <form method="POST" action="{{ route('login') }}">
                            @csrf
                            <div class="mb-3">
                                <label class="col-form-label">Email Address</label>
                                <div class="position-relative">
                                    <span class="input-icon-addon">
                                        <i class="ti ti-mail"></i>
                                    </span>
                                    <input id="email" class="block mt-1 w-full form-control" type="email" name="email" value="{{ old('email') }}" required autofocus autocomplete="username" />
                                    @error('email')
                                        <div class="mt-2 text-danger">{{ $message }}</div>
                                    @enderror
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="col-form-label">Password</label>
                                <div class="pass-group">
                                    <input id="password" class="block mt-1 w-full pass-input form-control"
                                    type="password"
                                    name="password"
                                    required autocomplete="current-password" />
                                     <span class="toggle-password ti ti-eye-off" id="togglePassword"></span>
                                    @error('password')
                                        <div class="mt-2 text-danger">{{ $message }}</div>
                                    @enderror
                                </div>
                            </div>
                            <div class="d-flex align-items-center justify-content-between mb-3">
                                <div class="form-check form-check-md d-flex align-items-center">
                                    <!-- <input class="form-check-input" type="checkbox" name="remember" id="checkebox-md"
                                        checked="">
                                    <label class="form-check-label" for="checkebox-md">
                                        Remember Me
                                    </label> -->
                                </div>
                                <div class="text-end">
                                    <!-- @if (Route::has('password.request'))
                                    <a href="{{ route('password.request') }}" class="text-primary fw-medium link-hover">Forgot
                                        Password?</a>
                                    @endif -->
                                </div>
                            </div>
                            <div class="mb-3">
                                <button type="submit" class="btn btn-primary w-100">Sign In</button>
                            </div>
                            </form>
                            <div class="text-center">
                                <p class="fw-medium text-gray">Copyright © 2025 - Positive Homeo Health Care</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <!-- /Main Wrapper -->

    <style>
        .pass-group {
            position: relative;
        }

        .toggle-password {
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            z-index: 5;
        }

        .pass-input {
            padding-right: 40px; /* Space for the icon */
        }
    </style>

    <!-- jQuery -->
    <script src="{{ asset('assets/js/jquery-3.7.1.min.js') }}"></script>

    <!-- Bootstrap Core JS -->
    <script src="{{ asset('assets/js/bootstrap.bundle.min.js') }}"></script>

    <!-- Feather Icon JS -->
    <script src="{{ asset('assets/js/feather.min.js') }}"></script>

    <!-- Slimscroll JS -->
    <script src="{{ asset('assets/js/jquery.slimscroll.min.js') }}"></script>

    <!-- Custom JS -->
    <script src="{{ asset('assets/js/script.js') }}"></script>

    <script>
        // Pure JavaScript solution (no jQuery dependency)
        document.addEventListener('DOMContentLoaded', function() {
            const togglePassword = document.getElementById('togglePassword');
            const passwordInput = document.getElementById('password');
            
            if (togglePassword && passwordInput) {
                togglePassword.addEventListener('click', function() {
                    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                    passwordInput.setAttribute('type', type);
                    
                    // Toggle icon classes
                    this.classList.toggle('ti-eye-off');
                    this.classList.toggle('ti-eye');
                });
            }
        });
    </script>

    <script src="assets/js/rocket-loader.min.js" data-cf-settings="2b207b5ac9cfaeb8182d43c7-|49" defer></script> 
</body>
 
</html>