<?php

header("Access-Control-Allow-Origin: ");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'database.php';



if(isset($_GET["insertar"])){
    $data = json_decode(file_get_contents("php://input"));
    $nombre=$data->Nombre;
    $correo=$data->Correo;
        if(($correo!="")&&($nombre!="")){
            
    $sentence = mysqli_query($conn,"INSERT INTO datos(Nombre,Correo) VALUES('$nombre','$correo') ");
    
    echo json_encode(["success"=>1]);
        }
    exit();
}


?>
