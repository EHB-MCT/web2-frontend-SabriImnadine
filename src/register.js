document.getElementById('registerForm').addEventListener('submit', registerUser);

function registerUser(e) {
  e.preventDefault();

  const username = document.getElementById('registerUsername').value;
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;

  const userData = {
    username,
    email,
    password
  };

  fetch('https://web-2-sabri.onrender.com/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
    .then(response => response.json())
    .then(data => {
      const registerMessage = document.getElementById('registerMessage');
      if (data.message === 'succesvolle registratie') {
        localStorage.setItem('userId', data.userId)
        registerMessage.textContent = 'Je bent succesvol geregistreerd!';
        registerMessage.classList.add('green');
      } else {
        registerMessage.textContent = 'Fout bij inschrijving : ' + data.message;
        registerMessage.classList.add('red');
      }
    })
    .catch(error => {
      console.error('Error bij inschrijving :', error);
      console.error('Error bij inschrijving');
    });
}
