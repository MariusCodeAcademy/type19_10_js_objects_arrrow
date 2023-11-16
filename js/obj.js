'use strict';
console.log('obj.js file was loaded');

// Objects

let person = {
  firstName: 'James',
  lastName: 'Bond',
  age: 45,
  town: 'London',
  greet: function () {
    let rez = `${this.firstName} ${this.lastName}`;
    console.log(rez);
    console.log(this);
  },
};
let person2 = {
  firstName: 'Bob',
  lastName: 'Marley',
  age: 55,
  town: 'New York',
  greet: () => {
    let rez = `${this.firstName} ${this.lastName}`;
    console.log(rez);
    console.log('this', this);
  },
};

// console.log('person ===', person);

// gauti objekto savybes verte
console.log(person.age);
console.log(person['age']);

// pakeisti arba sukurti savybe
person.firstName = 'Mike';
person['firstName'] = 'Jane';

// console.log(this);

console.log('person ===', person);

person.greet();
person2.greet();

let ageTown = function () {
  let rez = `${this.age} is from ${this.town}`;
  console.log('rez ===', rez);
};

person.townAge = ageTown;
person2.townAge = ageTown;
person.townAge();
person2.townAge();
