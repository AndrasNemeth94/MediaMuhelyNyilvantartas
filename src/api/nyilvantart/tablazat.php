<?php
//require_once('connector.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");
header('Access-Control-Allow-Methods: *');
    

/*$postdata = file_get_contents("php://input");
$request = json_decode($postdata);*/
$con = mysqli_connect("localhost", "root", "", "nyilvantart");
$targyak=array(array());

$sql = 'SELECT * FROM targyak';
$result = $con->query($sql);

$x=0;
if($result->num_rows>0){
    while($row = $result->fetch_assoc()){
        $x++;
        $targyak[$x]['targy_id']=$row['targy_id'] ;
        $targyak[$x]['targy_marka']=$row['targy_marka'] ;
        $targyak[$x]['targy_tipus']=$row['targy_tipus'] ;
        $targyak[$x]['targy_db']=$row['targy_db'] ;
        $targyak[$x]['targy_elerheto']=$row['targy_elerheto'] ;
        
    }
    
}

echo json_encode(['data'=>$targyak]);
mysqli_close($con);

?>