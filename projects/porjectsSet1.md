# projects related to DOM

## project link [click here](https://stackblitz.com/edit/dom-project-chaiaurcode-7rt7up?file=index.html)

### note : should have account on stackblitz

# Solution Code JS

## Project 1

```javacript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
// console.log(body);

// console.log(buttons);

// learning about events in this project =>

buttons.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

// using switch statement

buttons.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    switch (e.target.id) {
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;

      case 'white':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
    }
  });
});



```

## Project 2 BMI Calculator

```javascript
const form = document.querySelector("form");
console.log(form);
// this usecase will give you empty value =>
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // for height

  const height = parseInt(document.querySelector("#height").value);

  //for weight
  const weight = parseInt(document.querySelector("#weight").value);

  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
```

## Project 3 digital Clock

```javascript
const time = document.querySelector("#clock");

console.log(time);

// set interval is important in terms of interview aspect

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  time.innerHTML = date.toLocaleTimeString();
}, 1000);
```

## project 4 - Guess a number

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");

const prevGuess = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");

const lowHigh = document.querySelector(".lowOrHi");
const startover = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGame = [];
let numGuesses = 1;
let gamePlay = true;

if (gamePlay) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // validating number

  if (isNaN(guess)) {
    alert("please enter a valid number");
  } else if (guess < 1) {
    alert("please enter a number more than 1");
  } else if (guess > 100) {
    alert("please enter a number less then 100");
  } else {
    prevGuess.push;
    if (numGuesses === 11) {
      displayGuess(guess);
      displayMessage(`Game over , Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //

  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is toooooo low!`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is toooooo high!`);
  }
}

function displayGuess(guess) {
  //
  userInput.value = "";
  prevGuess.innerHTML += `${guess},`;
  numGuesses++;
  lastResult.innerHTML = `${11 - numGuesses}`;
}

function displayMessage(message) {
  // interacting with DOM
  lowHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  //
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = '<h2 id = "newGame">Start new Game</h2>';
  startover.appendChild(p);

  gamePlay = false;
  newgame();
}

function newgame() {
  //
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    let prevGuess = [];
    numGuesses = 1;
    prevGuess.innerHTML = "";
    lastResult.innerHTML = `${11 - numGuesses}`;
    userInput.removeAttribute("disabled");
    startover.removeChild(p);

    gamePlay = true;
  });
}
```

## project 5 - unlimited colours

```javascript
// generate a random colot

const randomColor = () => {
  let hex = "0123456789ABCDEF"; // hex code value range
  let color = "#";

  for (i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// console.log(randomColor());

// start and stop refrence

// start refrence

let intervalId;

const startChangingColor = function (str) {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 2000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = function () {
  clearTimeout(intervalId);
  intervalId = null;
};

document.getElementById("start").addEventListener("click", startChangingColor);

// stop refrence
document.getElementById("stop").addEventListener("click", stopChangingColor);
```

## project 6 - Press anykey and see the magic

```javascript
// console.log('Project 6');

const insert = document.querySelector("#insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `<div class = 'color'>
  <table>
  <tr>
    <th>key</th>
    <th>keycode</th> 
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === " " ? "space" : e.key}</td>
    <td>${e.keyCode}</td> 
    <td>${e.code}</td>
  </tr>
 
</table>
  </div>`;
});
```
