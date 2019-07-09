let minEmailLength = 6;
let minPassLength = 5;
let email = prompt('Enter your e-mail please', '');
let password = '';
if (email === '' || email === null) {
  alert('Canceled');
} else if (email.length < minEmailLength) {
  alert('I don’t know any emails having name length less than 6 symbols');
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
  password = prompt('Enter your password please', '');
  if (password === '' || password === null) {
    alert('Canceled');
  } else if (
    email === 'user@gmail.com' && password === 'UserPass' ||
    email === 'admin@gmail.com' && password === 'AdminPass'
  ) {
    if (confirm('Do you want to change your password?')) {
      let oldPassword = prompt('Enter your old password please');
      if (
        email === 'user@gmail.com' && oldPassword === 'UserPass' ||
        email === 'admin@gmail.com' && oldPassword === 'AdminPass'
      ) {
        let newFirstPassword = prompt('Enter your mew password please');
        if (newFirstPassword.length < minPassLength) {
          alert('It’s too short password. Sorry.');
        } else {
          let newSecondPassword = prompt(
            'Enter your new password again please'
          );
          if (newSecondPassword === newFirstPassword) {
            alert('You have successfully changed your password.');
          } else {
            alert('You wrote the wrong password.');
          }
        }
      } else if (oldPassword === '' || oldPassword === null) {
        alert('Canceled');
      } else {
        alert('You wrote the wrong password.');
      }
    } else {
      alert('You have failed the change.');
    }
  } else {
    alert('Wrong password');
  }
} else {
  alert('I don’t know you');
}
