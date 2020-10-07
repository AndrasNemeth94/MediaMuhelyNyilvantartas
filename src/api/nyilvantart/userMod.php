<?php
//require_once('connector.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");
header('Access-Control-Allow-Methods: *');
    

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
@$id = $request->id;
@$firstName = $request->firstName;
@$lastName = $request->lastName;
@$username = $request->username;
@$neptun = $request->neptun;
@$password = $request->pwd;
@$email = $request->email;
@$teamname = $request->teamName;

$message ='Sikeres frissítés!';

$con = mysqli_connect("localhost", "root", "", "nyilvantart");

/*------------MÓDOSÍTOTT FELHASZNÁLÓ BEILLESZTÉSE---------------------*/
try{
    mysqli_query($con,"UPDATE user SET firstName='$firstName', lastName='$lastName', username='$username',
     neptun='$neptun',pwd='$password',email='$email',teamName='$teamname',regE =1, adminE=1 WHERE id='$id'");

}catch(Exception $e){

    $message = $e;
}

echo json_encode($message);
mysqli_close($con);
?>