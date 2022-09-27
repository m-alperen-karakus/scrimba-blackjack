let player1 =0
let player2 =0
let player3 =0

//chips
let chipsText= document.getElementById("chips")
let chips=200

let cardsSum = document.getElementById("cardsSum")
function dispenseCards(sumCards) {
    let card1 = Math.floor(Math.random()*19) +1
    let card2 = Math.floor(Math.random()*19) +1

    if (card1 > 10) { card1 =10 }
    if (card2 > 10) { card2 =10 }

    return sumCards += card1+ card2
}



function pullCard(){
    let card3 = Math.floor(Math.random()*19) +1
    player1 += card3
    cardsSum.textContent = "Summary of your desk: " + player1
}

function pullFromTable()
{   
    cardsSum.textContent = "Player 1: " + player1 +" Player 2: " + player2 + " Player 3: "+player3

    // bc of people which is lost cant compare their desk
    if (player1 > 21) { player1=-1 } 
    else if (player2 > 21) { player2=-1 } 
    else if (player3 > 21) { player3=-1 } 

    if ((player1 <=21) && (player1 > player2)  &&  (player1 > player3)) 
    { 
        chips +=50
        document.getElementById("startText").textContent="Player 1 win the game"
    }
    else if ((player2 <= 21) && (player2 > player1)  &&  (player2 > player3))
    { 
        chips -=50
        
        document.getElementById("startText").textContent="Player 2 win the game" 
    }
    else if ((player3 <=21) && (player3 > player2)  &&  (player3 > player1))
    { 
        chips -=50
        document.getElementById("startText").textContent="Player 3 win the game" 
    }
    

    else if ( player1===player2 || player1===player3 || player2===player3 || player1===player2 && player1===player3 )
    { document.getElementById("startText").textContent="Nobody win the game bc of some of players have equall number with others" }

    console.log(chips)
    chipsText.textContent= "Total Chips: "+ chips +"$"
    

    // reset of all decks
    player1=0
    player2=0
    player3=0

    document.getElementById("start").hidden=false
}

function start(){
    player1 = dispenseCards(player1)
    player2 = dispenseCards(player2)
    player3 = dispenseCards(player3)
    cardsSum.textContent = "Summary of your desk: " + player1
    document.getElementById("start").hidden=true
    document.getElementById("startText").textContent="Game is running!!"
}

