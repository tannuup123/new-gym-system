// Show/hide password toggle
function togglePassword() {
    const passwordField = document.getElementById("password");
    const eyeIcon = document.getElementById("eyeIcon");
  
    if (passwordField.type === "password") {
      passwordField.type = "text";
      eyeIcon.classList.remove("fa-eye");
      eyeIcon.classList.add("fa-eye-slash");
    } else {
      passwordField.type = "password";
      eyeIcon.classList.remove("fa-eye-slash");
      eyeIcon.classList.add("fa-eye");
    }
  }
  
  // Handle form submission
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload
  
    const username = document.querySelector('input[name="uname"]').value;
    const password = document.querySelector('input[name="psw"]').value;
  
    if (username === "" || password === "") {
      alert("Please enter both username and password.");
      return;
    }
  
    // Simulate login action
    alert(`Welcome, ${username}! You are now logged in.`);
  
    // You can redirect or process login logic here
    // window.location.href = "dashboard.html"; // Example
  });
  






