@extends('layouts.base')

@section('wrapper')
<div class="grid grid-rows-[auto_1fr_auto] w-screen h-screen bg-slate-100 dark:bg-slate-900 text-slate-950 dark:text-slate-50">
    @include('partials.header')
    @yield('content')
    @include('partials.footer')
</div>
@endsection
