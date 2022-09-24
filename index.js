let player1 =0
let player2 =0
let player3 =0
let cardsSum = document.getElementById("cardsSum")
function dispenseCards(sumCards) {
    console.log(sumCards)
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
    console.log(player1)
    console.log(player2)
    console.log(player3)

    if ((player1 <=21) && (player1 > player2)  &&  (player1 > player3)) 
    { return console.log("player 1 win the game")}
    else if ((player2 <= 21) && (player2 > player1)  &&  (player2 > player3))
    { return console.log("player 2 win the game") }
    else if ((player3 <=21) && (player3 > player2)  &&  (player3 > player1))
    { return console.log("player 3 win the game") }
    
    // bc of people which is lost cant compare their desk
    else if (player1 > 21) { player1=-1 } 
    else if (player2 > 21) { player2=-1 } 
    else if (player3 > 21) { player3=-1 } 

    else if ( player1===player2 || player1===player3 || player2===player3 || player1===player2 && player1===player3 )
    {
        console.log( "Nobody win the game bc of some of players have equall number with others" )
    }
    else{
        console.log("bug")
    }


    // reset of all decks burası buglı
    player1=0
    player2=0
    player3=0

    document.getElementById("start").hidden=false
    document.getElementById("startText").textContent="Wanna play a round"
    cardsSum.textContent = "Summary of your desk: "
}

function start(){
    player1 = dispenseCards(player1)
    player2 = dispenseCards(player2)
    player3 = dispenseCards(player3)
    cardsSum.textContent = "Summary of your desk: " + player1
    document.getElementById("start").hidden=true
    document.getElementById("startText").textContent="Game is running!!"
}

