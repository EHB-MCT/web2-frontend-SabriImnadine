/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/play-challenge.js":
/*!*******************************!*\
  !*** ./src/play-challenge.js ***!
  \*******************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', async () => {\r\n    const urlParams = new URLSearchParams(window.location.search);\r\n    const challengeId = urlParams.get('challengeId');\r\n    \r\n    if (challengeId) {\r\n        try {\r\n            const response = await fetch(`https://web-2-sabri.onrender.com/challenges/${challengeId}`);\r\n            const challenge = await response.json();\r\n\r\n            const challengeDescription = document.getElementById('challenge-description');\r\n            const challengeImage = document.getElementById('challenge-image');\r\n            const challengeDataset = document.getElementById('challenge-dataset');\r\n            const resultInput = document.getElementById('result-input');\r\n            const submitResultButton = document.getElementById('submit-result');\r\n            const resultMessage = document.getElementById('result-message');\r\n\r\n            challengeDescription.textContent = `Description: ${challenge.description}`;\r\n            challengeImage.src = challenge.picture;\r\n            challengeDataset.textContent = `Dataset: ${challenge.dataset}`;\r\n\r\n            submitResultButton.addEventListener('click', async () => {\r\n                const result = resultInput.value;\r\n                try {\r\n                    const resultResponse = await fetch(`https://web-2-sabri.onrender.com/checkResult/${challengeId}`, {\r\n                        method: 'POST',\r\n                        headers: {\r\n                            'Content-Type': 'application/json'\r\n                        },\r\n                        body: JSON.stringify({ result })\r\n                    });\r\n\r\n                    const { message } = await resultResponse.json();\r\n                    if (resultResponse.ok) {\r\n                      resultMessage.textContent = message;\r\n                      resultMessage.classList.remove('red');\r\n                      resultMessage.classList.add('green');\r\n                    } else {\r\n                      resultMessage.textContent = 'Challenge failed';\r\n                      resultMessage.classList.remove('green');\r\n                      resultMessage.classList.add('red');\r\n                    }\r\n                  } catch (error) {\r\n                    console.error('Error submitting result:', error);\r\n                    con('An error occurred while submitting the result');\r\n                  }\r\n                });\r\n\r\n        } catch (error) {\r\n            console.error('Error fetching challenge details:', error);\r\n            alert('An error occurred while fetching challenge details');\r\n        }\r\n    } else {\r\n        console.error('Challenge ID not provided');\r\n        alert('Challenge ID not provided');\r\n    }\r\n\r\n    const backButton = document.getElementById('back-button');\r\n    backButton.addEventListener('click', () => {\r\n        window.location.href = 'home.html';\r\n    });\r\n\r\n});\r\n\n\n//# sourceURL=webpack://test/./src/play-challenge.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/play-challenge.js"]();
/******/ 	
/******/ })()
;