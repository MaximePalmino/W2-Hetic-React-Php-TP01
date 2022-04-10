<?php 

$token = str_replace('Basic ', '', getallheaders()['authorization']);

$data = [
    'message' => $_POST,
];

    
    
    if ($_POST["type"] == 'writePost') {

        $sql = "INSERT INTO posts(title, content, author) VALUES('".$_POST['title']."','".$_POST['content']."','".$_POST['author']."')";
        $conn->query($sql);
        // echo json_encode([
        //     "response" => "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        //     // 'token' => $token
        // ]);
        // header("Location: https://localhost:3000/posts");
        // die();

    
}

?>