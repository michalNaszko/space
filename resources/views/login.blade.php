@extends('layouts.base')

@section('content')

    <div id="app" class="text-center">
        <login-register-component csrf="{{csrf_token()}}"></login-register-component>
    </div>



    <!-- Scripts -->
    @vite('resources/js/app.js')

    <style>
        #app {
            height: 100%;
            display: flex;
            align-items: center;
        }
    </style>
@stop
