<?php

namespace App\Http\Controllers;

use Illuminate\Http\Client\Factory;
use Illuminate\Http\RedirectResponse;
use App\Http\Requests\LoginRequest;
use Illuminate\Routing\Redirector;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Illuminate\View\View;

class LoginController extends Controller
{
    /**
     * Authenticate user.
     *
     * @param LoginRequest $request
     * @return void
     * @throws ValidationException
     */
    private function authenticate(LoginRequest $request) : void
    {
        $credentials = $request->getCredentials();

        if(!Auth::validate($credentials)) {
            throw ValidationException::withMessages([
                'email' => 'Your provided credentials could not be verified.'
            ]);
        }

        $user = Auth::getProvider()->retrieveByCredentials($credentials);
        Auth::login($user);
    }

    /**
     * Display login page.
     *
     * @return Factory|View
     */
    public function show() : Factory|View
    {
        return view('login');
    }

    /**
     * Handle account login request
     *
     * @param LoginRequest $request
     *
     * @return RedirectResponse|Redirector
     * @throws ValidationException
     */
    public function login(LoginRequest $request): RedirectResponse|Redirector
    {
        $this->authenticate($request);
        return redirect('/');
    }

}
