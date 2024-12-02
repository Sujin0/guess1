let targetNumber;
let attemptsLeft;
let maxAttempts = 5;

function startGame() {
    targetNumber = Math.floor(Math.random() * 10) + 1; 
    attemptsLeft = maxAttempts;
    document.getElementById('feedback-message').textContent = '';
    document.getElementById('attempts-left').children[0].textContent = attemptsLeft;
    document.getElementById('restart-btn').style.display = 'none';
}

function checkGuess() {
    const guess = parseInt(document.getElementById('guess').value);

    if (isNaN(guess) || guess < 1 || guess > 10) {
        document.getElementById('feedback-message').textContent = 'Please enter a valid number between 1 and 10.';
        return;
    }

    attemptsLeft--;
    document.getElementById('attempts-left').children[0].textContent = attemptsLeft;

    if (guess === targetNumber) {
        document.getElementById('feedback-message').textContent = 'Congratulations! You guessed the number!';
        document.getElementById('restart-btn').style.display = 'inline-block';
    } else if (guess < targetNumber) {
        document.getElementById('feedback-message').textContent = 'Too low! Try again.';
    } else {
        document.getElementById('feedback-message').textContent = 'Too high! Try again.';
    }

    if (attemptsLeft <= 0 && guess !== targetNumber) {
        document.getElementById('feedback-message').textContent = `Game over! The number was ${targetNumber}.`;
        document.getElementById('restart-btn').style.display = 'inline-block';
    }
}

function restartGame() {
    startGame();
    document.getElementById('guess').value = '';
    document.getElementById('feedback-message').textContent = '';
}

window.onload = startGame;
