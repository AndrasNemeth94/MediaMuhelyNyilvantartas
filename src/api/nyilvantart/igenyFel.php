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

$con = mysqli_connect("localhost", "root", "", "nyilvantart");
$message='Igény felvéve!';
$query = 'SELECT *FROM igenylesek';
$ido = strval($idopont);

$query2 = "INSERT INTO igenylesek(igenyelt_targy,targy_mennyiseg,igeny_idopont,igeny_vege,igenylo,elbiralt) VALUES 
('".$igenyelt."','".$menny."','".$ido."','".$vege."','".$igenylo."','".$elb."')";

try{
    mysqli_query($con,$query);
    mysqli_query($con,$query2);
}catch(Exception $e){

    $message = $e;
}
/*------------------ÜRES SOROK TÖRLÉSE------------------ */

$result =mysqli_query($con,$query);
$query2 = 'DELETE FROM igenylesek WHERE targy_mennyiseg=0';

while ($row = $result->fetch_assoc()) {
    mysqli_query($con,$query2);
}


echo json_encode($message);
mysqli_close($con);
?>