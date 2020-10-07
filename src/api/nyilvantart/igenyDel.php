<?php
//require_once('connector.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");
header('Access-Control-Allow-Methods: *');
    

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$message='Sikeres törlés!';
$con = mysqli_connect("localhost", "root", "", "nyilvantart");

$query="SELECT* FROM igenylesek";
$result =mysqli_query($con,$query);
$query2 = "DELETE FROM igenylesek WHERE igeny_id = $request";

      try{
        mysqli_query($con,$query2);
       }catch(Exception $e){

            $message = 'Hiba '+$e;
       }
        
    

echo json_encode($message);
mysqli_close($con);
?>