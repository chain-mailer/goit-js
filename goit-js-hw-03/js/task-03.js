'use strict';

const findBestEmployee = function (employees) {
  const emloyeesValue = Object.values(employees);

  function Max(arr) {
    return Math.max(...arr);
  }

  const maxValue = Max(emloyeesValue);
  const indexOfMaxValue = emloyeesValue.indexOf(maxValue);

  const emloyeesKey = Object.keys(employees);
  for (const key of emloyeesKey) {
    if (emloyeesKey.indexOf(key) === indexOfMaxValue) {
      return key;
    }
  }
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
