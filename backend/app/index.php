<?php

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: content-type, authorization");
header("Content-Type: application/json");
header('Access-Control-Allow-Credentials: true');

// $servername = "db";
// $port = "3306";
// $username = "exampleuser";
// $password = "examplepass";
// $db = "data";
// $conn = mysqli_connect($servername, $username, $password, $db, $port);




require 'db_connection.php';


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
        setcookie($_POST['username'], $token);
        echo json_encode([
            $_POST['username'],
            'token' => $token
        ]);
    }
}


// if ($_POST["type"] == 'login') {

//     $usernamePw = mysqli_query($conn, "SELECT * FROM users WHERE username = '".$_POST['username']."' AND '".$_POST['password']."'");
//     if(mysqli_num_rows($usernamePw)) {

//         $username = mysqli_query($conn, 'SELECT username FROM users');
//         $token = 'SELECT token FROM users';
//         echo json_encode([
//             'status' => 'succes',
//             'username' => $username,
//             'token' => $token
//         ]);


//     }

//     echo json_encode([
//         'status' => 'succes',
//         'username' => 'FrancisHuster',
//         'token' => 'mgjfdlskjgfdlkjùpgjrpeij'
//     ]);
// }
   
// print_r($_POST['message']);
// $sql = 'INSERT INTO users VALUES(13 , ' +  $_POST["username"] + ', ' + $_POST["password"] + ', ' + $token + ')';
// $conn->query($sql);

?>