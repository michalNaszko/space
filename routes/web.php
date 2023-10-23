<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\RegisterController;
use App\Models\Post;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/dashboard', function () {
    return view('dashboard');
});

Route::get('/', function () {
    return view('createPost');
})->middleware('auth');
Route::post('/createPost', [PostController::class, 'create'])->middleware('auth');;
Route::get('/updatePost', function () {
    return view('updatePost');
})->middleware('auth');
Route::post('/updatePost', [PostController::class, 'update']);

Route::get('/login', [LoginController::class, 'show']);
Route::post('/login', [LoginController::class, 'login'] );

Route::get('/register', [RegisterController::class, 'show']);
Route::post('/register', [RegisterController::class, 'register']);

Route::get('/logout', function (Request $request) {
    Auth::logout();

    $request->session()->invalidate();
    $request->session()->regenerateToken();

    return redirect('/');
});

Route::get('/posts',
    [PostController::class, 'index'])->middleware('auth');

