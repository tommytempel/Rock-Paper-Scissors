const computerchoice =(compchoice)=> {
    const choices=["Rock", "Paper", "Scissors"]
    const random=Math.floor(Math.random()*3)
    compchoice=choices[random]
    console.log(compchoice)
}

const letsplay={
    if (player==="Rock" && computerchoice==="Rock") {
        return ("You tie! You both chose Rock")
    }
    else if (player==="Rock" && computerchoice==="Paper") {
        return ("You lose! Paper covers rock.")
    }
    else if (player==="Rock" && computerchoice === "Scissors"){
        return ("You win! Rock crushes scissors")
    }
    else if (player==="Paper" && computerchoice==="Rock"){
        return ("You win! Paper covers Rock")
    }
    else if (player==="Paper" && computerchoice==="Paper"){
        return ("You tie! Paper is Paper")
    }
    else if (player==="paper" && computerchoice==="Scissors"){
        return ("You lose! Scissors cuts paper")
    }
    else if (player==="Scissors" && computerchoice==="Paper"){
        return ("You win! Scissors cuts paper")
    }
}
