@extends('layouts.error')

@section('code', '404')

@section('content')
<p class="lead text-gray-800 mb-5">Page Not Found</p>
<p class="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
<a href="{{ route('home') }}">&larr; Back to Home</a>
@endsection
