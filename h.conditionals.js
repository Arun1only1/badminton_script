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

// let a = 5;
// let b = 2;

// let option = "multiply";

// if (option === "add") {
//   console.log(a + b);
// } else if (option === "subtract") {
//   console.log(a - b);
// } else if (option === "multiply") {
//   console.log(a * b);
// } else if (option === "divide") {
//   console.log(a / b);
// } else if (option === "power") {
//   console.log(a ** b);
// } else if (option === "remainder") {
//   console.log(a % 2);
// } else {
//   console.log("Invalid option");
// }

// let marks = 90;

// let grade;

// if (marks >= 90) {
//   grade = "A+";
// } else if (marks >= 80) {
//   grade = "A";
// } else if (marks >= 70) {
//   grade = "B";
// } else if (marks >= 60) {
//   grade = "C";
// } else {
//   grade = "F";
// }

// console.log(grade);

// ? switch => multiple choice questions

// switch(condition){
// case 0:
// some code here
// break;
// }

// polarity of a number
// +ve, -ve ,0

// let num = 25;

// if (num > 0) {
//   console.log("+ve");
// } else if (num < 0) {
//   console.log("-ve");
// } else {
//   console.log("zero");
// }

//limitation: switch always handles cases for equality

// let day = 70;

// if (day === 1) {
//   console.log("Sunday");
// } else if (day === 2) {
//   console.log("Monday");
// } else if (day === 3) {
//   console.log("Tuesday");
// } else if (day === 4) {
//   console.log("Wednesday");
// } else if (day === 5) {
//   console.log("Thursday");
// } else if (day === 6) {
//   console.log("Friday");
// } else if (day === 7) {
//   console.log("Saturday");
// } else {
//   console.log("Invalid day number");
// }

// let day = 1;
// switch (day) {
//   case 1:
//     console.log("Sunday");
//     break;

//   case 2:
//     console.log("Monday");
//     break;
//   case 3:
//     console.log("Tuesday");
//     break;
//   case 4:
//     console.log("Wednesday");
//     break;
//   case 5:
//     console.log("Thursday");
//     break;

//   case 6:
//     console.log("Friday");
//     break;

//   case 7:
//     console.log("Saturday");
//     break;

//   default:
//     console.log("Invalid day number");
// }

// let x = 4;
// let y = 2;

// let option = "multiply";

// switch (option) {
//   case "add":
//     console.log(x + y);
//     break;

//   case "subtract":
//     console.log(x - y);
//     break;

//   case "multiply":
//     console.log(x * y);
//     break;

//   case "divide":
//     console.log(x / y);
//     break;

//   default:
//     console.log("Invalid option");
// }

// ?ternary
// ?

// syntax
// condition?true_case:false_case
// let num = 5;

// let remainder = num % 2;

// if (remainder === 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }

// remainder === 0 ? console.log("even") : console.log("odd");

// temp greater than or equals to  40 => print "Hot day" else print "Cool day"
// let temp = 30;

// if (temp >= 40) {
//   console.log("Hot day");
// } else {
//   console.log("Cool day");
// }

// temp >= 40 ? console.log("Hot day") : console.log("Cool day");

// check polarity of number using if..else , using ternary chaining

// let x = -20;

// if (x > 0) {
//   console.log("+ve");
// } else if (x < 0) {
//   console.log("-ve");
// } else {
//   console.log("zero");
// }

// x > 0 ? console.log("+ve") : x < 0 ? console.log("-ve") : console.log("zero");
