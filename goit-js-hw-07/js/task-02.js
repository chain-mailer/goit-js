const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const ingredientsList = document.querySelector('#ingredients');

const addToHtml = ingredients.map((ingredient) => {
  const ingredientsListItem = document.createElement('li');
  ingredientsListItem.textContent = ingredient;
  return ingredientsListItem;
});

ingredientsList.append(...addToHtml);
ingredientsList.classList.add('added-from-js');
