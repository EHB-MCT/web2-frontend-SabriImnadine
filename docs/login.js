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

/***/ "./src/login.js":
/*!**********************!*\
  !*** ./src/login.js ***!
  \**********************/
/***/ (() => {

eval("document.getElementById('loginForm').addEventListener('submit', loginUser);\r\n\r\nfunction loginUser(e) {\r\n  e.preventDefault();\r\n\r\n  const email = document.getElementById('loginEmail').value;\r\n  const password = document.getElementById('loginPassword').value;\r\n\r\n  const loginData = {\r\n    email,\r\n    password\r\n  };\r\n\r\n  fetch('https://web-2-sabri.onrender.com/login', {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json'\r\n    },\r\n    body: JSON.stringify(loginData)\r\n  })\r\n    .then(response => response.json())\r\n    .then(data => {\r\n      const loginMessage = document.getElementById('loginMessage');\r\n      const messageText = data.message.trim();\r\n\r\n      if (messageText === 'Succesvolle verbinding') {\r\n        loginMessage.textContent = 'Je bent succesvol ingelogd!';\r\n        loginMessage.classList.add('green');\r\n      } else {\r\n        loginMessage.textContent = 'Fout bij het verbinden : ' + data.message;\r\n        loginMessage.classList.add('red');\r\n      }\r\n    })\r\n    .catch(error => {\r\n      console.error('Fout bij het verbinden :', error);\r\n      console.error('Fout bij het verbinden');\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://test/./src/login.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/login.js"]();
/******/ 	
/******/ })()
;