params = "<?xml version='1.0'?><Request><Form>selectRace</Form></Request>";
request = new asyncRequest();
RaceDescriptions = [];
postData().then((text) => {
  readXml(new window.DOMParser().parseFromString(text, "text/xml"));
});
//loaded = false;

/*request.open(
  "POST",
  "http://localhost:3000/Character%20Creation/choose%20a%20race.php",
  true
);
//request.open("POST", "http://corneliushedegaard.dk/Character%20Creation/choose%20a%20race.php", true);
request.setRequestHeader("content-type", "text/xml");
//request.setRequestHeader("content-length", params.length);
//request.setRequestHeader("connection", "close");

request.onreadystatechange = function () {
  if (this.readyState == 4) {
    //document.write("readyState == 4")
    if (this.status == 200) {
      //document.write("status==200")
      if (this.responseText != null) {
        //document.write("responseText != null")
        $("#testDiv").html("access");
        console.log(this.responseXML);
        readXml(this.responseXML);
      }
    }
  }
};
request.send(params);*/

async function postData() {
  $("#testDiv").html("postData");
  const response = await fetch(
    "http://localhost:3000/Character%20Creation/choose%20a%20race.php",
    {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: { "Content-Type": "text/xml" },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: params,
    }
  );
  return response.text();
}
function readXml(xmlFile) {
  $("#testDiv").html("readXml");
  xmlRace = xmlFile.getElementsByTagName("Race");
  $("#testDiv").html(
    xmlRace[0].getElementsByTagName("Name")[0].childNodes[0].nodeValue
  );
  raceSelect = $("#raceSelect").get(0);
  i = 0;
  while (xmlRace[i] != null) {
    addRaceFromXML(xmlRace[i]);
    option = document.createElement("option");
    option.text =
      xmlRace[i].getElementsByTagName("Name")[0].childNodes[0].nodeValue;
    //RaceDescriptions.push(xmlRace[i].getElementsByTagName("AbilityMod")[0].childNodes[0].nodeValue)
    raceSelect.add(option);
    i++;
  }
  $("#UserRace").html($("#raceSelect").val());

  document.getElementById("raceSelect").onchange = function () {
    choice = $("#raceSelect").val();
    element = document.getElementById("UserRace");
    element.innerHTML = choice;
    updateAbilityScores();
  };
  //$("#testDiv").html(Races[4].Name)
  //console.log(Races)
}

function asyncRequest() {
  try {
    var request = new XMLHttpRequest();
  } catch (e1) {
    try {
      var request = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e2) {
      try {
        request = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e3) {
        request = false;
      }
    }
  }
  return request;
}
