var options = ['Rock', 'Paper', 'Scissors'];
var userOption = 0;
var computerOption = 0;
var playerOption = document.getElementById('player-option');
var rockImage = "Images/Rock.jpeg"
var paperImage = "Images/Paper.jpeg"
var scissorsImage = "Images/Scissors.png"
var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');
function clickButton() {
  var choice = this.id
  if(choice === 'rock') {
    userOption = 1
  }else if(choice === 'paper'){
    userOption = 2
  }else if(choice === 'scissors') {
    userOption = 3
  }
  computerChoice()
  userDecision()
  compDecision()
  // alert('You Clicked ' + choice)
}


function computerChoice() {
  computerChoice = Math.floor(Math.random() * 3 +1);
  if(computerChoice === 1) {
    computerOption = 1
  }else if(computerChoice === 2) {
    computerOption = 2
  }else if(computerChoice === 3) {
    computerOption = 3
  }
};

function userDecision() {
  if(userOption === 1) {
    document.getElementById("userImg").src="Images/Rock.jpeg";
  }else if(userOption === 2) {
    document.getElementById("userImg").src="Images/Paper.jpeg";
  }else if(userOption === 3) {
    document.getElementById("userImg").src="Images/Scissors.png"; 
  }
};

function compDecision() {
  if(computerOption === 1) {
    document.getElementById("compImg").src="Images/Rock.jpeg";   
  }else if(computerOption === 2) {
    document.getElementById("compImg").src="Images/Paper.jpeg";     
  }else if(computerOption === 3) {
    document.getElementById("compImg").src="Images/Scissors.png";  
  }
};


  rock.addEventListener('click', clickButton);
  paper.addEventListener('click', clickButton);
  scissors.addEventListener('click', clickButton);


