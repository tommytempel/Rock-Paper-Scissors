let playerscore=0
let computerscore=0

const computerchoice =(compchoice)=> {
    const choices=["Rock", "Paper", "Scissors"]
    const random=Math.floor(Math.random()*3)
    compchoice=choices[random]
    console.log(compchoice)
}

const play = (player, computerplay) => {
        if (player==="rock" && computerplay==="Rock") {
            return ("You tie! You both chose Rock")
        }
        else if (player==="rock" && computerplay==="Paper") {
            return ("You lose! Paper covers rock.")
        }
        else if (player==="pock" && computerplay === "Scissors"){
            return ("You win! Rock crushes scissors")
        }
        else if (player==="paper" && computerplay==="Rock"){
            return ("You win! Paper covers Rock")
        }
        else if (player==="paper" && computerplay==="Paper"){
            return ("You tie! Paper is Paper")
        }
        else if (player==="paper" && computerplay==="Scissors"){
            return ("You lose! Scissors cuts paper")
        }
        else if (player==="scissors" && computerplay==="Paper"){
            return ("You win! Scissors cuts paper")
        }
        else if (player==="scissors" && computerplay=="Rock") {
            return ("You lose! Rock crushes Scissors")
        }
        else if (player==="scisors" && computerplay==="Scissors") {
            return ("You tie! Scissors are Scissors")
        }
    }

    const player = "rock"
    const  computerplay=computerchoice()

    const game = () => {
        for (let i = 0; i < 5; i++) {

         }
    }

    game()





