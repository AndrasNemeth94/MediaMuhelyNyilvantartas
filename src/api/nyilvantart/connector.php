<?php
    header('Access-Control-Allow-Origin: *');
    define('DB_HOST','localhost');
    define('DB_USER','root');
    define('DB_PASS','');
    define('DB_NAME','nyilvantart');

    function connect(){

        $connect = mysqli_connect(DB_HOST,DB_USER,DB_PASS,DB_NAME);

        if(mysqli_connect_errno($connect)){

            die("A csatlakozás nem sikerült! Hiba: " + mysqli_connect_error());
        }else{

            echo "a kapcsolat létrejött!";
        }

        mysqli_set_charset($connect, "utf-8");

        return $connect;
    }

    $con = connect();
    mysqli_close($connect);
?>