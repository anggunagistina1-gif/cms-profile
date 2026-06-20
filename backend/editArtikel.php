<?php

include "db.php";

$data = json_decode(file_get_contents("php://input"));

$id     = $data->id;
$judul  = $data->judul;
$isi    = $data->isi;

$sql = "UPDATE artikel
        SET judul='$judul',
            isi='$isi'
        WHERE id='$id'";

if(mysqli_query($conn,$sql)){

    echo json_encode([
        "status" => "success"
    ]);

}else{

    echo json_encode([
        "status" => "error"
    ]);

}

?>