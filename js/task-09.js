function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widgetButton = document.querySelector('.change-color');

widgetButton.addEventListener('click', onWidgetBtnChangeColor);

function onWidgetBtnChangeColor() {
  const randomColor = getRandomHexColor();
  const colorNameSpanEl = document.querySelector('.color');
  const bodyEl = document.querySelector('body');

  bodyEl.style.backgroundColor = randomColor;
  colorNameSpanEl.textContent = randomColor;
}
