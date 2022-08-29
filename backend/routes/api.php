<?php

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(UserController::class)->group(function (){
    Route::get('/users', 'index' );

    //Create New User
    Route::post('/user', 'store');
    
    //Log In User
    Route::post('/login', 'authenticate');
    
    Route::middleware(['auth:sanctum'])->group(function (){
        //log user out
        Route::post('/logout', 'logout');
    });
});