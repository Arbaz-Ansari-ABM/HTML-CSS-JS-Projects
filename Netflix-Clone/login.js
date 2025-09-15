document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check if the username exists in localStorage
  if (!localStorage.getItem(username)) {
    alert('Username is not registered. Please register first.');
    return;
  }

  // Retrieve password for the entered username from localStorage
  const storedPassword = localStorage.getItem(username);

  if (password !== storedPassword) {
    alert('Invalid password. Please try again.');
  } else {
    alert('Login successful!');
    // Redirect to the dashboard or another page after successful login
    window.location.href = 'index2.html'; // Redirect to dashboard
  }
});
