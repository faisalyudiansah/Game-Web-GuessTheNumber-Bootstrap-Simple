var repeat = true
var info = alert('Welcome to Guess the numbers!' + '\n' + 'You only have 3 chances.')
while (repeat === true) {
    var playerChance = 3
    var result = ''
    var comp = Math.floor(Math.random() * 10) + 1
    console.log(comp)
    while (playerChance >= 1) {
        var guess = parseInt(prompt('Your remaining chances : ' + playerChance + '\nGuess the numbers 1 - 10'))
        console.log(guess)
        if (guess == comp) {
            result = 'Correct'
            alert('Congratulations! Your answer : ' + result)
            break
        } else if (guess > comp) {
            result = 'Almost! Your number is too high'
            playerChance = playerChance - 1
            alert('Your remaining chances : ' + playerChance + '\n' + result)
        } else if (guess < comp) {
            result = 'Almost! Your number is too low'
            playerChance = playerChance - 1
            alert('Your remaining chances : ' + playerChance + '\n' + result)
        } else if (guess !== Number) {
            result = 'Your input is invalid!'
            playerChance = playerChance - 1
            alert('Your remaining chances : ' + playerChance + '\n' + result)
        }

        if (playerChance === 0) {
            alert('Ups! You run out of chances')
        }
    }
    repeat = confirm('Want to try again?')
}

var infoGame = ''
if (result == 'Correct') {
    infoGame = 'Amazing! Your remaining chances : ' + playerChance + '\n' + 'Congratulations!'
} else if (playerChance === 0) {
    infoGame = 'Your remaining chances : ' + playerChance + '\n' + 'You run out of chances'
} else {
    infoGame = 'Your remaining chances : ' + playerChance + '\n' + 'The game has been cancelled'
}
document.getElementById('message').innerText = infoGame;

var statusPlayer = ''
if (result == 'Correct') {
    statusPlayer = 'You win!'
} else if (playerChance === 0) {
    statusPlayer = 'You lose!'
} else {
    statusPlayer = 'Your remaining chances : ' + playerChance + '\n' + 'The game has been cancelled'
}
document.getElementById('message2').innerText = statusPlayer;

var playagainBtn = 'Play Again'
document.getElementById('message-Btn').innerText = playagainBtn;