@extends('layouts.base')

@section('title')
    Error @yield('code')
@endsection

@section('wrapper')
<div class="flex justify-center items-center w-screen h-screen">
    <h1 class="font-black text-4xl">@yield('title')</h1>
    <div class="text-center">
    @yield('content')
    </div>
</div>
@endsection
