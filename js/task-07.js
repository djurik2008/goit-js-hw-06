const inputFontSizeControl = document.querySelector('#font-size-control');

const textEl = document.querySelector('#text');

inputFontSizeControl.addEventListener('change', onInputRangeCheck);

function onInputRangeCheck(event) {
  textEl.style.fontSize = event.currentTarget.value + 'px';
}
