const inputValidation = document.querySelector('#validation-input');

const verificationCondition = Number(inputValidation.dataset.length);

inputValidation.addEventListener('blur', onInputValidationLength);

function onInputValidationLength(event) {
  if (event.currentTarget.value.length === verificationCondition) {
    inputValidation.classList.add('valid');
    console.log(event.currentTarget.value.length);
  } else {
    inputValidation.classList.add('invalid');
  }
}
