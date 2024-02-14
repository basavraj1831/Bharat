// Check if there are existing username-password pairs in localStorage
// If not, initialize an empty array
var users = JSON.parse(localStorage.getItem('users')) || [];

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the values of username and password
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Check if the username exists in the stored data
  var userExists = users.find(function(user) {
    return user.username === username && user.password === password;
  });

  if (userExists) {
    // Redirect to another page upon successful login
    window.location.href = 'welcome.html';
  } else {
    alert('Incorrect username or password. Please try again.');
  }
});

// Function to handle registration of new users
function registerUser() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Check if the username already exists
  var existingUser = users.find(function(user) {
    return user.username === username;
  });

  if (existingUser) {
    alert('Username already exists. Please choose a different one.');
  } else {
    // Add the new user to the array of users
    users.push({ username: username, password: password });

    // Update localStorage with the new data
    localStorage.setItem('users', JSON.stringify(users));

    alert('Registration successful! You can now login.');
  }
}
