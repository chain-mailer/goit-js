'use strict';
// 1-й вариант
// const findBestEmployee = function (employees) {
//   const bestValue = Math.max(...Object.values(employees));

//   for (const bestEmployee of Object.entries(employees)) {
//     if (bestEmployee[1] === bestValue) {
//       return bestEmployee[0];
//     }
//   }
// };

// 2-й вариант
const findBestEmployee = function (employees) {
  let bestValue = 0;
  let bestEmployee = null;

  for (const [name, salary] of Object.entries(employees)) {
    if (bestValue < salary) {
      bestValue = salary;
      bestEmployee = name;
    }
  }
  return bestEmployee;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
