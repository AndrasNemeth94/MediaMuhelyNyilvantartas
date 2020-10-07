<?php
//require_once('connector.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");
header('Access-Control-Allow-Methods: *');
    

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
@$id = $request->targy_id;
@$marka = $request->targy_marka;
@$tipus = $request->targy_tipus;
@$db = $request->targy_db;
@$eler = $request->targy_elerheto;

$message ='Sikeres frissítés!';

$con = mysqli_connect("localhost", "root", "", "nyilvantart");

/*------------MÓDOSÍTOTT TÁRGY BEILLESZTÉSE---------------------*/
try{
    mysqli_query($con,"UPDATE targyak SET targy_marka='$marka', targy_tipus='$tipus', targy_db='$db', targy_elerheto='$eler' WHERE targy_id='$id'");

}catch(Exception $e){

    $message = $e;
}


echo json_encode($message);
mysqli_close($con);
?>