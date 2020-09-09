const decrementBtn = document.querySelector('.decrement-js');
const incrementBtn = document.querySelector('.increment-js');
const value = document.querySelector('#value');

function subtraction() {
  --value.textContent;
}
function add() {
  ++value.textContent;
}

decrementBtn.addEventListener('click', subtraction);
incrementBtn.addEventListener('click', add);

// // ---------------------------
// 2-й вариант

// const valueRef = document.querySelector('#value');
// const incrementBtnRef = document.querySelector('button[data-action="increment"]');
// const decrementBtnRef = document.querySelector('button[data-action="decrement"]');

// let counterValue = +valueRef.textContent;

// function increment() {
//   valueRef.textContent = counterValue += 1;
// }
// function decrement() {
//   valueRef.textContent = counterValue -= 1;
// }

// incrementBtnRef.addEventListener('click', increment);
// decrementBtnRef.addEventListener('click', decrement);
