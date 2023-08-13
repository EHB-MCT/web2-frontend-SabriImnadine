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

/***/ "./src/register.js":
/*!*************************!*\
  !*** ./src/register.js ***!
  \*************************/
/***/ (() => {

eval("document.getElementById('registerForm').addEventListener('submit', registerUser);\r\n\r\nfunction registerUser(e) {\r\n  e.preventDefault();\r\n\r\n  const username = document.getElementById('registerUsername').value;\r\n  const email = document.getElementById('registerEmail').value;\r\n  const password = document.getElementById('registerPassword').value;\r\n\r\n  const userData = {\r\n    username,\r\n    email,\r\n    password\r\n  };\r\n\r\n  fetch('https://web-2-sabri.onrender.com/register', {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json'\r\n    },\r\n    body: JSON.stringify(userData)\r\n  })\r\n    .then(response => response.json())\r\n    .then(data => {\r\n      const registerMessage = document.getElementById('registerMessage');\r\n      if (data.message === 'succesvolle registratie') {\r\n        localStorage.setItem('userId', data.userId)\r\n        registerMessage.textContent = 'Je bent succesvol geregistreerd!';\r\n        registerMessage.classList.add('green');\r\n      } else {\r\n        registerMessage.textContent = 'Fout bij inschrijving : ' + data.message;\r\n        registerMessage.classList.add('red');\r\n      }\r\n    })\r\n    .catch(error => {\r\n      console.error('Error bij inschrijving :', error);\r\n      console.error('Error bij inschrijving');\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://test/./src/register.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/register.js"]();
/******/ 	
/******/ })()
;