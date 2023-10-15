const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const makeIngredientsList = (ingredients) => {
  return ingredients.map(ingredient => {
  const bodyUlEl = document.createElement('li')
  bodyUlEl.textContent = ingredient
  bodyUlEl.classList.add('item')
  return bodyUlEl
  })
}

const ingredientsListContainerEl = document.querySelector('#ingredients')

const ingredientsList = makeIngredientsList(ingredients)
ingredientsListContainerEl.append(...ingredientsList)



