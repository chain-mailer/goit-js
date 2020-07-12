'use strict';

const total = 100;
const ordered = 50;
const result = total - ordered;

if (ordered > total) {
  console.log('На складе недостаточно твоаров!');
} else {
  console.log('Заказ оформлен, с вами свяжется менеджер');
}
