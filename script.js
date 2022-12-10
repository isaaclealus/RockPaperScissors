arr = ["rock", "paper", "scissors"]

let getComputerChoice = () => arr[Math.floor(Math.random() * 3)]



function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection){
        console.log("TIE!")
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You WIN! paper beats rock")
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("YOU WIN! rock beats scissors")
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("YOU WIN! scissors beats paper")
    } else {
        console.log("YOU LOSE!")
    }
}
const computerSelection = getComputerChoice()
playerSelection = prompt("Choose: Rock, Paper, Or Scissors").toLowerCase()


function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection)
    }
    
}

game()