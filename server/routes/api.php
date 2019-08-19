<?php

use Illuminate\Http\Request;

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

Route::group(['prefix' => 'forTasks'], function() {
    Route::get('/', 'forTask@index');
    Route::get('{id}', 'forTask@show');
    Route::post('/', 'forTask@store');
    Route::put('{id}', 'forTask@update');
    Route::delete('{id}', 'forTask@destroy');

});



Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
