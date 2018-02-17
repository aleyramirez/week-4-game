$(document).ready(function() {
// Global Variables
var yourScore = document.getElementById('your-score'); //$('#your-score')
var targetScore = document.getElementById('target-score');
var win = document.getElementById('wins');
var loss = document.getElementById('losses');
var redBtnVal = getRandomNumber(5);
var blueBtnVal = getRandomNumber(10);
var yellowBtnVal = getRandomNumber(15);
var orangeBtnVal = getRandomNumber(20);
yourScore.innerHTML = 0;
loss.innerHTML = 0;
win.innerHTML = 0;
// Functions
function getRandomNumber(a) {
    return Math.floor (Math.random() * a);
};

function addScore(val) {
    var scoreInt = parseInt(val);
    var currentScore = parseInt(yourScore.innerHTML);
    yourScore.innerHTML = scoreInt + currentScore;
};

function checkScore() {
    var playerInt = parseInt(yourScore.innerHTML);
    var targScore = parseInt(targetScore.innerHTML);
    var wins = parseInt(win.innerHTML);
    var losses = parseInt(loss.innerHTML);
if (playerInt === targScore) {
    wins++;
    alert('You Win!');
}else if (playerInt > targScore) {
    losses++;
    alert('You Lose!');
};
}


// Event Handlers
$('#red-button').on('click', function(){
    addScore(redBtnVal);
    checkScore();
    console.log(redBtnVal);
});

$('#blue-button').on('click', function(){
    addScore(blueBtnVal);
    checkScore();
    console.log(blueBtnVal);
});
    
$('#yellow-button').on('click', function(){
    addScore(yellowBtnVal);
    checkScore();
    console.log(yellowBtnVal);
});
    
$('#orange-button').on('click', function(){
    addScore(orangeBtnVal);
    checkScore();
    console.log(orangeBtnVal);
});

targetScore.innerHTML = getRandomNumber(100);

});