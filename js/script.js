/*
The user must reach the rat king by killing rats and getting stronger
by increasing strength and health. There will be multiple paths for the
 user to take and dicover.
 */

//Make variables that will be use later in multiple functions.
var name;
var str = 1;
var killCount = 0;
var key = false;

//function is used more than once.
//reset stats for new gameplay
function resetStats(){
  name;
  str = 1;
  killCount = 0;
  key = false;
}


//What happens whe a user inputs the wrong information
function wrongInput(){
  alert("Wrong input. Try Y/N");
}

  
//first function to run, find name and set up seen
function start(){
  alert("Welcome to the Village, there are giant rats lurking outside this village.");
  alert("We need help to stop them from eating our food.");
  var helpUs = prompt("Will you help us? (Y/N)");
  
  if(helpUs == "y" || helpUs == "Y"){
    name = prompt("Thank you! What is your name?");
    alert("The only way to stop them is to defeat the Rat King. But you should train first.");
    main();
    
  }else if(helpUs == "n" || helpUs == "N"){
    alert("Oh... Okay.");
    alert("Game over?");
    resetStats();
    
  }else{
    wrongInput();
    start();
  }
  
  
}


// Function holds to option to fight rats of find Rat king
function main(){
  
  var train = prompt("Would you like to train before you find the rat king? (Y/N)");
  
  if(train == "y" || train == "Y"){
    alert("You walk along a path until you reach a sign that says. \"Rat Pit ahead\"");
    ratPit();
    
    //Lets user know if they are strong enough to fight the rat king
  }else if(train == "n" || train == "N"){
    if(str < 2){
      alert("You are not stong enough. Good luck...");
      beforeRatKing();
    }else{
      alert("Good luck " + name);
      beforeRatKing();
    } 
  } else {
    wrongInput();
    main();
  }
}


//function for attack rats and training
function ratPit(){
  
  var loopAgain = true;
  
  //keeps looping, if the user wants to train
  while(loopAgain){
    var ratPit = prompt("Welcome to the rat pit. Would you like to train? (Y/N)");
    
    if(ratPit == "y" || ratPit == "Y"){
      alert("A rat as big as a dog charges you! You attack back, killing it. You feel like you have gotten stronger.");
      str += 1;
      alert("Your strength is " + str);
      killCount += 1;
      
        if(killCount == 4){
          alert("You have received a key");
          key = true;
        }
      
    }else{
      alert("You will return to the village.");
      loopAgain = false;
      main();
    }
    
    //Sends user back to the village
    
  }
}


//Path to the Rat king function
function beforeRatKing(){
  var answer = prompt("You find the cave the Rat King lives in. Are you ready? (Y/N)");
  
  if(answer == "y" || answer == "Y"){
    alert("You enter the cave. The Rat King charges you!");
    ratKing();
  } else {
    alert("You are too scared, you run back to the village!");
    main();
  }
}


//the rat king function
function ratKing(){
  alert("You attack the Rat king.");
  
  // must have high strength or user will die
  if(str > 2){
    alert("You killed the Rat King!");
    treasure();
    
  } else {
    alert("You were not strong enough. You died.");
    resetStats();
  }
  
}


//if user has a key, they can open the chest
function treasure(){
  alert("Behind the Rat King you find a treasure chest…");
  
  if(key == true){
    alert("You open the chest with the key.");
    alert("You find a pile of gold! classic.");
  } else {
    alert("You dont have the key.");
  }
  
  finish();
  
}


//this is what the user get when they win
function finish(){
  alert("You win!");
  
  //reset stats for new gameplay
  resetStats()
}



