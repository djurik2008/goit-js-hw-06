const listWithClass = document.querySelectorAll(".item")
console.log(`Number of categories: ${listWithClass.length}`)
const listOfCategories = []

listWithClass.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}
    Elements: ${item.lastElementChild.childElementCount}`)
});








