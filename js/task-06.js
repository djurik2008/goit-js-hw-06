const inputValidation = document.querySelector('#validation-input');

const verificationCondition = inputValidation.dataset.length;

inputValidation.addEventListener('blur', onInputValidationLength);

function onInputValidationLength(event) {
  console.log(event.currentTarget.blur);
  if (event.currentTarget.blur) {
    if (event.currentTarget.value.length <= verificationCondition) {
      inputValidation.classList.add('valid');
    } else {
      inputValidation.classList.add('invalid');
    }
  }
}
