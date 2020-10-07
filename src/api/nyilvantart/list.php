<?php
    header('Access-Control-Allow-Origin: *');
    require 'connector.php';
    $person = [];

    $sql = "SELECT * FROM person";

    if($result = mysqli_query($con,$sql)){

        $a = 0;
        while($row = mysqli_fetch_assoc($result)){

            $person[$a]['id'] = $row['id'];
            $person[$a]['nev'] = $row['nev'];
            $person[$a]['passw'] = $row['passw'];
            $a++;
        }
        //print_r($person);
        echo json_encode($person);
    }
    else{

        http_response_code(404);
    }

?>