function showLogin() {
  document.getElementById('registerDiv').classList.add('hidden');
  document.getElementById('loginDiv').classList.remove('hidden');
  document.getElementById('loginTitle').classList.remove('hidden');
  fadeInContainer();
}

function showRegister() {
  document.getElementById('registerDiv').classList.remove('hidden');
  document.getElementById('loginDiv').classList.add('hidden');
  document.getElementById('loginTitle').classList.add('hidden');
  fadeInContainer();
}

function register() {
  const username = document.getElementById('regUsername').value;
  const password = document.getElementById('regPassword').value;
  if(username && password) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    alert('Registration successful! Now login.');
    showLogin();
  } else {
    alert('Please enter username and password.');
  }
}

function login() {
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;
  const storedUsername = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');

  if(username === storedUsername && password === storedPassword) {
    document.getElementById('loginDiv').classList.add('hidden');
    document.getElementById('loginTitle').classList.add('hidden');
    document.getElementById('securePage').classList.remove('hidden');
    fadeInContainer();
  } else {
    alert('Invalid credentials.');
  }
}

function logout() {
  document.getElementById('securePage').classList.add('hidden');
  showLogin();
}

/* Adds fade animation when switching screens */
function fadeInContainer() {
  const container = document.getElementById('container');
  container.classList.remove('fade-in');
  void container.offsetWidth; // trigger reflow
  container.classList.add('fade-in');
}
