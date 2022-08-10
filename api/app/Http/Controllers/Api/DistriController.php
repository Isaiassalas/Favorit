<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Distribuidores;
use Illuminate\Http\Request;

class DistriController extends Controller
{
    public function distribuidor()
    {
        $distribuidores = Distribuidores::all();
        return $distribuidores;
    }
}
