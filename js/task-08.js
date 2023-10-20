const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmitCheck);

function onSubmitCheck(event) {
  event.preventDefault();

  const formEmailEl = event.currentTarget.elements.email;
  const formPasswordEl = event.currentTarget.elements.password;

  if (formEmailEl.value === '' || formPasswordEl.value === '') {
    alert('Потрібно заповнити всі поля');
  } else {
    const formData = new FormData(event.currentTarget);
    console.log(formData);
  }
}
