'use strict';
console.log('funcExpArr.js file was loaded');

// Function declaration
sumD(15, 10);
function sumD(sk1, sk2) {
  console.log('sumD', this);
  let sum = sk1 + sk2;
  console.log(`${sk1} + ${sk2} = ${sum}`);
  return sum;
}
let rezD = sumD(5, 10);
console.log('rezD ===', rezD);

// Function expression

// const fnName = function() {}
// sumExpress(15, 10);
let sumExpress = function (sk1, sk2) {
  console.log('sumExpress', this);
  let sum = sk1 + sk2;
  console.log(`${sk1} + ${sk2} = ${sum}`);
  return sum;
};

let rezE = sumExpress(5, 10);
console.log('rezE ===', rezE);

// Arrow fn
let sumArrow = (sk1, sk2) => {
  console.log('sumArrow', this);
  let sum = sk1 + sk2;
  console.log(`${sk1} + ${sk2} = ${sum}`);
  return sum;
};
let rezA = sumArrow(7, 8);
console.log('rezA ===', rezA);

let sumArrShorter = (sk1, sk2) => {
  return sk1 + sk2;
};
let sumArrShort = (sk1, sk2) => sk1 + sk2;

console.log(sumArrShort(7, 9));
