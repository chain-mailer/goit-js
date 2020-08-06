'use strict';

const countTotalSalary = function (employees) {
  let total = 0;
  const employeeSale = Object.values(employees);
  for (let sale of employeeSale) {
    total += sale;
  }
  return total;
};

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400
