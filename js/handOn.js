'use strict';
console.log('handOn.js file was loaded');

function createElement(type, className, text) {
  const element = document.createElement(type);
  if (className) {
    element.classList.add(className);
  }
  if (text) {
    element.textContent = text;
  }
  return element;
}

// taikomes i elementus kuriu reikia
const formEl = document.getElementById('main');
const firstNameInputEl = document.getElementById('firstName');
const lastNameInputEl = document.getElementById('lastName');
// console.log(firstNameInputEl, lastNameInputEl, formEl);

// funkcijos vykdymui
// jsdoc
/**
 * Creates new user object
 * @param {SubmitEvent} event
 */
function handleNewUser(event) {
  event.preventDefault();
  console.log('forma pateikta');
  const firstName = firstNameInputEl.value;
  const lastName = lastNameInputEl.value;
  console.log('firstName ===', firstName);
  console.log('lastName ===', lastName);
  // sukurti naujo vartotojo objeka su visa jo uzpildyta informacija
  // iskonsolinti
}

// dedam event listenerius
formEl.addEventListener('submit', handleNewUser);
