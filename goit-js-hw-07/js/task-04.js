const decrementBtn = document.querySelector('.decrement-js');
const incrementBtn = document.querySelector('.increment-js');
const value = document.querySelector('#value');

const subtraction = (a, b) => a - b;
const add = (a, b) => a + b;

decrementBtn.addEventListener('click', () => {
  value.textContent = subtraction(+value.textContent, 1);
});

incrementBtn.addEventListener('click', () => {
  value.textContent = add(+value.textContent, 1);
});

// ---------------------------
const valueRef = document.querySelector('#value');
const incrementBtnRef = document.querySelector('button[data-action="increment"]');
const decrementBtnRef = document.querySelector('button[data-action="decrement"]');

let counterValue = +valueRef.textContent;

function increment() {
  valueRef.textContent = counterValue += 1;
}
function decrement() {
  valueRef.textContent = counterValue -= 1;
}

incrementBtnRef.addEventListener('click', increment);
decrementBtnRef.addEventListener('click', decrement);
