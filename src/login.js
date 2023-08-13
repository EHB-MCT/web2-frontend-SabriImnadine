document.getElementById('loginForm').addEventListener('submit', loginUser);

function loginUser(e) {
  e.preventDefault();

  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  const loginData = {
    email,
    password
  };

  fetch('https://web-2-sabri.onrender.com/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginData)
  })
    .then(response => response.json())
    .then(data => {
      const loginMessage = document.getElementById('loginMessage');
      const messageText = data.message.trim();

      if (messageText === 'Succesvolle verbinding') {
        loginMessage.textContent = 'Je bent succesvol ingelogd!';
        loginMessage.classList.add('green');
      } else {
        loginMessage.textContent = 'Fout bij het verbinden : ' + data.message;
        loginMessage.classList.add('red');
      }
    })
    .catch(error => {
      console.error('Fout bij het verbinden :', error);
      console.error('Fout bij het verbinden');
    });
}

