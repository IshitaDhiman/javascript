let randomNumber = parseInt(Math.random() * 100 + 1);
const userInput = document.querySelector("#guessField")
const submit = document.querySelector("#subt")
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(num){
    if(isNaN(num)){
        alert('Please enter a valid number');
    }
    else if(num<1 || num>100){
        alert('Please enter the number in range 1 to 100');
    } 
    else{
        prevGuess.push(num)
        if(numGuess===11){
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(num);
            checkGuess(num);

        }
    }
}

function displayGuess(guess){
    userInput.value = '';//empty the field
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess} `;

}
function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;

}
function checkGuess(guess){
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is TOOO low`);
    } else if (guess > randomNumber) {
        displayMessage(`Number is TOOO High`);
    }
}
function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();

}
function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      randomNumber = parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      numGuess = 1;
      guessSlot.innerHTML = '';
      remaining.innerHTML = `${11 - numGuess} `;
      userInput.removeAttribute('disabled');
      startOver.removeChild(p);
      lowOrHi.innerHTML = "";
  
      playGame = true;
    });
  }