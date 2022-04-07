<?php

 $servername = "127.0.0.1";
 $username = "exampleuser";
 $password = "examplepass";
 $db = "exampledb";
// Create connection
try {
    $conn = new PDO("mysql:host=$servername;dbname=$db", $username, $password);
    foreach ($conn->query('SELECT * FROM tpfetch') as $row) {
      print_r($row);
    }
  } catch(PDOException $e) 
  {
    echo "Connection failed: " . $e->getMessage();
  }

  ?>