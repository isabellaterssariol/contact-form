// Function to declare errors and success of fields
function fieldElements(fieldSelector) {
    const input = document.querySelector(fieldSelector);
    const showError = input.parentElement.querySelector('.errorPoint');
    const showSuccess = input.parentElement.querySelector('.successPoint');
    const errorMessage = input.parentElement.querySelector('.s-required');
  
    return {input, showError, showSuccess, errorMessage};
}
  
// Function to validate a field (generic)
function validateField(fieldSelector, validationFunction) {
    const { input, showError, showSuccess, errorMessage } = fieldElements(fieldSelector);
    const fieldValue = input.value.trim();
    const isValid = validationFunction(fieldValue);
  
    if (fieldValue === '') {
      showError.style.display = 'none';
      showSuccess.style.display = 'none';
      errorMessage.style.display = 'none';
      input.style.border = '2px solid initial';
    } else if (isValid) {
      showError.style.display = 'none';
      showSuccess.style.display = 'inline-block';
      errorMessage.style.display = 'none';
      input.style.border = '2px solid green';
    } else {
      showError.style.display = 'inline-block';
      showSuccess.style.display = 'none';
      errorMessage.style.display = 'inline-block';
      input.style.border = '2px solid red';
    }
  
    return isValid;
}
  
// Function to radio input
function validateRadio() {
    const radioInput = document.querySelectorAll('input[name="interests"]');
    let radioChecked = false;
  
    for (let i = 0; i < radioInput.length; i++) {
      if (radioInput[i].checked) {
        radioChecked = true;
        break;
      }
    }
    return radioChecked;
}
  
  
// Function to text input (name)
function validateName() {
    const validationFunction = (value) => {
      const wordCheck = /\b\w+\b.*\b\w+\b/;
      return wordCheck.test(value);
    };
  
    return validateField('#iname', validationFunction);
}
  
// Function to email input
function validateEmail() {
    const validationFunction = (value) => {
      const emailCheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      return emailCheck.test(value);
    };
  
    return validateField('#iemail', validationFunction);
}
  
// Function to textarea (message)
function validateMessage() {
    const validationFunction = (value) => {
      return value.length >= 20;
    };
  
    return validateField('#imsg', validationFunction);
}
  
// Function to validate form
function validateForm() {
    const radioValid = validateRadio();
    const nameValid = validateName();
    const emailValid = validateEmail();
    const messageValid = validateMessage();
    const submitBtn = document.querySelector('button[type="submit"]');
  
    if (radioValid && nameValid && emailValid && messageValid) {
      submitBtn.disabled = false;
    } else {
      submitBtn.disabled = true;
    }
}

// Manipulating form data and localStorage
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const interests = document.querySelector('input[name="interests"]:checked');
  const name = document.getElementById('iname').value.trim();
  const email = document.getElementById('iemail').value.trim();
  const message = document.getElementById('imsg').value.trim();

  if (validateRadio() && validateName() && validateEmail() && validateMessage()) {
    const formData = {
      interests: interests ? interests.nextElementSibling.textContent : '',
      name: name,
      email: email,
      message: message,
    };

    localStorage.setItem('formData', JSON.stringify(formData));
    window.location.href = 'second_page.html';
  }
});

// Manipulating event listener to inputs
document.addEventListener('DOMContentLoaded', () => {
  const radioInput = document.querySelectorAll('input[name="interests"]');
  const nameInput = document.getElementById('iname');
  const emailInput = document.getElementById('iemail');
  const messageInput = document.getElementById('imsg');

  radioInput.forEach((input) => {
    input.addEventListener('change', validateForm);
  });
  nameInput.addEventListener('input', validateForm);
  emailInput.addEventListener('input', validateForm);
  messageInput.addEventListener('input', validateForm);
});
