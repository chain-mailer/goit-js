'use strict';

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
  console.log(input);
  total += input;
}

alert(`Общая сума ${total}`);
