<?php

include "db.php";

$data = json_decode(file_get_contents("php://input"));

$id = $data->id;

$sql = "DELETE FROM artikel
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