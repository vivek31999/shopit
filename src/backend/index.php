<?php
header("Access-Control-Allow-Origin: *");
// header('Access-Control-Allow-Methods:  POST, GET');
include 'dbconnect.php';

// $inputJSON = file_get_contents('php://input');
// $input = json_decode($inputJSON, TRUE);


$sql = "SELECT * FROM item";
$result = mysqli_query($conn, $sql);
$data = mysqli_fetch_all($result,MYSQLI_ASSOC);

echo json_encode($data);
?>