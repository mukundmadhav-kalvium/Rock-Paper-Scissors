// Defining Variables

const userChoiceDisplay = document.getElementById('user-choice')
const compChoiceDisplay = document.getElementById('comp-choice')
const result = document.getElementById('result')
const btn = document.querySelectorAll('button')
var userChoice;
var compChoice;
// Funtion for onclick
btn.forEach(btn => btn.addEventListener('click',(e)=>{
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    outResult();
}))

function generateComputerChoice(){
    randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1){
        compChoice = "rock"
    }
    else if (randomNumber === 2){
        compChoice = "paper"
    }
    else{
        compChoice = "scissors"
    } 
    compChoiceDisplay.innerHTML = compChoice;
}

function outResult(){
    if (userChoice === compChoice){
        result.innerHTML = "Draw"
    }
    else if (userChoice === "rock" && compChoice === "scissors"){
        result.innerHTML = "You Win"
    }
    else if (userChoice === "paper" && compChoice === "rock"){
        result.innerHTML = "You Win"
    }
    else if (userChoice === "scissors" && compChoice === "paper"){
        result.innerHTML = "You Win"
    }
    else{
        result.innerHTML = "You Lose"
    }
}
