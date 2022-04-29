<?php

require_once 'headers.php';

$privateKey = file_get_contents('./keys/rsaPrivateKey.key');
$res = openssl_pkey_get_private($privateKey);
echo openssl_pkey_get_details($res)['key'];

?>