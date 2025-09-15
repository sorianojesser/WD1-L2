const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
document.getElementById('signupMsg').textContent = "✅ Account created! You can now login.";
    signupForm.reset();
  });
}
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');
    const storedName = localStorage.getItem('userName');

    if (email === storedEmail && password === storedPassword) {
      document.getElementById('loginMsg').textContent = `✅ Welcome back, ${storedName}!`;
    } else {
      document.getElementById('loginMsg').textContent = "❌ Invalid email or password.";
    }
  });
}
