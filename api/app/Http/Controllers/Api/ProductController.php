<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Lista_para_web_favorit;

use Illuminate\Http\Request;


class ProductController extends Controller
{
    
    public function index()
    {
        $products = Lista_para_web_favorit::all();
        return $products;
    }

    public function store(Request $request)
    {
       $product = new Lista_para_web_favorit();
       $product->Marca = $request->Marca;
       $product->Nombre = $request->Nombre;
       $product->Descripcion = $request->Descripcion;
       $product->CodigoProducto = $request->CodigoProducto;

       $product->save();
    }

    public function show($id)
    {
        $product = Lista_para_web_favorit::find($id);
        return $product;
    }

    public function update(Request $request, $id)
    {
        $product = Lista_para_web_favorit::findOrFail($request->id);
        $product->description = $request->description;
        $product->price = $request->price;
        $product->stock = $request->stock;

        $product->save();
        return $product;
    }
    
    public function destroy($id)
    {
       $product = Lista_para_web_favorit::destroy($id);
       return $product;
    }
}
