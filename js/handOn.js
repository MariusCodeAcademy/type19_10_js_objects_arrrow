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
const ageInputEl = document.getElementById('age');
const townInputEl = document.getElementById('town');
const ulListEl = document.getElementById('persons-list');
// console.log(firstNameInputEl, lastNameInputEl, formEl);

// funkcijos vykdymui
function getNewObjFromForm() {
  const newPerson = {};
  newPerson.firstName = firstNameInputEl.value;
  newPerson.lastName = lastNameInputEl.value;
  newPerson.age = ageInputEl.value;
  newPerson.town = townInputEl.value;
  return newPerson;
  // const firstName = firstNameInputEl.value;
  // const lastName = lastNameInputEl.value;
  // const age = ageInputEl.value;
  // const town = townInputEl.value;
  // const newPersonLt = {
  //   vardas: firstName,
  //   pavarde: lastName,
  //   amzius: age,
  //   miestas: town,
  // };
  // console.log('newPersonLt ===', newPersonLt);
  // const newPerson = { firstName, lastName, age, town };
}

// jsdoc
/**
 * Creates new user object
 * @param {SubmitEvent} event
 */
function handleNewUser(event) {
  event.preventDefault();
  console.log('forma pateikta');

  const newPerson = getNewObjFromForm();

  console.log('newPerson ===', newPerson);
  // isvalyti formos inputus
  formEl.reset();

  addElToList(newPerson);
}

function addElToList(newPersonObj) {
  // sukurti ir ideti el
  // sukurti html rema
  // sudeti reikmes
  let liHtml = `
    <li class="column column-33">
      <h3>${newPersonObj.firstName} ${newPersonObj.lastName}</h3>
      <p>${newPersonObj.age} years old</p>
      <p><e>Lives in ${newPersonObj.town}</e></p>
    </li>
  `;
  console.log('liHtml ===', liHtml);
  // patalpinti i ul
  // ulListEl.innerHTML += liHtml;
  ulListEl.insertAdjacentHTML('afterbegin', liHtml);
}

// dedam event listenerius
formEl.addEventListener('submit', handleNewUser);
