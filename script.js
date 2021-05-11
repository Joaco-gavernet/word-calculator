

let wordGetter = () => {
  let input = document.querySelector('.wordInput').value;
  if (input !== null) {
    let numberOfLetters = input.length;
    document.querySelector('.output').innerHTML = 'The number of letters is: ' + numberOfLetters;
  }
}

let button = document.querySelector('.buttonCalculate');

button.addEventListener('click', wordGetter);