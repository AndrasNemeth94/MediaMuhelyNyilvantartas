<?php
//require_once('connector.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");
header('Access-Control-Allow-Methods: *');

$con = mysqli_connect("localhost", "root", "", "nyilvantart");
$igenyek = array(array());

$sql = 'SELECT * FROM igenylesek';

$result = $con->query($sql);

$x=0;
if($result->num_rows>0){
    while($row = $result->fetch_assoc()){
        $x++;
        $igenyek[$x]['igeny_id']=$row['igeny_id'] ;
        $igenyek[$x]['igenyelt_targy']=$row['igenyelt_targy'] ;
        $igenyek[$x]['targy_mennyiseg']=$row['targy_mennyiseg'] ;
        $igenyek[$x]['igeny_idopont']=$row['igeny_idopont'] ;
        $igenyek[$x]['igeny_vege']=$row['igeny_vege'] ;
        $igenyek[$x]['igenylo']=$row['igenylo'] ;
        $igenyek[$x]['elbiralt'] =$row['elbiralt'];
    }
}

echo json_encode(['data' => $igenyek]);
mysqli_close($con);

?>