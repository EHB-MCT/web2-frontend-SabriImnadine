async function getAllChallenges() {
  try {
    const response = await fetch('https://web-2-sabri.onrender.com/all-challenges');
    const { challenges } = await response.json();

    const challengesList = document.getElementById('challenges-list');
    challengesList.innerHTML = '';

    challenges.forEach(challenge => {
      const challengeElement = createChallengeElement(challenge);
      challengesList.appendChild(challengeElement);
    });
  } catch (error) {
    console.error('Fout bij ophalen van uitdagingen:', error);
    console.error('Er is een fout opgetreden bij het ophalen van uitdagingen');
  }
}

function createChallengeElement(challenge, showPlayButton) {
  const challengeElement = document.createElement('div');
  challengeElement.classList.add('challenge');

  const textElement = document.createElement('p');
  textElement.textContent = `Text: ${challenge.text}`;

  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = `Description: ${challenge.description}`;

  const datasetElement = document.createElement('p');
  datasetElement.textContent = `Dataset: ${challenge.dataset}`;

  const pictureElement = document.createElement('img');
  pictureElement.src = challenge.picture;
  pictureElement.alt = 'Challenge Picture';

  const resultElement = document.createElement('p');
  resultElement.textContent = `Result: ${challenge.result}`;

  

  challengeElement.appendChild(textElement);
  challengeElement.appendChild(descriptionElement);
  challengeElement.appendChild(datasetElement);
  challengeElement.appendChild(pictureElement);
  challengeElement.appendChild(resultElement);
  
  if (showPlayButton) {
    const playButton = document.createElement('button');
    playButton.textContent = 'Play';
    playButton.classList.add('delete-button'); 
    playButton.addEventListener('click', () => {
    window.location.href = `play-challenge.html?challengeId=${challenge.challengeId}`;
    });
  
    challengeElement.appendChild(playButton);
  }

  return challengeElement;
}

async function createChallenge(event) {
  event.preventDefault();

  const text = document.getElementById('text').value;
  const description = document.getElementById('description').value;
  const dataset = document.getElementById('dataset').value;
  const image = document.getElementById('image').value;
  const result = document.getElementById('result').value;

  const userId = localStorage.getItem('userId');
  if (!userId) {
      console.log('Log u eerst in');
      return;
  }

  try {
      const unsplashResponse = await fetch(`https://api.unsplash.com/photos/random?query=${image}&client_id=GOHJHj66skaIw-s9JfZAChwWNs0xososjIEvNVnfbrQ`);
      const unsplashData = await unsplashResponse.json();

      if (unsplashResponse.ok) {
          const picture = unsplashData.urls.regular;
          const altDescription = unsplashData.alt_description;

          const challengeData = {
              text,
              description,
              dataset,
              picture,
              altDescription,
              result,
              userId
          };

          const response = await fetch('https://web-2-sabri.onrender.com/newChallenges', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(challengeData)
          });

          const {
              message,
              challengeId
          } = await response.json();

          if (response.ok) {
            const successMessage = document.getElementById('createChallengeMessage');
            successMessage.textContent = 'Challenge created successfully';
            successMessage.classList.add('green');
            const currentChallengeIds = JSON.parse(localStorage.getItem('currentChallengeIds')) || [];
            currentChallengeIds.push(challengeId);
            localStorage.setItem('currentChallengeIds', JSON.stringify(currentChallengeIds));
            document.getElementById('create-challenge-form').reset();
            getAllChallenges();
          } else {
            const errorMessage = document.getElementById('createChallengeMessage');
            errorMessage.textContent = 'Challenge creation failed';
            errorMessage.classList.add('red');
          }
      } else {
          console.error('Error bij het fetchen van de Unplash API');
      }
  } catch (error) {
      console.error('Een fout is opgetreden tijdens het aanmaken van een uitdaging:', error);
      console.error('Een fout is opgetreden tijdens het aanmaken van een uitdaging');
  }
}

async function getMyChallenges(userId) {
  try {
    console.log("UserId:", userId);

    const response = await fetch(`https://web-2-sabri.onrender.com/my-challenges?userId=${userId}`);
    const { challenges } = await response.json();

    console.log("Challenges:", challenges);

    const myChallengesList = document.getElementById('my-challenges-list');
    console.log("MyChallengesList:", myChallengesList);
    myChallengesList.innerHTML = '';

    challenges.forEach(challenge => {
      const challengeElement = createChallengeElement(challenge);

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('delete-button');
      deleteButton.addEventListener('click', () => {
        deleteChallenge(challenge.challengeId);
      });

      challengeElement.appendChild(deleteButton);
      myChallengesList.appendChild(challengeElement);
    });
  } catch (error) {
    console.error('Fout bij ophalen van gebruikersuitdagingen:', error);
    console.error('Er is een fout opgetreden bij het ophalen van gebruikersuitdagingen');
  }
}

async function deleteChallenge(challengeId) {
  try {
    const response = await fetch(`https://web-2-sabri.onrender.com/deleteChallenge/${challengeId}`, {
      method: 'DELETE'
    });

    const { message } = await response.json();

    if (response.ok) {
      console.error(message);
      const currentChallengeIds = JSON.parse(localStorage.getItem('currentChallengeIds')) || [];
      const updatedChallengeIds = currentChallengeIds.filter(id => id !== challengeId);
      localStorage.setItem('currentChallengeIds', JSON.stringify(updatedChallengeIds));
      const userId = localStorage.getItem('userId');
      if (userId) {
        getMyChallenges(userId);
      }
    } else {
      console.error(message);
    }
  } catch (error) {
    console.error('Fout bij verwijderen van uitdaging:', error);
    console.error('Er is een fout opgetreden bij het verwijderen van de uitdaging');
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  const userId = localStorage.getItem('userId');
  if (userId) {
    getMyChallenges(userId);
  }

  const currentChallengeIds = JSON.parse(localStorage.getItem('currentChallengeIds')) || [];
  await Promise.all(
    currentChallengeIds.map(async challengeId => {
      const response = await fetch(`https://web-2-sabri.onrender.com/challenges/${challengeId}`);
      const challenge = await response.json();
      const challengeElement = createChallengeElement(challenge, true);
      document.getElementById('challenges-list').appendChild(challengeElement);
    })
  );
})

document.getElementById('create-challenge-form').addEventListener('submit', createChallenge);