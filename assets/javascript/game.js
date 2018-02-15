$(document).ready(function() {
// Global Variables
var yourScore = document.getElementById('your-score');
var targetScore = document.getElementById('target-score');
var randomNumber = getRandomNumber;
// Functions
function getRandomNumber(a) {
    return Math.floor(Math.random() * a);
};

// Event Handlers
$('#red-button').on('click', function(){
    var randomValue = function randomValue() {
        var number = Math.floor(Math.random() * 5);
        return number;
    };
    //var value = randomValue;
    var addValues = randomValue + yourScore;
    var currentValue = addValues;
    yourScore.innerHTML = currentValue;
    console.log(this.randomValue);
});

targetScore.innerHTML = getRandomNumber(100);

if (yourScore == targetScore) {
    alert('Congrats, you win!');
}
// console.log();
});