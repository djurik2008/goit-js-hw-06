const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = ingredients.map(ingredient => {
  const bodyUlEl = document.createElement('li')
  bodyUlEl.textContent = ingredient
  bodyUlEl.classList.add('item')
  return bodyUlEl
})

const ingredientsListContainer = document.querySelector('#ingredients')
ingredientsListContainer.append(...ingredientsList)




