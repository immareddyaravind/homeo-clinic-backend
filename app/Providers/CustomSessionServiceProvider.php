<?php
namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Session;
use Illuminate\Session\SessionManager;
use App\Services\CustomSessionHandler;

class CustomSessionServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->singleton(SessionManager::class, function ($app) {
            return new SessionManager($app);
        });

        $this->app->bind('session', function ($app) {
            return new SessionManager($app);
        });
    }

    public function boot()
    {
        // Register custom session handler here
        Session::extend('custom', function ($app) {
            return new CustomSessionHandler();
        });
    }
}
