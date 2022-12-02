let playerScore=0
let computerScore=0

const getComputerChoice = (compchoice) => {
    const options=["rock", "paper", "scissors"]
    const random=Math.floor(Math.random()*3)
    compchoice = options[random]
    return (compchoice)
}

const letsplay = (playerSelection,computerSelection) =>{
    if (playerSelection === "rock" && computerSelection === "rock"){
        return "You tie! you both chose rock"
    }
    else if (playerSelection === "paper" && computerSelection === "paper"){
        return "You tie! you both chose paper"
    }
    if (playerSelection === "scissors" && computerSelection === "scissors"){
        return "You tie! you both chose scissors"
    }
    //No points for above as it is a tie. 
    else if (playerSelection==="rock" && computerSelection ==="paper"){
        computerScore++
        return ("You lose! Paper crushes rock")
    }
    else if (playerSelection==="rock" && computerSelection ==="scissors"){
        playerScore++
        return ("You win! Rock crushes scissors")
    }
    else if (playerSelection==="paper" && computerSelection ==="rock"){
        playerScore++
        return ("You win! Paper covers rock.")
    }
    else if (playerSelection==="paper" && computerSelection ==="scissors"){
        computerScore++
        return ("You lose! Scissors cuts paper.")
    }
    else if (playerSelection==="scissors" && computerSelection ==="paper"){
        playerScore++
        return ("You win! Scissors cuts paper")
    }
    else if (playerSelection==="scissors" && computerSelection ==="rock"){
        computerScore++
        return ("You lose! Rock crushes scissors")
    }
}



const game = () => {
    for (let i=0; i<5; i++) {
        const playerSelection=prompt("What will you choose?","Rock, Paper or Scissors").toLowerCase;
        const computerSelection=getComputerChoice();
        letsplay()
        console.log(letsplay(playerSelection, computerSelection));  
    }
    if (playerScore>computerScore) {
        return "You win the game!"
    }
    else if (playerScore<computerScore) {
        return "You lose! Do better next time"
    }
}

game()

