<?php

namespace App\Http\Controllers\Api;

use App\Models\Categorias;
use App\Models\Subcategorias;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class Sub_CategoriasController extends Controller
{
    public function obtenercategoria()
    {
        $categorias = Categorias::all();
        return $categorias;
    }
    public function obtenersubcategoria()
    {
        $subcategorias = Subcategorias::all();
        return $subcategorias;
    }
}
