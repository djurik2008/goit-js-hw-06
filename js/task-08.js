const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubCheck);

function onFormSubCheck(event) {
  event.preventDefault();

  const formEmailEl = event.currentTarget.elements.email;
  const formPasswordEl = event.currentTarget.elements.password;

  if (formEmailEl.value === '' || formPasswordEl.value === '') {
    alert('Потрібно заповнити всі поля');
  } else {
    const formData = new FormData(event.currentTarget);

    const formDataObj = {};

    formData.forEach((value, name) => {
      formDataObj[name] = value;
    });
    console.log(formDataObj);
  }
  event.currentTarget.reset();
}
