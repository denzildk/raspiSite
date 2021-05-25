//AbilityScores
$(window).on("load", function () {
  if(Races.length>0)
  updateAbilityScores();
});

function updateAbilityScores() {
  //Strength
  strScore = parseInt($("#UserStr").val());
  strRaceMod = parseInt(getRace($("#raceSelect").val()).AbilityMod[0]);
  $("#StrengthScore").html(strScore + strRaceMod);
  $("#StrengthModifier").html(AbilityMod(strScore + strRaceMod));
  //Dexterity
  dexScore = parseInt($("#UserDex").val());
  dexRaceMod = parseInt(getRace($("#raceSelect").val()).AbilityMod[1]);
  $("#DexterityScore").html(dexScore + dexRaceMod);
  $("#DexterityModifier").html(AbilityMod(dexScore + dexRaceMod));
  //Constitution
  conScore = parseInt($("#UserCon").val());
  conRaceMod = parseInt(getRace($("#raceSelect").val()).AbilityMod[2]);
  $("#ConstitutionScore").html(conScore + conRaceMod);
  $("#ConstitutionModifier").html(AbilityMod(conScore + conRaceMod));
  //Inteligence
  intScore = parseInt($("#UserInt").val());
  intRaceMod = parseInt(getRace($("#raceSelect").val()).AbilityMod[3]);
  $("#InteligenceScore").html(intScore + intRaceMod);
  $("#InteligenceModifier").html(AbilityMod(intScore + intRaceMod));
  //Wisdom
  wisScore = parseInt($("#UserWis").val());
  wisRaceMod = parseInt(getRace($("#raceSelect").val()).AbilityMod[4]);
  $("#WisdomScore").html(wisScore + wisRaceMod);
  $("#WisdomModifier").html(AbilityMod(wisScore + wisRaceMod));
  //Charisma
  chaScore = parseInt($("#UserCha").val());
  chaRaceMod = parseInt(getRace($("#raceSelect").val()).AbilityMod[5]);
  $("#CharismaScore").html(chaScore + chaRaceMod);
  $("#CharismaModifier").html(AbilityMod(chaScore + chaRaceMod));
  //Point buy update
  strPoints = pointBuyCost(strScore);
  dexPoints = pointBuyCost(dexScore);
  conPoints = pointBuyCost(conScore);
  intPoints = pointBuyCost(intScore);
  wisPoints = pointBuyCost(wisScore);
  chaPoints = pointBuyCost(chaScore);
  totalPoints =
    strPoints + dexPoints + conPoints + intPoints + wisPoints + chaPoints;
  $("#PointsUsed").html(totalPoints);
}
function pointBuyCost(Score) {
  return Math.min(Score - 8, 5) + (Math.max(Score, 13) - 13) * 2;
}

function AbilityMod(Score) {
  return Math.floor((Score - 10) / 2);
}
