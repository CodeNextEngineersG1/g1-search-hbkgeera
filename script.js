let database;
let searchBar = document.getElementId("search-bar");
let searchButton = document.getElementId("search-button");
let autoSuggestions = document.getElementId("auto-suggestions") ;
let display = document.getElementId("display");

/* write your script here */
database = [{
 team: "Club America",
 league: "liga MX",
 BestPlayer: "cecilio dominguez",
 championships: 12,
 logo: "img/ame.png"
},{
  team: "Real Madrid",
  league: "La Liga",
  BestPlayer: "Cristiano Ronaldo",
  championships: 33,
  logo:"img/real.png"
},{
  team: "Bayern Munich",
  league: "bundesliga",
  BestPlayer: "R. Lewandoski",
  championships: 28,
  logo: "img/bayern.png"
},{
  team:"LA Galaxy",
  league: "MLS",
  BestPlayer: "Zlatan Ibrahimovich",
  championships: 5,
  logo:"img/LA.jpeg"
},{
  team: "manchester United",
  league: "Premies League",
  BestPlayer: "pogba",
  championships: 5,
  logo:"img/man.png"
}];

searchBar.addEventListener("keypress");
function checkKey(e){
  var key = e.whitch || e.keyCode;
  if(key == 13){
    processInput();
  }
}
function processInput(){

}
function getRecord(cleanedInput){
  
}
