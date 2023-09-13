<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Client\Factory;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Redirector;
use Illuminate\Validation\ValidationException;
use Illuminate\View\View;

class RegisterController extends Controller
{
    /**
     * Display register page.
     *
     * @return Factory|View
     */
    public function show() : Factory|View
    {
        return view('register');
    }

    /**
     * Handle register request
     *
     * @param RegisterRequest $request
     *
     * @return RedirectResponse|Redirector
     * @throws ValidationException
     */
    public function register(RegisterRequest $request): RedirectResponse|Redirector
    {
        $this->validate(request(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $user = User::create(request(['email', 'password', 'name']));

        auth()->login($user);

        return redirect('/');
    }
}
