const categoriesListRef = document.querySelectorAll('.item');
console.log(`Количество категорий: ${categoriesListRef.length}`);

categoriesListRef.forEach((category) => {
  console.log(`Карегория: ${category.querySelector('h2').textContent}`);
  console.log(`Количество элементов: ${category.querySelectorAll('li').length}`);
});
