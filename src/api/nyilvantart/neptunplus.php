<?php
/*------------------ADMIN OLDAL ÚJ FELHASZNÁLÓ FELVÉTELE--------------------*/
//require_once('connector.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");
header('Access-Control-Allow-Methods: *');

$postdata = file_get_contents("php://input");
$neptun = $postdata;
$success="";
$regE=1;
$adminE=1;
$succ="Sikeres kódfelvétel!";
$link = mysqli_connect("localhost", "root", "", "nyilvantart");

try{
    
    $query = "INSERT INTO user(firstName,lastName,username,neptun,pwd,email,teamName,regE,adminE) VALUES 
    ('".$success."','".$success."','".$success."','".$neptun."','".$success."','".$success."','".$success."','".$regE."','".$adminE."')";
    $sql = mysqli_query($link,$query);
}
catch(Exception $err){

    $succ ="a php beszart!";
}

echo json_encode($succ);
mysqli_close($link);
?>