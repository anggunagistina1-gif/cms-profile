<?php
include "db.php";

$data = json_decode(file_get_contents("php://input"));

$judul = $data->judul;
$isi   = $data->isi;

$sql = "INSERT INTO artikel (judul, isi)
        VALUES ('$judul', '$isi')";

if (mysqli_query($conn, $sql)) {

    echo json_encode([
        "status" => "success"
    ]);

} else {

    echo json_encode([
        "status" => "error"
    ]);

}
?>