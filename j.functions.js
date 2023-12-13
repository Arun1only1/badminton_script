// ?functions
// group of code combined together to achieve specific goal
// single point of failure
// code reusability

// let num = 5;

// let remainder = num % 2;

// remainder === 0 ? console.log("even") : console.log("odd");

// syntax
// function functionName(){
// some code here
// }

// define or declare a function
// function getSum(x, y) {
//   let sum = x + y;

//   console.log(sum);
// }

// getSum(5, 9);

// getSum(100, 500); //call a function /invoke a function

// function calculateProduct(a, b, c) {
//   let product = a * b * c;

//   console.log(product);

//   return product;
// }

// const result = calculateProduct(5, 6, 3);
// console.log(result);

// console.log(calculateProduct(1, 6, 7));

// odd or even

// function checkOddOrEven(num) {
//   let remainder = num % 2;

//   let result;
//   if (remainder === 0) {
//     result = "even";
//   } else {
//     result = "odd";
//   }

//   return result;
// }

// const result = checkOddOrEven(26);
// console.log(result);

// function printNumbers(num) {
//   for (let i = 0; i <= num; i++) {
//     console.log(i);
//   }
// }

// printNumbers(77);

//? WAF which takes radius as input and calculates perimeter of circle
// ?Perimeter of circle = 2 *PI *r, PI=3.1415

function calculatePerimeter(radius) {
  const PI = 3.1415;

  let perimeter = 2 * PI * radius;

  return perimeter;
}

const result = calculatePerimeter(3);
console.log(result);
