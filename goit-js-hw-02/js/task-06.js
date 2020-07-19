'use strict';

let input;
const numbers = [];
let total = 0;

while (true) {
  let input = prompt('Введите число');
  numbers.push(Number(input));

  if (input === null) {
    break;
  }

  const notNumber = Number.isNaN(input);
  if (notNumber) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }
  console.log(numbers);
}

for (const number of numbers) {
  total += number;
}

console.log(`Общая сумма чисел равна ${total}`);
