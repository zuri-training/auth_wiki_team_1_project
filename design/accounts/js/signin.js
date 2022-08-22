// get items from html(DOM manipulation)
const email = document.getElementById('email');
const password = document.getElementById('password');
const icon = document.getElementById('eye');

// event listener to toggle password type with eye icon
icon.addEventListener('click', function () {
  passwordType();
  icon.classList.toggle('fa-eye-slash');
});

// function to toggle password and confirm password type to text
function passwordType() {
  // for password
  if (password.type === 'password') {
    password.type = 'text';
  } else {
    password.type = 'password';
  }
}

// function to validate user input
function validateInput() {
  //   email
  if (email.value.trim() === '') {
    // invoking error function for when user leaves input blank
    onError(email, 'Looks like this is not an email');
    // change the placeholder display text
    let changeText = document.getElementById('email');
    changeText.setAttribute('placeholder', 'email@example.com');
  } else {
    // invoking function to validate the email by standard
    if (!isvalidEmail(email.value.trim())) {
      // invoking error function once more for when user inputs email that is not valid
      onError(email, 'email is not valid');
    } else {
      // invoking success function for when user inputs right info
      onSuccess(email);
    }
  }

  //   password
  if (password.value.trim() === '') {
    // invoking error function for when user leaves input blank
    onErrorPassword(password, 'Password cannot be empty');
    // change the placeholder display text
    let changeText = document.getElementById('password');
    changeText.setAttribute('placeholder', '');
  } else {
    // invoking success function for when user inputs right info
    onSuccessPassword(password);
  }
}

// eventlistener for when the submit button is clicked
document.querySelector('button').addEventListener('click', (event) => {
  // prevent the default function of the form
  event.preventDefault();
  //   invoke function to check if info from user was passed correctly
  validateInput();
});

// function to change error message when user puts in correct info
function onSuccess(input) {
  // get parent container holding the input
  let parent = input.parentElement;
  //   get element where error message would be displayed
  let message = parent.querySelector('small');
  //   hide the visibility when user input is correct
  message.style.visibility = 'hidden';
  //   remove error message when user input is correct
  message.innerText = '';
  //   remove error class from 'small' element when input is correct
  parent.classList.remove('error');
}

// function to display error message for when user inputs wrong info
function onError(input, emessage) {
  // get parent container holding the input
  let parent = input.parentElement;
  //   get element where error message would be displayed
  let message = parent.querySelector('small');
  //   show visibility when user input is not correct
  message.style.visibility = 'visible';
  //   error message when user input is not correct
  message.innerText = emessage;
  //   add error class from 'small' element when input is not correct
  parent.classList.add('error');
}

// succes function for password
function onSuccessPassword(input) {
  // get parent container holding the input
  let parent = input.parentElement.parentElement;
  //   get element where error message would be displayed
  let message = parent.querySelector('small');
  //   hide the visibility when user input is correct
  message.style.visibility = 'hidden';
  //   remove error message when user input is correct
  message.innerText = '';
  //   remove error class from 'small' element when input is correct
  parent.classList.remove('error');
}

// error function for password
function onErrorPassword(input, emessage) {
  let parent = input.parentElement.parentElement;
  let message = parent.querySelector('small');
  message.style.visibility = 'visible';
  message.innerText = emessage;
  parent.classList.add('error');
}

// function to validate email by standard
function isvalidEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
