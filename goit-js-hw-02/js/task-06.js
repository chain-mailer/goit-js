'use strict';

let input;
const numbers = [];
let total = 0;

while (true) {
  let input = prompt('Введите число');

  if (input === null) {
    break;
  }

  input = Number(input);
  const notNumber = Number.isNaN(input);
  if (notNumber) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }

  numbers.push(input);
  console.log(numbers);
}

for (const number of numbers) {
  total += number;
}

console.log(`Общая сумма чисел равна ${total}`);
