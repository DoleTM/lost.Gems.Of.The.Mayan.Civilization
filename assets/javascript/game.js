// Declare the 'global variables to be used in this game.
// The random number the computer choses at the beginning of the game
var randomNumber = Math.floor(Math.random() * 101 + 19);
$("#valueToGet").text("Number to Match: " + randomNumber);
console.log(randomNumber);
// The values of each crystal
var crystal1 = Math.floor(Math.random() * 11 + 1);
console.log(crystal1);
var crystal2 = Math.floor(Math.random() * 11 + 1);
console.log(crystal2);
var crystal3 = Math.floor(Math.random() * 11 + 1);
console.log(crystal3);
var crystal4 = Math.floor(Math.random() * 11 + 1);
console.log(crystal4);

// The varibles for keeping current score and overall score
var wins = 0;
var losses = 0;
var currentScore = 0;

// Write the functions to be used for this game...
// This function does.....
function reset() {
    randomNumber = Math.floor(Math.random() * 101 + 19);
    currentScore = 0;
    crystal1 = Math.floor(Math.random() * 11 + 1);
    crystal2 = Math.floor(Math.random() * 11 + 1);
    crystal3 = Math.floor(Math.random() * 11 + 1);
    crystal4 = Math.floor(Math.random() * 11 + 1);
    $("#valueToGet").text("Number to Match: " + randomNumber);
    $("#currentDisplayed").html(currentScore);

// When your current number matches the number to get
};
function win() {
    wins++;
    $("#wins").html("Wins:" + " " + wins);
    reset();
};
// When your current number exceeds the number to get
function loss() {
    losses++;
    $("#losses").html("Losses:" + " " + losses);
    reset();
};

// When the ruby is clicked...
$(".ruby").on('click', function () {
    currentScore = currentScore + crystal1;
    console.log("Current Score: " + currentScore);
    $('#currentDisplayed').text("Current Score: " + currentScore);
    if (currentScore == randomNumber) {
        win();
    }
    else if (currentScore > randomNumber) {
        loss();
    }
});
// When the diamond is clicked...
$(".diamond").on('click', function () {
    currentScore = currentScore + crystal2;
    console.log("Current Score: " + currentScore);
    $('#currentDisplayed').text("Current Score: " + currentScore);
    if (currentScore == randomNumber) {
        win();
    }
    else if (currentScore > randomNumber) {
        loss();
    }
});
// When the amber is clicked...
$(".amber").on('click', function () {
    currentScore = currentScore + crystal3;
    console.log("Current Score: " + currentScore);
    $('#currentDisplayed').text("Current Score: " + currentScore);
    if (currentScore == randomNumber) {
        win();
    }
    else if (currentScore > randomNumber) {
        loss();
    }
});
// When the emerald is clicked...
$(".emerald").on('click', function () {
    currentScore = currentScore + crystal4;
    console.log("Current Score: " + currentScore);
    $('#currentDisplayed').text("Current Score: " + currentScore);
    if (currentScore == randomNumber) {
        win();
    }
    else if (currentScore > randomNumber) {
        loss();
    }
});