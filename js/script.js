//easy
//creo gli square dentro il container

const container = document.querySelector('.container');

const listNumbers = [];

const option = document.getElementById('play');


if (option === val) {
  
  for (let i = 0; i < 100; i++) {
    
    const squareEasy = createSquare(container);
  
  }
  
  function createSquare(game) {

    const squareEasy = document.createElement('div');
    const randomNum = generateUniqueNumber(listNumbers, 1, 100);
    squareEasy.innerHTML = 
    `
    <span>${randomNum}</span>
    `;
    squareEasy.className = 'square';
    game.append(squareEasy);
    return squareEasy;
  
  }
}

if (option) {
  for (let i = 0; i < 100; i++) {
    
    const squareEasy = createSquare(container);
  
  }

  function createSquare(game) {

    const squareEasy = document.createElement('div');
    const randomNum = generateUniqueNumber(listNumbers, 1, 64);
    squareEasy.innerHTML = 
    `
    <span>${randomNum}</span>
    `;
    squareEasy.className = 'square';
    game.append(squareEasy);
    return squareEasy;
  
  }
}


/**
 * Generatore di square easy
 * @param {HTMLDivElement} game 
 */
function createSquare(game) {

  const squareEasy = document.createElement('div');
  const randomNum = generateUniqueNumber(listNumbers, 1, 100);
  squareEasy.innerHTML = 
  `
  <span>${randomNum}</span>
  `;
  squareEasy.className = 'square';
  game.append(squareEasy);
  return squareEasy;

}


function generateUniqueNumber(list, min, max) {

  let number = null;
  let valid = false;

  while (!valid) {
    number = generateRandomNumb(min, max);
    if(!list.includes(number)){
      valid = true;
      list.push(number)
    }
  }
  return number;

}


/**
 * Generatore di numeri random
 * @param {number} min 
 * @param {number} max 
 * @returns 
 */
function generateRandomNumb(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}