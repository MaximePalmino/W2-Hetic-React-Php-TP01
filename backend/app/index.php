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




// include 'db_connection.php';


$token = str_replace('Basic ', '', getallheaders()['authorization']);

$data = [
    'message' => $_POST,
    'token' => $token
];

if ($_POST["type"] == 'register') {

    $select = mysqli_query($conn, "SELECT * FROM users WHERE username = '".$_POST['username']."'");
    if(mysqli_num_rows($select)) {
        exit('This username already exists');
    } else {
        $sql = "INSERT INTO users(username, password, token) VALUES('".$_POST['username']."','".$_POST['password']."','".$token."')";
        $conn->query($sql);
    }

}


print_r(json_encode($data));
// print_r($_POST['message']);
// $sql = 'INSERT INTO users VALUES(13 , ' +  $_POST["username"] + ', ' + $_POST["password"] + ', ' + $token + ')';
// $conn->query($sql);

?>