<?php

/* SZERVERRE RAKÁSNÁL TÖRÖLNI!!!!! */

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");
header('Access-Control-Allow-Methods: *');

$postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    @$username = $request->username;
    @$neptun = $request->neptun;
    @$pwd = $request->pwd;
    @$firstName = $request->firstName;
    @$lastName = $request->lastName;
    @$teamName = $request->teamName;
	@$email = $request->email;
$proba = "Ez egy próbaaadat";
	

$link = mysqli_connect("localhost", "root", "", "nyilvantart");

if($link === false){
    die("HIBA: Nem sikerült csatlakozni a szerverhez. " . mysqli_connect_error());
}


//HIBAKEZELÉSRE
$error="";
$success="";
$data="";

 //SQL LEKÉRDEZÉSEK
$sql = "SELECT username FROM user WHERE username = '$username'";
$sql1 = "SELECT email FROM user WHERE email = '$email'";
$sql2 = "SELECT * FROM user WHERE neptun = '$neptun' AND regE = 1";

//Megkeresi az adatbázisban
$result = mysqli_query($link, $sql);
$result1 = mysqli_query($link, $sql1);
$result2 = mysqli_query($link, $sql2);

//Foglaltak-e az adott adatok
if (mysqli_num_rows($result) > 0) {
		//echo "Ez a név már foglalt";
		$error = "Ez a név már foglalt!";

}if(mysqli_num_rows($result1) > 0) {

    //echo "Ez az email cím már foglalt";
	$error= "Ez az email már foglalt!";

}/*else if(!filter_var($email,FILTER_VALIDATE_EMAIL)){

	$error[] = "Rosszul beírt email!";
}*/else{
	//Ha minden adat helyes megkeresi a a keresett adatot
	if($result = mysqli_query($link, $sql2)){

		if(mysqli_num_rows($result2) > 0){
				//felviszi az adatok
				$update = "UPDATE user SET username ='$username', firstName = '$firstName', lastName = '$lastName', email = '$email',  pwd = '$pwd', teamName = '$teamName', regE = 2 WHERE neptun = '$neptun' AND regE = 1";
				if (mysqli_query($link, $update)) {
					//echo "A regisztráció sikeres!";
					$success = "A regisztráció sikeres!";
					
				} else {
					//echo "Error: Nem sikerült a frissítés: " . mysqli_error($link);
					$error = "Error: Nem sikerült a frissítés: " .mysqli_error($link);
				}
		}else{
			//echo "Hibás neptunkód vagy már foglalt";
			$error = "Hibás neptunkód vagy már foglalt";
		}
	} else{
		//echo "ERROR: Nem sikerült lefuttatni a kódot. " . mysqli_error($link);
		$error = "HIBA: Nem sikerült lefuttatni a kódot. " .mysqli_error($link);
	}
}

if($error != ""){
	$data = $error;
}
else{
	$data = $success;
}
//Bezárja a kapcsolatot'
//mysqli_close($link);
//strval($data);
//echo json_encode($ez);
echo json_encode($data);
mysqli_close($link);
?>
