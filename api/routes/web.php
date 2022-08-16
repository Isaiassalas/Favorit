<?php

use App\Http\Controllers\Api\DistriController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\Sub_CategoriasController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

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
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/', function () {
    return view('welcome');
});
Route::controller(ProductController::class)->group(function (){
    Route::get('/products', 'index');
    Route::post('/product', 'store');
    Route::get('/product/{id}', 'show');
    Route::put('/product/{id}', 'update');
    Route::delete('/product/{id}', 'destroy');
});
Route::controller(Sub_CategoriasController::class)->group(function (){
    Route::get('/categorias', 'obtenercategoria');
    Route::get('/subcategorias', 'obtenersubcategoria');
   
});
Route::controller(DistriController::class)->group(function (){
    Route::get('/distribuidores', 'distribuidor');
});
