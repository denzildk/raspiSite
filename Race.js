//Race object
Races = new Array();

function addRaceFromXML(xmlIn){
	ABM = xmlIn.getElementsByTagName("AbilityMod")[0]
	var Race = {
		Name: getXMLvalue(xmlIn,"Name"),
		AbilityMod : [getXMLvalue(ABM,"Str"),getXMLvalue(ABM,"Dex"),getXMLvalue(ABM,"Con"),getXMLvalue(ABM,"Int"),getXMLvalue(ABM,"Wis"),getXMLvalue(ABM,"Cha")]
	}
	//$("#testDiv").html(Race.AbilityMod[5])
	Races.push(Race)
	}
	
	
function getXMLvalue(xml, tag){
		return xml.getElementsByTagName(tag)[0].childNodes[0].nodeValue
	}

function getRace(name){
	//console.log(name==Races[0].Name)
	//console.log(Races[0].Name)
	index = 0
	Races.forEach(function meh(element) {if (element.Name == name) index = Races.indexOf(element)})
	return Races[index]
	
	}
