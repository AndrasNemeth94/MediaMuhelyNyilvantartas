<?php

//require_once('connector.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");
header('Access-Control-Allow-Methods: *');
    

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);


/*--------------KAPOTT OBJ TÖMB BETÖLT------------------*/
$Str =array(array());
/*$id = array();
$i = 0;*/

$firstName='';
$lastName='';
$username='';
$neptun='';
$pwd='';
$teamName='';
$email='';

$chechindex = array();
foreach($request as $key => $value){

    foreach($value as $key2 => $value2){
        /*if($key2 == 0){

            $id[$i] = $value2;
        }*/

            $Str[$key][$key2] = $value2;
    
    }
    //$i++;
}
//sort($id);
/*-------DB FRISSÍT---------------------------------------*/

$link = mysqli_connect("localhost", "root", "", "nyilvantart");
$str='siker';



try{

    //$length = count($request);
    $array = json_decode(json_encode($postdata), true);

    foreach($array as $key => $value){

        $sql = "UPDATE user SET neptun = '$value[0]', firstName='$value[1]',lastName='$value[2]', username='$value[3]',
        pwd='$value[4]',email='$value[5]',teamName='$value[6]' WHERE id='$value[7]'";

        mysqli_query($link,$sql);
    }

}
catch(Exception $e){

    $str =strval($e);
}

 

    echo json_encode(['data' =>$str]);
    mysqli_close($link);
?>