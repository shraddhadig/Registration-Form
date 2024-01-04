function displayData(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
   
    const displayData = document.getElementById('displayData');
    displayData.innerHTML = `
      <h2>Registration Details:</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Password:</strong> ${password}</p>
      <p><strong>Confirm Password:</strong> ${confirmPassword}</p>
      
    `;
  
    return false;
  }
  