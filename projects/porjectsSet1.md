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
