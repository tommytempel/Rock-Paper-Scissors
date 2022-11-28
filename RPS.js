const getcomputerchoice = () => {
    const arr0fchoices = ["rock", "paper", "scissors"]
    const randomnum = Math.floor(Math.random() * 3)
    const compchoice = arr0fchoices[randomnum]
    return compchoice
}


const playaround = (playerselection, computerselection) => {
    if (playerselection === "rock" && computerselection === "rock") {
        return "You tied! You both picked rock."
    }
    else if (playerselection === "paper" && computerselection === "paper") {
        return "You tied! You both picked paper"
    }
    else if (playerselection === "scissors" && computerselection === "scissors") {
        return "You tied! You both picked scissors"
    }
    else if (playerselection === "scissors" && computerselection === "rock") {
       return "You lose! Rock crushes scissors"
    }
    else if (playerselection === "scissors" && computerselection === "paper") {
       return "You win! Scissors cut paper"
    }
    else if (playerselection === "paper" && computerselection === "rock") {
        return "You win! Paper covers rock"
    }
    else if (playerselection === "paper" && computerselection === "scissors") {
        return "You lose! Scissors cuts paper"
    }
    else if (playerselection === "rock" && computerselection === "paper") {
        return "You lose! Paper Covers Rock"
    }
    else if (playerselection === "rock" && computerselection === "scissors") {
        return "You win! Rock crushes scissors"
    }
}

const playerselection = "rock";
const computerselection = getcomputerchoice();

console.log(playaround(playerselection, computerselection));