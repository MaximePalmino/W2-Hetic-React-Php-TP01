<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: content-type, authorization");
header("Content-Type: application/json");
header('Access-Control-Allow-Credentials: true');

 $servername = "db";
 $port = "3306";
 $username = "exampleuser";
 $password = "examplepass";
 $db = "data";
 $conn = mysqli_connect($servername, $username, $password, $db, $port);

    if(!$conn){
        die("could not connect to server!");
    }
    $sql = mysqli_query($conn ,"SELECT * FROM posts");
    $result = mysqli_fetch_assoc($sql);
    json_encode($result);
    return $result;
?>

