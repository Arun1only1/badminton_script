// iteration
// loop => repetition

// for
// while
// do..while

// syntax
// for(initial_value;condition;increment/decrement){
// some code here
// }

// for (let i = 1; i < 3; i++) {
//   console.log(i);
// }

// 100 to 50
//  i = i+1 // i++
//  i= i-1 // i--

// for (let i = 100; i >= 50; i--) {
//   console.log(i);
// }

// infinite loop => condition is always true/ never false
// for (let i = 100; i >= 50; i = i + 1) {
//   console.log(i);
// }

// let n = 200;

// for (let i = 1; i <= n; i = i + 1) {
// let square = i ** 2;
// let square = i * i;
//   let square = Math.pow(i, 2);

//   console.log(`square of ${i} = ${square}`);
// }

// for (let i = 1; i <= 15; i = i + 1) {
//   let remainder = i % 2;

//   if (remainder === 0) {
//     console.log(`${i} is even`);
//   } else {
//     console.log(`${i} is odd`);
//   }
// }

// sum =55
// i =11
// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//   sum += i; //sum = sum + i;
// }

// console.log(sum);

// i =6
// product = 120
// condition i<=5
// let product = 1;

// for (let i = 1; i <= 5; i++) {
//   product = product * i;
// }

// console.log(product);

// WAP to print factorial of a number

// 6 => 6*5*4*3*2*1
// 3 => 3*2*1

// ------------------------------------------------------------------------

// while

// ?syntax
// initial_value
// while(condition){
// some code here

// increment/decrement
// }

// let i = 1;
// while (i <= 10) {
//   console.log(i);

//   i++;
// }

// let i = 100;

// while (i >= 50) {
//   console.log(i);

//   i--;
// }

// let i = 30;

// while (i <= 100) {
//   console.log(i);

//   let remainder = i % 2;

//   if (remainder === 0) {
//     console.log(`${i} is even`);
//   } else {
//     console.log(`${i} is odd`);
//   }

//   i = i + 1;
// }

// --------------------------------------------------------
// do..while
// code executes at least one time despite the condition

// ?syntax
// initial_value

// do{
// code here

// increment/decrement
// }while(condition)

let i = 1;

do {
  console.log(i);

  i++;
} while (i <= -100);
