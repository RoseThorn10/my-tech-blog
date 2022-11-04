const loginFormHandler = async (event) => {
    console.log('Login button pressed');
    event.preventDefault();
  
    // Collect values from the login form
    const username = document.querySelector('#username-input-login').value.trim();
    const password = document.querySelector('#password-input-login').value.trim();
  
    if (username && password) {
        
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      console.log(response);
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        alert("You are logged in");
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#username-input-signup').value.trim();
    const password = document.querySelector('#password-input-signup').value.trim();
  
    if (name && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document.querySelector('#login-form').addEventListener('submit', loginFormHandler);
  
  