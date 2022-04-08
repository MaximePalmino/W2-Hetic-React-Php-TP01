<?php

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: content-type, authorization");
header("Content-Type: application/json");
header('Access-Control-Allow-Credentials: true');


include 'db_connection.php';


$token = str_replace('Basic ', '', getallheaders()['authorization']);

echo json_encode([
    'message' => $_POST,
    'token' => $token
]);


?>