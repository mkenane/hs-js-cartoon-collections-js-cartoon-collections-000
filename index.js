function dwarfRollCall(dwarves) {
  var rollcall = []
for (var i = 0; i < dwarves.length; i++) {
rollcall.push((i+1) + ". " + dwarves[i])
}
  return rollcall.join(" ") + " "
}


function summonCaptainPlanet(planeteerCalls){
var screamingcaptain = []
for (var i = 0; i < planeteerCalls.length; i++) {
  screamingcaptain.push(planeteerCalls[i].toUpperCase + "!")
}
return screamingcaptain
}


function longPlaneteerCalls(words) {
var filteredarray = words.filter(function(word) {
  return word.length > 4})
if (filteredarray.length > 0) {return true}
else {return false}
}

function findTheCheese(foods) {
var filteredfoods = foods.filter(function(food) {
return (food === "cheddar" || food === "gouda" || food === "camembert")})
if (filteredfoods.length > 0) {return filteredfoods[0]}
else {return "no cheese!"}
    }
