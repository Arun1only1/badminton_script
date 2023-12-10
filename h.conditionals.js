// conditionals =>

// let x = 2;
// let y = 5;

// console.log(x + y);

// if..else

// ?syntax
// if(condition){
// some code here
// }

// let day = "Sunday";

// if (false) {
//   console.log(`Today is ${day}`);
// }

// ?syntax
// if(condition){
// some code here
// }else{
// some code here
// }

// if (false) {
//   console.log("Hi");
// } else {
//   console.log("Hello");
// }

//? else ..if
// positive,negative, zero
// let num = 75;

// if (num > 0) {
//   console.log("+ve");
// } else if (num < 0) {
//   console.log("-ve");
// } else {
//   console.log("zero");
// }

// ?odd or even
// // take a number
// let num = 72;

// // calculate remainder by dividing by 2
// let remainder = num % 2;

// // if remainder is equal to zero, then the number is even
// if (remainder === 0) {
//   console.log(`${num} is even.`);
// } else {
//   // if remainder is not equal to zero, then the number is odd
//   console.log(`${num} is odd.`);
// }

// ? check if a variable is number or not

// let x = 25;

// const type = typeof x;

// if (type === "number") {
//   console.log(`${x} is a number.`);
// } else {
//   console.log("Not a number");
// }

// ? largest of two numbers
// let m = 100;
// let n = 125;

// if (m > n) {
//   console.log("m is greater");
// } else {
//   console.log("n is greater");
// }

// ? largest of three numbers
// let x = 5;
// let y = 7;
// let z = 10;

// if (x > y && x > z) {
//   console.log("x is greatest");
// } else if (y > x && y > z) {
//   console.log("y is greatest");
// } else {
//   console.log("z is greatest");
// }

let a = 5;
let b = 2;

let option = "multiply";

if (option === "add") {
  console.log(a + b);
} else if (option === "subtract") {
  console.log(a - b);
} else if (option === "multiply") {
  console.log(a * b);
} else if (option === "divide") {
  console.log(a / b);
} else if (option === "power") {
  console.log(a ** b);
} else if (option === "remainder") {
  console.log(a % 2);
} else {
  console.log("Invalid option");
}
