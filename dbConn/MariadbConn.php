<?php
//Connect to and load data from database here.
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "roleplay";

$conn = new mysqli($servername, $username, $password, $dbname);
if($conn->connect_error){
	die("connection failed: " . $conn->connect_error);
}
//view("select * from get_races");
function view($sqlquery){
	global $conn;
	$out = array();
	$dbout = $conn->query($sqlquery);
	if($dbout->num_rows<=0) {die("no data in database: ".$sqlquery);}
	$columns = array();
	$values = $dbout->fetch_all(MYSQLI_ASSOC);
	if(!empty($values)){
		$columns = array_keys($values[0]);
	}
	//echo $columns[0];
	$counter=0;
	foreach ($dbout as $row){
		for ($i=0; $i<count($row);$i++){
		$out[$counter][$i] = $row[$columns[$i]];	
		//echo $row[$columns[0]];
	}$counter++;;
	}
	return $out;
}
function test(){
	return "world";
}
//print_r(view("SELECT * FROM get_races"));



function addRace($race){
	global $conn;
	$sql = "insert into User_Race(user_race) values($race)";
	$conn->query($sql);
}
