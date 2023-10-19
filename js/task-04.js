const btnCountUp = document.querySelector('button[data-action="increment"]');
const btnCountDown = document.querySelector('button[data-action="decrement"]');

const counterBtns = document.querySelectorAll('#counter button');

// console.log(counterBtns);

function counters() {
  counterBtns.forEach(counter => {
    counter.addEventListener('click', () => {
      const counterBtnType = counter.dataset.action;
      const spanValue = document.querySelector('#value');
      let counterValue = Number(spanValue.textContent);
      let newValue;

      if (counterBtnType === 'increment') {
        newValue = counterValue + 1;
      } else {
        newValue = counterValue - 1;
      }

      spanValue.textContent = newValue;
    });
  });
}
counters();
