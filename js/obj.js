'use strict';
console.log('obj.js file was loaded');

// Objects

let person = {
  firstName: 'James',
  lastName: 'Bond',
  age: 45,
  town: 'London',
};

// console.log('person ===', person);

// gauti objekto savybes verte
console.log(person.age);
console.log(person['age']);

// pakeisti arba sukurti savybe
person.firstName = 'Mike';
person['firstName'] = 'Jane';

console.log(this);

console.log('person ===', person);
