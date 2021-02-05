
var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userPattern = [];

var gameStarted = false;

var level = 0;


//Compare user sequence to game sequence
function checkPattern(currentLevel) {

    if (userPattern[currentLevel] === gamePattern[currentLevel]) {

        if (userPattern.length === gamePattern.length) {
            setTimeout( nextSequence, 1000);
            userPattern = [];
        }

    } else {

        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout( function() {
            $("body").removeClass("game-over")
        }, 200);

        $("#level-title").text("Game Over, Press Any Key to Reset");

        $(document).keypress(startOver);
    }
}


//Randomly generate the pattern's next color
function nextSequence() {

    var randomNumber = Math.round(Math.random() * 3);

    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    playSound(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    $("#level-title").text("Level " + level);

    level++;
}


//Restart the game
function startOver() {
    level = 0;
    gamePattern = [];
    userPattern = [];
    gameStarted = false;
    $("#level-title").text("Press A Key to Start");
}


//Audio indication of button press
function playSound(name) {

    new Audio("sounds/" + name + ".mp3").play();

}


//Visual indication of button press
function animatePress(currentColor) {

    $("#" + currentColor).addClass("pressed");

    setTimeout( function() {
        $("#" + currentColor).removeClass("pressed");
        },
        125);

}


//Begin game by checking for any key press
$(document).keypress(function() {
    if (gameStarted === false) {
        setTimeout( nextSequence, 1000 );
        gameStarted = true;
    }
});


//Take user's input when a button is clicked
$(".btn").click( function(event) {

    var userChosenColor = this.id;

    userPattern.push(userChosenColor);

    playSound(userChosenColor);

    animatePress(userChosenColor);

    checkPattern( userPattern.length - 1);

});
