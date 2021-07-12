<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: *");
$myObj = new stdClass();
$myObj->name = "John";
if(json_decode(file_get_contents('php://input')) != null){
    $data = json_decode(file_get_contents('php://input'));
    $myObj->name = $data->name;
}

//$data = json_decode('{"name": "Albert"}');
//$data = file_get_contents('php://input');


$myObj->age = 30;
$myObj->city = "new York";

$myJSON = json_encode($myObj);

echo $myJSON;
?>