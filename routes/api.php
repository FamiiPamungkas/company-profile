<?php

use App\Http\Controllers\Api\UserRestController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->get('/authenticated', function (Request $request) {
    return response()->json(['authenticated' => true, 'user' => $request->user()]);
});

Route::get('/users', [UserRestController::class, 'users']);
Route::middleware('auth:sanctum')->group(function () {
});
