'use strict';

const toChina = 'Китай';
const toChinaCost = 100;
const toChile = 'Чили';
const toChileCost = 250;
const toAustralia = 'Австралия';
const toAustraliaCost = 170;
const toIndia = 'Индия';
const toIndiaCost = 80;
const toJamaica = 'Ямайка';
const toJamaicaCost = 120;

const userInput = prompt(`Выберите страну доставки: ${toChina}, ${toChile}, ${toAustralia}, ${toIndia}, ${toJamaica}.`).toLowerCase();
console.log(userInput);

switch (userInput) {
  case 'китай':
    alert(`Доставка в ${toChina} будет стоить ${toChinaCost} кредитов`);
    break;

  case 'чили':
    alert(`Доставка в ${toChile} будет стоить ${toChileCost} кредитов`);
    break;

  case 'австралия':
    alert(`Доставка в ${toAustralia} будет стоить ${toAustraliaCost} кредитов`);
    break;

  case 'индия':
    alert(`Доставка в ${toIndia} будет стоить ${toIndiaCost} кредитов`);
    break;

  case 'ямайка':
    alert(`Доставка в ${toJamaica} будет стоить ${toJamaicaCost} кредитов`);
    break;

  default:
    alert('В вашей стране доставка не доступна');
}
