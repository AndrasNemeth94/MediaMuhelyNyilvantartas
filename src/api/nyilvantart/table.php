<?php

//require_once('connector.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");
header('Access-Control-Allow-Methods: *');
    


    $link = mysqli_connect("localhost", "root", "", "nyilvantart");
    $sql = mysqli_query($link,'SELECT * FROM user WHERE NOT neptun = \'\' ORDER BY username');
    $diak =[]; 

    $i = 0;

    while($row= mysqli_fetch_array($sql)){
            
        $diak[$i]['neptun'] = $row['neptun'];
        $diak[$i]['firstName'] = $row['firstName'];
        $diak[$i]['lastName'] = $row['lastName'];
        $diak[$i]['username'] = $row['username'];
        $diak[$i]['pwd'] = $row['pwd'];
        $diak[$i]['email'] = $row['email'];
        $diak[$i]['teamName'] = $row['teamName'];
        $diak[$i]['id'] = $row['id'];
        $i++;
        
     }
     
     echo json_encode(['data' =>$diak]);
     mysqli_close($link);
?>