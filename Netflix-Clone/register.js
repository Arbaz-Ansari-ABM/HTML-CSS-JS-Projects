document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Check if user already exists in localStorage
    if (localStorage.getItem(username)) {
      alert('Username already exists. Please choose another.');
      return;
    }
  
    // Store user data in localStorage (in a real app, use a backend and secure database)
    localStorage.setItem(username, password);
    
    alert('Registration successful. Please login.');
    window.location.href = 'index.html'; // Redirect to login page
  });
  