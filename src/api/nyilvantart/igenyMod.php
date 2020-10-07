<?php
//require_once('connector.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");
header('Access-Control-Allow-Methods: *');
    

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
@$id = $request->igeny_id;
@$igenyelt = $request->igenyelt_targy;
@$menny = $request->targy_mennyiseg;
@$idopont = $request->igeny_idopont;
@$vege = $request->igeny_vege;
@$igenylo = $request->igenylo;
@$elb = $request->elbiralt;

$message ='Sikeres frissítés!';

$con = mysqli_connect("localhost", "root", "", "nyilvantart");

/*------------MÓDOSÍTOTT FELHASZNÁLÓ BEILLESZTÉSE---------------------*/
try{
    mysqli_query($con,"UPDATE igenylesek SET igenyelt_targy='$igenyelt', targy_mennyiseg='$menny',
     igeny_idopont='$idopont',igeny_vege='$vege',igenylo='$igenylo',elbiralt='$elb' WHERE igeny_id='$id'");

}catch(Exception $e){

    $message = $e;
}

echo json_encode($message);
mysqli_close($con);
?>