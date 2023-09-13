@extends('layouts.loginRegister')

@section('content')
    <form action="login" method="POST">
        @csrf <!-- {{ csrf_field() }} -->
        <img class="mb-4" src="{{ URL::asset('/css/Rmx_Notes.svg') }}" alt="" width="108" height="85">
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

        <div class="form-floating">
            <input type="email" name="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
            <input type="password" name="password" class="form-control" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Password</label>
        </div>

        <div class="checkbox mb-3">
            <label>
                <input type="checkbox" value="remember-me"> Remember me
            </label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    </form>
    <div class="container">
        <div class="modal-footer d-flex justify-content-center">
            <div class="signup-section">
                Do not have account? <a href="{{ url('register') }}" class="text-info"> Create account</a>.
            </div>
        </div>
    </div>
@stop
