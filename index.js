//instructions for game play in console
console.log(`How To Play:\nTo start game, \nPlayer: press R for Rock, press P for Paper, press S for scissors\nComputer: randomly chooses rock, paper or scissors\nRules:\nRock beats Scissors\nScissors beats Paper\nPaper beats Rock`)
//global variables defined for score keeping
let win = 0;
let lose = 0;
let draw = 0;
// variables for Rock Paper and Scissors to be assigned to and defined for players choice key strokes  and for html display of players choice info
let displayPlayersChoice = document.getElementById("display_players_choice");
let playersChoice;
//given code for players using keystrokes to choose Rock, Paper, or scissors
document.addEventListener("keyup", function(event) {
    if(event.keyCode === 82) {  
         // Define user's variable here = "rock";      
        playersChoice = "Rock";
        displayPlayersChoice.innerText = 'You chose Rock!'
    }
    else if(event.keyCode === 80) {  
         // Define user's variable here = "paper";     
        playersChoice = "Paper";
        displayPlayersChoice.innerText = 'You chose Paper!'
    }
    else if(event.keyCode === 83) {
        // Define user's variable here = "scissors";
        playersChoice = "Scissors";
        displayPlayersChoice.innerText = 'You chose Scissors!'
    }
    else {
        // Define user's variable here = "Please press r, p, or s";
        playersChoice = " an invalid key! Please press r, p, or s"
        displayPlayersChoice.innerText ='an invalid key'
    }
console.log(`You chose:${playersChoice}`)
//Computer makes a random choice
//create an array with rock paper and scissors to randomly choose from
let choices = ["Rock", "Paper", "Scissors"]
let computerChoice = choices[Math.floor(Math.random() * choices.length)]
console.log(`Computer chose: ${computerChoice}`)
//here is where I have the variable and set up to display computers choice in html
let displayComputerChoice = document.getElementById("display_computers_choice");
displayComputerChoice.innerText = computerChoice;
//create a computer function to determine who wins: rock > scissors, scissors > paper, paper > rock
function whoWins(){
//variable for the html display of results announcment to player about win lose or draw
let displayResults = document.getElementById("results")
//Here are my needed functions for what to execute if conditions are met for a win, lose, or draw in my ternary operator
function funcDraw(){
    displayResults.innerText = "Its a Draw!"; 
    console.log("It's a Draw");
    draw++ 
}
function funcWin(){
    displayResults.innerText = "You Win!"; 
    console.log("You Win!");
    win++ 
}
function funcLose(){
    displayResults.innerText = "You Lose"; 
    console.log("You Lose");
    lose++ 
}
//here in my Ternary Operator for determining who and what wins- conditionals
playersChoice === computerChoice ? funcDraw() :(computerChoice === "Rock" && playersChoice === "Paper" ||computerChoice === "Paper" && playersChoice === "Scissors" || computerChoice === "Scissors" && playersChoice === "Rock") ? funcWin(): (computerChoice === "Rock" && playersChoice ==="Scissors" ||computerChoice === "Paper" && playersChoice === "Rock" ||computerChoice === "Scissors" && playersChoice === "Paper") ?  funcLose(): playersChoice ===" an invalid key! Please press r, p, or s" ? displayResults.innerText = "Please press r, p, or s": null    
}
whoWins()
// here is where I created the variables and set up to display totaled win, loss, and draws in the htnl
let winTotal = document.getElementById("win_total");
winTotal.innerText=win;
let lossTotal = document.getElementById("loss_total");
lossTotal.innerText =lose;
let drawTotal = document.getElementById("draw_total");
drawTotal.innerText=draw;
// here is where I have the console log for totaled wins losses and draws
console.log(`Wins=${win}, Losses=${lose}, Draws=${draw}`)
})
