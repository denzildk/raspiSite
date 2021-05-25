<?php
//$self = $_SERVER['PHP_SELF'];
require_once('../config.php');
require_once('../dbConn/MariadbConn.php');
//header('Access-Control-Allow-Origin: *');
header('Content-type: text/xml');
$xmlinput = null;
if (file_get_contents('php://input') == null) {
	global $xmlinput;
	$xmlInput = simplexml_load_string("<?xml version='1.0'?><Request><Form>selectRace</Form><Form>selectClass</Form></Request>");
} else {
	global $xmlinput;
	$xmlInput = simplexml_load_string(file_get_contents('php://input'));
};
$xmlOutput = new SimpleXMLElement('<xml/>');
if (isset($xmlInput)) {
	//echo $xmlInput->Form->count();
	foreach ($xmlInput->Form as $request) {
		//echo hi;
		$sql = "";

		switch ($request) {
			case "selectRace":
				$sql = "SELECT * FROM get_races";
				raceDataToXML(view($sql));
				break;
			case "selectClass":
				$sql = "SELECT * FROM get_classes";
				//classDataToXML(view($sql));
				break;
			case "selectSubClass":
				$sql = "SELECT * FROM get_subclass_all";

			default:
				break;
		}
	}
	//print_r($xmlOutput);
	print($xmlOutput->asXML());
}

//$sql = "SELECT * FROM get_races";

//$Race = view($sql);

/*
function resetButton(){
echo <<<_RESET
	<form action='$self' method='post'>
	<input type='submit' value='reset form'>
	</form>
_RESET;
}

//<form name="RaceSelect" action="$self" method="post" >
function getRaceSelect(){
	global $Race;

$Default = "Choose a Race";
echo '<option value="Default" selected disabled hidden>'$Default'</option>':	


//races from database output to select.
foreach($Race as $item){
	echo '<option value="' . $item . '">' . $item . '</option>';

}
//echo '<input type="submit" value="choose race">';

//echo "</select>";
}
//</form>
//foreach ($Race as $out) echo $out.',';
*/

//header('Content-type: text/xml');
//$xml = raceDataToXML();
//print($xml->asXML());
/*
if ($xmlinput->Form[0] == "selectRace"){
	$sql = "SELECT * FROM get_races";

	$Race = view($sql);
	//$request = simplexml_load_string(file_get_contents('php://input'));
	//$Race[] = $request->Form;
	header('Content-type: text/xml');
	raceDataToXML($Race);
	print($xmlOutput->asXML());

}*/

function raceDataToXML($Race)
{
	global $xmlOutput;
	//echo var_dump($Race);
	foreach ($Race as $item) {
		//echo $item;
		/*$race = $xmlOutput->addChild('Race');
		$race->addChild('name',$item[0]);
		$race->addChild('Str', $item[1]);*/
		//echo var_dump($item);
		$curr =	new Race($item);
		$curr->toXML($xmlOutput);
	}
}

class Race
{
	public function __construct($DBRace)
	{
		//echo var_dump($DBRace)."<br>";
		$tmp = 0;
		$this->Name = $DBRace[$tmp++];
		$this->AbilityModifiers = array(
			"Str" => $DBRace[$tmp++],
			"Dex" => $DBRace[$tmp++],
			"Con" => $DBRace[$tmp++],
			"Int" => $DBRace[$tmp++],
			"Wis" => $DBRace[$tmp++],
			"Cha" => $DBRace[$tmp++],
		);
	}
	function toXML($xml)
	{
		$me = $xml->addChild('Race');
		$me->addChild('Name', $this->Name);
		$abilScore = $me->addChild('AbilityMod');
		foreach ($this->AbilityModifiers as $key => $value) {
			$abilScore->addChild($key, $value);
		}
	}
}

function classDataToXML($Class)
{
	global $xmlOutput;
	foreach ($Class as $item) {
		//echo $item;
		$race = $xmlOutput->addChild('Class');
		$race->addChild('name', $item[0]);
		$race->addChild('description', $item . ' Description');
	}
}


function xmltestdata()
{
	$xml = new SimpleXMLElement('<xml/>');
	$race = $xml->addChild('Race');
	$race->addChild('name', 'Human');
	$race->addChild('description', 'i\'m just testing stuff but this is description of humans');
	$race = $xml->addChild('Race');
	$race->addChild('name', 'Elf');
	$race->addChild('description', 'i\'m just testing stuff but this is description of elfs');
	return $xml;
}
