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

  fetch('http://localhost:1999/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
    .then(response => response.json())
    .then(data => {
      if (data.message === 'Inschrijving voltooid') {
        alert('Inschrijving voltooid !');
      } else {
        alert('Error bij inschrijving : ' + data.message);
      }
    })
    .catch(error => {
      console.error('Error bij inschrijving :', error);
      alert('Error bij inschrijving');
    });
}

