<?php

namespace App\Providers;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Sikessem\Application;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    #[\Override]
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        /** @var Application $app */
        $app = $this->app;
        /** @var string $buildDirectory */
        $buildDirectory = config('assets.buildDirectory', 'static');
        Model::shouldBeStrict(! $app->isProduction());
        Route::model('user', User::class);
        Paginator::useTailwind();
        Vite::useBuildDirectory($buildDirectory);
    }
}
