//Generate random number 1-6 for each player
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//Change dice image to reflect random number
document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");

//Interpret winner and display message
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🎲 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🎲";
} else {
    document.querySelector("h1").innerHTML = "🎲 DRAW 🎲";
}

//Potential features: Add/Remove player up to 4 players.
