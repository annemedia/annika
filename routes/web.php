<?php

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
    return view('annika');
});

Route::group(['middleware' => 'web'], static function (): void {
    Route::post('/updateID', [App\Http\Controllers\RegisterController::class, 'updateID']);
    Route::post('/getIK', [App\Http\Controllers\UserController::class, 'getIK']); 
    Route::post('/privateArea', [App\Http\Controllers\UserController::class, 'privateArea']);
});

Route::post('/createID', [App\Http\Controllers\RegisterController::class, 'createID']);
Route::post('/getSalut', [App\Http\Controllers\RegisterController::class, 'getSalut']);


