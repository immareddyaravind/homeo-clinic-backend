<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>@yield('title', 'Positive Homeo Health Care')</title>

    <!-- Favicons -->
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('assets/img/apple-touch-icon.png') }}">
    <link rel="icon" href="{{ asset('assets/images/favicon.png') }}" type="image/x-icon">
    <link rel="shortcut icon" type="image/x-icon" href="{{ asset('assets/images/favicon.png') }}">

    <!-- CSS -->
    @stack('styles')
    @include('layouts.partials.styles')
</head>

<body>
    <!-- Main Wrapper -->
    <div class="main-wrapper">
        @include('layouts.navigation')

        <!-- Page Wrapper -->
        <div class="page-wrapper">
            <div class="content">
                @yield('content')
            </div>
        </div>
        <!-- /Page Wrapper -->
    </div>
    <!-- /Main Wrapper -->

    <!-- JavaScript -->
    @stack('scripts')
    @include('layouts.partials.scripts')
</body>
</html>