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

  const boxElArr = [];

  for (let i = 1; i <= amount; i += 1) {
    const randomColor = getRandomHexColor();
    let boxSizeWidth = (boxSize.width += 10);
    let boxSizeHeight = (boxSize.height += 10);
    const boxEl = document.createElement('div');
    boxEl.style.width = boxSizeWidth + 'px';
    boxEl.style.height = boxSizeHeight + 'px';
    boxEl.style.backgroundColor = randomColor;
    boxElArr.push(boxEl);
  }
  boxElContainer.append(...boxElArr);
}

function handlerCleareBoxes() {
  boxElContainer.innerHTML = '';
}
