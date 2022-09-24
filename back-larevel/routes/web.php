<?php

use App\Models\Inscription;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/inscripcion', function(){    
    $userEnrolled = Inscription::where('email', '=', "santiago.avilez@est.fi.uncoma.edu.ar")->get("id");
    dd(count($userEnrolled));
})->name('inscription');

require __DIR__.'/auth.php';
