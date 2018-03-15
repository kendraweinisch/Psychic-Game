var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guesses = 9;

var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerChoice)

document.onkeypress = function (event) {
    var userGuess = event.key;
    userGuess = userGuess.toLowerCase()
    console.log(userGuess)


    if (userGuess === computerChoice) {
        wins++;
    }

    else {
        guesses--;
    }

    if (guesses === 0) {
        losses++;
        guesses = 9;
    }
    console.log("wins ==> ", wins)
    console.log("guesses ==> ", guesses)
    console.log("losses ==> ", losses)


    document.getElementById('wins').innerHTML = wins;
    document.getElementById('losses').innerHTML = losses;
    document.getElementById('guesses').innerHTML = guesses;
}
