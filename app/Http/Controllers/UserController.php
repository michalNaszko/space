<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /* request -> { start_idx: x, number: n } */
    function getUsers(Request $request): string
    {
        return User::query()->select('Id', 'Name', 'Email', 'Role')
            ->skip($request->query('start_idx'))
            ->take($request->query('number'))->get()->toJson();
    }
}
