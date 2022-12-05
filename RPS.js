let playerScore=0;
let computerScore=0;

const getComputerChoice = () =>{
    const choices = ["rock", "paper", "scissors"]
    const random = Math.floor(Math.random()*3)
    const compchoice = choices[random]
    return compchoice
}

const playRound = (playerSelection, computerSelection)=> {
    if (playerSelection === computerSelection) {
        return `You tie! You both chose ${[playerSelection]}`
    } //No points for above as it is a tie.
    else if (playerSelection==="rock" && computerSelection === "scissors"){
        playerScore++
        return "You win! Rock crushes scissors."
    } 
    else if (playerSelection==="rock" && computerSelection === "paper"){
        computerScore++
        return "You lose! Paper covers rock."
    } 
    else if (playerSelection==="paper" && computerSelection === "rock"){
        playerScore++
        return "You win! Paper covers rock."
    }
    else if (playerSelection==="paper" && computerSelection === "scissors"){
        computerScore++
        return "You lose! Scissors cuts paper."
    }
    else if (playerSelection==="scissors" && computerSelection === "paper"){
        playerScore++
        return "You win! Scissors cuts paper."
    }
    else if (playerSelection==="scissors" && computerSelection === "rock"){
        computerScore++
        return "You lose! Rock crushes scissors."
    }
}

const game = () =>{
    for (let i=0; i<5; i++){
        const playerSelection = prompt("What do you choose?", "Rock, Paper, or Scissors?").toLowerCase()
        const computerSelection=getComputerChoice();

        console.log("1", playRound(playerSelection, computerSelection))
    }
    if (playerScore>computerScore) {
        return "You win! Pleae play again."
    } else if (playerScore<computerScore) {
        return "You lose! Come back when you know what you're doing."
    } else if (playerScore===computerScore) {
        return "You tied the game! Play again as we must have a winner"
    }
}

game()