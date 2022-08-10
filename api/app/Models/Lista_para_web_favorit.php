<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lista_para_web_favorit extends Model
{
    use HasFactory;

    protected $table = 'lista_para_web_favorit';
    protected $fillable = ['Marca', 'Nombre', 'Descripcion', 'CodigoProducto'];
    const CREATED_AT = 'aud_creado';
    const UPDATED_AT = 'aud_actualizado';
    public $timestamps = false;
    protected $primarykey = 'IdProducto';    
}
