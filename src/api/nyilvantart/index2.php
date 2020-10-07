
<?php
/* html-hez lent : <?=$_SERVER['PHP_SELF']?>*/

//headerek (TÖRÖLNI SZERVERRERAKÁSNÁL!!!)
//include_once("config.php");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");
header('Access-Control-Allow-Methods: *');




session_start();
//HIBAKEZELÉSHEZ
$data="";
$error="";
$success="";
$sql='';

//POST requestel küldött adatok
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

//Logout
if($request == false){

	session_destroy();
	$data = "sikeres logout";
	echo json_encode($data);
	exit();
}
else{
	


$db_username = 'root';
$db_password = '';
$db_name = 'nyilvantart';
$db_host = 'localhost';	

$link = mysqli_connect($db_host, $db_username, $db_password,$db_name);
     

if(isset($postdata) && !empty($postdata))
{
	$pwd = mysqli_real_escape_string($link, trim($request->pwd));
	$username = mysqli_real_escape_string($link, trim($request->username));
	   

	$sql = "SELECT * FROM user WHERE username ='$username' AND pwd = '$pwd' and adminE = 2";
		$sql1 = "SELECT * FROM user WHERE username ='$username' AND pwd = '$pwd' and adminE = 1";

		$result2 = mysqli_query($link, $sql1);
		if($result = mysqli_query($link, $sql)){

			if(mysqli_num_rows($result) == 1){

				$_SESSION["username"] = $username;
				$success = "sikeres admin belépés!";

			}
			else if(mysqli_num_rows($result2) > 0){

				$_SESSION["username"] = $username;
				$success = "sikeres user belépés!";

			}
			else{
				$error =  "Hibás felhasználó név vagy jelszó";
			}
			
			
		}else{
			$error = "ERROR: Nem sikerült lefuttatni a kódot!";
		}

}
if($error !=""){

	$data = $error;
}else{

	$data = $success;
}
echo json_encode($data);
mysqli_close($link);
}

?>