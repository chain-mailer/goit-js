'use strict';

const checkForSpam = function (message) {
  let text = message.toLowerCase();
  if (text.indexOf('sale') != -1 || text.indexOf('spam') != -1) {
    return Boolean(1);
  } else {
    return Boolean(0);
  }
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
