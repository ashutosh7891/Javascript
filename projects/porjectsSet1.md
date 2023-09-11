# projects related to DOM

## project link [click here](https://stackblitz.com/edit/dom-project-chaiaurcode-7rt7up?file=index.html)

### note : should have account on stackblitz

# Solution Code JS

## Project 1

```Javacript

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
