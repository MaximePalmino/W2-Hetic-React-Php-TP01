<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: content-type, authorization");
header("Content-Type: application/json");
header('Access-Control-Allow-Credentials: true');
require 'db_connection.php';

// json_encode($_COOKIE)
// print json_encode($_COOKIE);


$token = mysqli_query($conn, "SELECT token FROM users WHERE token = '".$_COOKIE[$_POST['username']]."'");
$users = mysqli_query($conn, "SELECT * FROM users WHERE token = '".$_COOKIE["123sd"]."'");

if ($_COOKIE["123sd"] == $_COOKIE["123sd"]){
    print_r(mysqli_fetch_array($users));

    echo json_encode(
       [ 
         "res" => mysqli_fetch_array($users),
       
       ]
       );

}


// $users = mysqli_query($conn, "SELECT username FROM users where token = '" .$_COOKIE[$_POST['username']]."'");
// $rowsToken = array();
// $rowsUsers = array();

//   while($r = mysqli_fetch_assoc($token)) {
//     $rowsToken['object_name'][] = $r;
//   }

//   while($r = mysqli_fetch_assoc($users)) {
//     $rowsUsers['object_name'][] = $r;
//   }

//   $test = $rowsToken['object_name'];
//   $testUsers = $rowsUsers['object_name'];

// print json_encode($test);
// print json_encode($testUsers);

// print json_decode($test);



?>
