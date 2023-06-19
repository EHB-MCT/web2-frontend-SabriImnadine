document.getElementById('loginForm').addEventListener('submit', loginUser);

function loginUser(e) {
  e.preventDefault();

  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  const loginData = {
    email,
    password
  };

  fetch('http://localhost:1999/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginData)
  })
    .then(response => response.json())
    .then(data => {
      if (data.message === 'succesvolle login ') {
        alert('succesvolle login  !');
      } else {
        alert('Fout bij het verbinden : ' + data.message);
      }
    })
    .catch(error => {
      console.error('Fout bij het verbinden :', error);
      alert('Fout bij het verbinden');
    });
}