//Race object

class Race {
  static Races = new Array();
  static raceCount = 0;
  static getRace(name) {
    //console.log(name==Races[0].Name)
    //console.log(Races[0].Name)
    var index = 0;
    Race.Races.forEach(function meh(element) {
      if (element.Name == name) index = Race.Races.indexOf(element);
    });
    return Race.Races[index];
  }
}

function addRaceFromXML(xmlIn) {
  ABM = xmlIn.getElementsByTagName("AbilityMod")[0];
  var curr = new Race();
  (curr.Name = getXMLvalue(xmlIn, "Name")),
    (curr.AbilityMod = [
      getXMLvalue(ABM, "Str"),
      getXMLvalue(ABM, "Dex"),
      getXMLvalue(ABM, "Con"),
      getXMLvalue(ABM, "Int"),
      getXMLvalue(ABM, "Wis"),
      getXMLvalue(ABM, "Cha"),
    ]);

  //$("#testDiv").html(Race.AbilityMod[5])
  Race.Races.push(curr);
}

function getXMLvalue(xml, tag) {
  return xml.getElementsByTagName(tag)[0].childNodes[0].nodeValue;
}
