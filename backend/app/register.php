<?php 

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
            "response" => "true",
            // 'token' => $token
        ]);
        // header("Location: https://localhost:3000/posts");
        // die();

    }
}

?>