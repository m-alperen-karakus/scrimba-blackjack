let player1 =0
let player2 =0
let player3 =0

function dispenseCards(sumCards) {
    let card1 = Math.floor(Math.random()*19) +1
    let card2 = Math.floor(Math.random()*19) +1
    return sumCards += card1+ card2
}

function pullCard(extraCard){
    let card3 = Math.floor(Math.random()*19) +1
    return extraCard += card3

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
    else{
    return console.log("nobody win the game")
    }
}


player1 = dispenseCards(player1)
player2 = dispenseCards(player2)
player3 =  dispenseCards(player3)

pullCard(player1)
pullFromTable()
