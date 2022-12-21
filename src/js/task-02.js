const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach((item)=>{
  const listItem = document.createElement('li')
  listItem.innerHTML = item
  listItem.classList.add('item')
  document.querySelector('#ingredients').append(listItem)
})
