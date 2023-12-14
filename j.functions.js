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

// function calculatePerimeter(radius) {
//   const PI = 3.1415;

//   let perimeter = 2 * PI * radius;

//   return perimeter;
// }

// const result = calculatePerimeter(3);
// console.log(result);

// Write a function that takes “add”/“subtract”/”multiply”/”divide” and
//  two numbers as parameters and perform appropriate operations.

// function calculator(option, x, y) {
//   if (option === "add") {
//     return x + y;
//   } else if (option === "subtract") {
//     return x - y;
//   } else if (option === "multiply") {
//     return x * y;
//   } else if (option === "divide") {
//     return x / y;
//   } else {
//     console.log("Invalid option");
//   }
// }

// const result = calculator("da", 10, 5);
// console.log(result);

// function calculateSum(num) {
//   let sum = 0;
//   for (let i = 0; i <= 10; i++) {
//     sum = sum + i;
//   }

//   return sum;
// }

// const result = calculateSum(10);
// console.log(result);

//? arrow function
// ? store function as variable/constant

// const sayHello = () => {
//   console.log("Hello");
// };

// sayHello();

// WAF to convert rupees to paisa

// const convertRsToPaisa = (rupees) => rupees * 100;

// const result = convertRsToPaisa(6);
// console.log(result);

// WAF that converts temperature in Celsius into Fahrenheit.
// F = C * (9/5) + 32

// ?factorial of number

// const getFactorial = (num) => {
//   let product = 1;

//   for (let i = num; i >= 1; i = i - 1) {
//     product = product * i;
//   }

//   return product;
// };

// const result = getFactorial(5);
// console.log(result);

// WAF to take first name and last name as parameter and return full name

const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;

const result = getFullName("Deepesh", "Lama");
console.log(result);
