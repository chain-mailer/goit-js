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
