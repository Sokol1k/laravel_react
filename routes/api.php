<?php

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

$api = app('Dingo\Api\Routing\Router');

$path = 'App\Http\Controllers\Api\V1\\';

$api->version('v1', ['middleware' => 'bindings'], function ($api) use ($path) {
    $api->get('product', $path . 'ProductController@index');
    $api->delete('product/{product}', $path . 'ProductController@destroy');
    $api->post('shipping', $path . 'ShippingController@store');
});
