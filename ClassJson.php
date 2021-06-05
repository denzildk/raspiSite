<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: *");
$myObj = new stdClass();
$myObj->name = "John";
$myObj->age = 30;
$myObj->city = "new York";

$myJSON = json_encode($myObj);

echo $myJSON;
?>