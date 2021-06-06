'use strict';

let random = Math.trunc(Math.random() * 20) + 1;
let numberLeft = 20;
let highScore = 0;
const guessInput = document.querySelector('.your-guess');
const buttonCheck = document.querySelector('.btn-check');
const yourGuess = document.querySelector('.your-guess');
const retryButton = document.querySelector('.retry-button');

const message = function(message) {
    document.querySelector('.message').textContent = message;
};
const mainDisplay = function(number) {
    document.querySelector('.main').textContent = number;
};
const timerDisplay = function(times) {
    document.querySelector('.timer').textContent = times;
};
const bgStyle = function(color) {
    document.querySelector('.number').style.backgroundColor = color;
};
let gameOver = function(over) {
    buttonCheck.disabled = over;
};

var checkTheNumber = function() {
    const guess = Number(document.querySelector('.your-guess').value);

    if(!guess) {
        message('Unvalid Number!');
    }
    else if(guess === random) {
        message('Correct Number');
        mainDisplay(random);
        bgStyle('lime');
        if (numberLeft > highScore) {
            highScore = numberLeft;
            document.querySelector('.hs').textContent = highScore;
        }
        gameOver();
    }
    else if (guess !== random) {
        if(numberLeft > 1) {
            message(guess > random ? 'Too High!' : 'Too Low!');
            numberLeft--;
            timerDisplay(numberLeft);
            if(guess > 20) {
                message('Unvalid Number');
            }
        }
        else {
            message('You lost!');
            timerDisplay(0);    
            bgStyle('maroon');
            gameOver();
        }
    }
};

var reset = function() {
    retryButton.addEventListener('click', () => {
            numberLeft = 20;
            random = Math.trunc(Math.random() * 20) + 1;
            message('...');
            timerDisplay(numberLeft);
            mainDisplay('?');
            bgStyle('lightslategray');
            document.querySelector('.your-guess').value = '';
    });
};

buttonCheck.addEventListener('click', () => {
    checkTheNumber();
    reset();
});

yourGuess.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        checkTheNumber();
    }
});