<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Distribuidores extends Model
{
    use HasFactory;
    protected $table = 'distribuidores';
    protected $primarykey = 'IdDistribuidor';
}
