'use strict';
console.log('funcExpArr.js file was loaded');

// Function declaration

function sumD(sk1, sk2) {
  let sum = sk1 + sk2;
  console.log(`${sk1} + ${sk2} = ${sum}`);
  return sum;
}
let rezD = sumD(5, 10);
console.log('rezD ===', rezD);

// Function expression

let sumExpress = '';
