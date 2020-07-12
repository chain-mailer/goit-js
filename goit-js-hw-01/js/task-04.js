'use strict';

const credits = 23580;
const pricePerDroid = 3000;
const userInput = prompt('Сколько дроидов хотите купить?');
let totalPrice;

if (userInput === null) {
  console.log('Отменено пользователем!');
} else {
  totalPrice = userInput * pricePerDroid;
  console.log(totalPrice);
}

if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
  alert('Недостаточно средств на счету!');
} else {
  alert(`Вы купили ${userInput} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
}
