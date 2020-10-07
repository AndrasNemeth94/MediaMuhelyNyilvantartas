<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

//require 'connector.php';
//$connect = mysqli_connect("localhost","root","","nyilvantart");
$postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    @$username = $request->username;
    @$neptun = $request->neptun;
    @$pwd = $request->pwd;
    @$firstName = $request->firstName;
    @$lastName = $request->lastName;
    @$teamName = $request->teamName;
    @$email = $request->email;

    print_r("az user: "  .$neptun."; " .$username."; "  .$pwd."; "  .$firstName."; "  .$lastName."; "  .$email."; "  .$teamName); //this will go back under "data" of angular call.
    echo json_encode("az user: "  .$neptun."; " .$username."; "  .$pwd."; "  .$firstName."; "  .$lastName."; "  .$email."; "  .$teamName);

//$conv =json_decode($data,true);


    /*$sql = " INSERT INTO user(neptun,firstName,lastName,username,pwd,email,teamName) VALUES
    ('".$conv[0]."','".$conv[1]."','".$conv[2]."','".$conv[3]."','".$conv[4]."','".$conv[5]."',
    '".$conv[6]."') ";

    mysqli_query($connect,$sql);*/


/*$data=array();   
$error = array();*/

/*if(empty($form_data->neptun)){

    $error["neptun"] = "Kérem adja meg a neptunkódot!";
}
if(empty($form_data->firstName)){

    $error["firstName"] = "Kérem adja meg a keresztnevet!";
}
if(empty($form_data->lastName)){

    $error["lastName"] = "Kérem adja meg a vezetéknevet!";
}
if(empty($form_data->username)){

    $error["username"] = "Kérem adja meg a felhasználónevet!";
}
if(empty($form_data->pwd)){

    $error["pwd"] = "Kérem adja meg a jelszót!";
}
if(empty($form_data->email)){

    $error["email"] = "Kérem adja meg az email-t!";
}
if(empty($form_data->teamName)){

    $error["teamName"] = "Kérem adja meg a csapatnevet!";
}

if(!empty($error)){

    $data["error"] =$error;

}else{

    $neptun = mysqli_real_escape_string($connect, $form_data->neptun);
    $firstName = mysqli_real_escape_string($connect, $form_data->firstName);
    $lastName = mysqli_real_escape_string($connect, $form_data->lastName);
    $username = mysqli_real_escape_string($connect, $form_data->username);
    $pwd = mysqli_real_escape_string($connect, $form_data->pwd);
    $email = mysqli_real_escape_string($connect, $form_data->email);
    $teamName = mysqli_real_escape_string($connect, $form_data->teamName);

    $query = " INSERT INTO user(neptun,firstName,lastName,username,pwd,email,teamName) VALUES
    ('$neptun','$firstName','$lastName','$username','$pwd','$email','$teamName') ";

    if(mysqli_query($onnect, $query)){

        $data["message"] = "Új felhasználó elmentve!";
    }
}*/

    //echo json_encode($data);

?>