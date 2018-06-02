let database;
let searchBar = document.getElementById("search-bar");
let searchButton = document.getElementById("search-button");
let autoSuggestions = document.getElementById("auto-suggestions") ;
let display = document.getElementById("display");

/* write your script here */
database = [{
 Team: "Club America",
 League: "liga MX",
 BestPlayer: "cecilio dominguez",
 Championships: 12,
 Logo: "img/ame.png"
},{
  Team: "Real Madrid",
  League: "La Liga",
  BestPlayer: "Cristiano Ronaldo",
  Championships: 33,
  Logo:"img/real.png"
},{
  Team: "Bayern Munich",
  League: "bundesliga",
  BestPlayer: "R. Lewandoski",
  Championships: 28,
  Logo: "img/bayern.png"
},{
  Team:"LA Galaxy",
  League: "MLS",
  BestPlayer: "Zlatan Ibrahimovich",
  Championships: 5,
  Logo:"img/LA.jpeg"
},{
  Team: "manchester United",
  League: "Premier League",
  BestPlayer: "pogba",
  Championships: 5,
  Logo:"img/man.png"
}];


searchBar.addEventListener("input",getAutoSuggestions);
searchBar.addEventListener("keypress",checkKey);
searchButton.addEventListener('click',processInput);
function checkKey(e){
  var key = e.whitch || e.keyCode;
  if(key == 13){
    processInput();
  }
}
function processInput(){
  let cleanedInput = searchBar.value.toLowerCase().trim();
  autoSuggestions.innerHTML='';
  autoSuggestions.style.display='none';
  autoSuggestions.innerHTML='';
  let databaseRecord = getRecord(cleanedInput);

  if(databaseRecord != null){
  displayRecord(databaseRecord);
}else{
  alert('No Results');
}
}
function getRecord(cleanedInput){
  for(let i = 0; i < database.length; i++){
    let cleanedRecordName = database[i].Team.toLowerCase().trim();
    console.log (cleanedRecordName);
    if(cleanedInput==cleanedRecordName){
      return database[i];
    }

    }
    return null;
  }
 function displayRecord(databaseRecord){
  var recordTeam = document.createElement("h2");
  recordTeam.innerHTML =  databaseRecord.Team;
  var recordLeague = document.createElement("h2");
  recordLeague.innerHTML =  "<b>League:</b> " +databaseRecord.League;
  var recordBestPlayer = document.createElement("h2");
  recordBestPlayer.innerHTML =  "<b>BestPlayer:</b> " +databaseRecord.BestPlayer;
  var recordChampionships = document.createElement("h2");
  recordChampionships.innerHTML =  "<b>Championships:</b> " +databaseRecord.Championships;
  var recordLogo = document.createElement("img");
  recordLogo.src =  databaseRecord.Logo;

  display.appendChild(recordTeam);
 display.appendChild(recordLeague);
 display.appendChild(recordBestPlayer);
 display.appendChild(recordChampionships);
 display.appendChild(recordLogo);
}



function(getAutoSuggestions){




}
