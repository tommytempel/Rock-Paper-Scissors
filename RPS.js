let playerscore=0
let computerscore=0

const computerchoice =(compchoice)=> {
    const choices=["rock", "paper", "scissors"]
    const random=Math.floor(Math.random()*3)
    compchoice=choices[random]
    return compchoice
}

const play = (player, computerplay) => {
        if (player==="rock" && computerplay==="rock") {
            return ("You tie! You both chose Rock")
        }
        //No points for a tie.
        else if (player==="rock" && computerplay==="paper") {
            computerscore++
            return ("You lose! Paper covers rock.")
        }
        else if (player==="rock" && computerplay === "scissors"){
            playerscore++
            return ("You win! Rock crushes scissors")
        }
        else if (player==="paper" && computerplay==="rock"){
            playerscore++
            return ("You win! Paper covers Rock")
        }      
        else if (player==="paper" && computerplay==="paper"){
            return ("You tie! Paper is Paper")
        }
        //No points.
        else if (player==="paper" && computerplay==="scissors"){
            computerscore++
            return ("You lose! Scissors cuts paper")
        }
        else if (player==="scissors" && computerplay==="paper"){
            playerscore++
            return ("You win! Scissors cuts paper")
        }
        else if (player==="scissors" && computerplay=="rock") {
            computerscore++
            return ("You lose! Rock crushes Scissors")
        }
        else if (player==="scissors" && computerplay==="scissors") {
            return ("You tie! Scissors are Scissors")
        }
        //No points. 
    }

    
    const game = () => {
    for (let i = 0; i < 5; i++) {
        const player = prompt("Choose a play bitch.").toLowerCase()
        const computerplay = computerchoice();
        play(player, computerplay);
        console.log(play(player,computerplay))
     }
     if (playerscore>computerscore) {
        alert ("You win! You aren't that dumb afterall")
     }
     else if (computerscore>playerscore){
        return alert ("You lose! Stop being a dumbass")
     }
     }

game()
    


