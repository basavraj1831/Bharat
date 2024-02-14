document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Get the values of the new username and password
    var newUsername = document.getElementById('newUsername').value;
    var newPassword = document.getElementById('newPassword').value;
  
    // Check if the username already exists
    var users = JSON.parse(localStorage.getItem('users')) || [];
    var existingUser = users.find(function(user) {
      return user.username === newUsername;
    });
  
    if (existingUser) {
      alert('Username already exists. Please choose a different one.');
    } else {
      // Add the new user to the array of users
      users.push({ username: newUsername, password: newPassword });
  
      // Update localStorage with the new data
      localStorage.setItem('users', JSON.stringify(users));
  
      alert('Registration successful! You can now login.');
      // Redirect to login page after registration
      window.location.href = 'index.html';
    }
  });
  