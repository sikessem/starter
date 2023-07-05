<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Http;
use Spatie\Sitemap\SitemapGenerator;

/*
|--------------------------------------------------------------------------
| Console Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of your Closure based console
| commands. Each Closure is bound to a command instance allowing a
| simple approach to interacting with each command's IO methods.
|
*/

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

Artisan::command('make:sitemap', function () {
    $this->info('Generating sitemap...');
    SitemapGenerator::create(config('app.url'))->writeToFile(public_path('sitemap.xml'));
    $this->info('Sitemap generated');
})->describe('Generate sitemap');

Artisan::command('sitemap:clear', function () {
    $this->info('Clearing sitemap...');
    $path = public_path('sitemap.xml');
    if (file_exists($path)) {
        is_file($path) ? unlink($path) : rmdir($path);
    }
    $this->info('Sitemap cleared');
})->describe('Clear sitemap');

Artisan::command('sitemap:ping', function () {
    $this->info('Pinging Google...');
    $response = Http::get('https://www.google.com/ping?sitemap='.config('app.url').'/sitemap.xml');
    $response->successful() ? $this->info('Pinged Google!') : $this->error('Could not ping Google.');
})->describe('Ping search engines');
