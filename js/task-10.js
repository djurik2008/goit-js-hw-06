function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');

const controlsEl = document.querySelector('#controls');
const boxElContainer = document.querySelector('#boxes');

btnCreate.addEventListener('click', handlerCreateBoxes);
btnDestroy.addEventListener('click', handlerCleareBoxes);

function handlerCreateBoxes() {
  const amount = controlsEl.firstElementChild.value;

  const boxSize = {
    width: 20,
    height: 20,
  };

  for (let i = 1; i <= amount; i += 1) {
    const randomColor = getRandomHexColor();
    let boxSizeWidth = (boxSize.width += 10);
    let boxSizeHeight = (boxSize.height += 10);
    const boxEl = `<div style="width: ${boxSizeWidth + 'px'}; height: ${
      boxSizeHeight + 'px'
    }; background-color: ${randomColor}"></div>`;
    boxElContainer.insertAdjacentHTML('beforeend', boxEl);
  }
}

function handlerCleareBoxes() {
  boxElContainer.innerHTML = '';
}
