<?php

class CookieHelper
{
    public static function setCookie(string $token, string $username): void
    {
        setcookie('hetic_token', $token, time() + 20, '/', 'localhost', false, false);
        setcookie('hetic_username', $username, time() + 20, '/', 'localhost', false, false);
    }


public static function createJWT(): void
{
    $res = openssl_pkey_new();
    openssl_pkey_export_to_file($res, './keys/rsaPrivateKey.key');
    $details = openssl_pkey_get_details($res);
    setcookie('public_key', $details['key'], time() + 60, '/', 'localhost', false, false);
    }
}