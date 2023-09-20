@extends('layouts.loginRegister')

@section('content')
    <div class="container grey lighten-5 container--fluid">
        <div id="app">
            <login-register-component csrf="{{csrf_token()}}"></login-register-component>
        </div>
    </div>


    <!-- Scripts -->
    @vite('resources/js/app.js')
@stop
