// get items from html(DOM manipulation)
const password = document.getElementById('password');
const conPassword = document.getElementById('c-password');
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

  // for confirm password
  if (conPassword.type === 'password') {
    conPassword.type = 'text';
  } else {
    conPassword.type = 'password';
  }
}

// function to validate user input
function validateInput() {
  //   password
  if (password.value.trim() === '') {
    // invoking error function for when user leaves input blank
    onError(password, 'Password cannot be empty');
    // change the placeholder display text
    let changeText = document.getElementById('password');
    changeText.setAttribute('placeholder', '');
  } else {
    // invoking success function for when user inputs right info
    onSuccess(password);
  }

  //   confirm password
  if (conPassword.value.trim() === '') {
    // invoking error function for when user leaves input blank
    onError(conPassword, 'Confirm Password cannot be empty');
    // change the placeholder display text
    let changeText = document.getElementById('c-password');
    changeText.setAttribute('placeholder', '');
  } else {
    // check if password and confirm password matches
    if (password.value.trim() !== conPassword.value.trim()) {
      onError(conPassword, 'Confirm password do not match with Password');
    }
    // invoking success function for when user inputs right info
    else {
      onSuccess(conPassword);
    }
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

// function to display error message for when user inputs wrong info
function onError(input, emessage) {
  // get parent container holding the input
  let parent = input.parentElement.parentElement;
  //   get element where error message would be displayed
  let message = parent.querySelector('small');
  //   show visibility when user input is not correct
  message.style.visibility = 'visible';
  //   error message when user input is not correct
  message.innerText = emessage;
  //   add error class from 'small' element when input is not correct
  parent.classList.add('error');
}
