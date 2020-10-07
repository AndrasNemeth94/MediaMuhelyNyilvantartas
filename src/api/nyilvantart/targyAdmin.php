<?php
//require_once('connector.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");
header('Access-Control-Allow-Methods: *');
    

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$message='Sikeres felvétel!';
$con = mysqli_connect("localhost", "root", "", "nyilvantart");

//üresség ellenörzés
$verifiedData = [];
foreach($request as $row =>$value) {
    if (!empty($value)) {
        $verifiedData[] = $value;
    }
}

$sqlq="INSERT INTO targyak(targy_marka,targy_tipus,targy_db,targy_elerheto)VALUES
('$verifiedData[0]','$verifiedData[1]','$verifiedData[2]','$verifiedData[3]')";

if (mysqli_query($con, $sqlq)) {
    $message=$verifiedData[0];
} else {
   $message = mysqli_error($con);
}

/*-----------ÜRES SOR TÖRLÉS-----------*/
$query='SELECT* FROM targyak';
$result =mysqli_query($con,$query);
$query2 = 'DELETE FROM targyak WHERE targy_db = 0';

while ($row = $result->fetch_assoc()) {
    mysqli_query($con,$query2);
}


    echo json_encode($message);
    mysqli_close($con);
?>