// hof => Higher Order Function

// 1.callback function
// 2. function returning function (closure)

// ? callback function
// ? function which is passed as an argument to another function

// const getProduct = (x, y, func) => {
//   let product = x * y;
//   func();

//   return product;
// };

// const res = getProduct(5, 6, () => {
//   console.log("Hello");
// });
// console.log(res);

// const getRemainder = (a, b, callback) => {
//   const remainder = a % b;

//   callback(remainder);
// };

// getRemainder(10, 3, (data) => {
//   console.log(data);
// });

// const data = [1, 5, 7];

// data.map((item, index, self) => {
//   console.log(item);
// });

// ? function returning function

// const calculateDivision = (x, y) => {
//   // perform division
//   const performDivision = () => {
//     const result = x / y;

//     return result;
//   };

//   return performDivision;
// };

// // const res = calculateDivision(10, 5);
// // const divideResult = res();

// const divideResult = calculateDivision(40, 5)();
// console.log(divideResult);

// const getSum = (x) => (y) => x + y;

// const getSum = (x) => {
//   const doSum = (y) => {
//     const sum = x + y;

//     return sum;
//   };

//   return doSum;
// };

// const doSum = getSum(10);

// const sum = doSum(5);

// console.log(sum);

// => closure
// => function + lexical environment

// let x = 10;

// const getSum = () => {
//   const adder = (y) => {
//     return x + y;
//   };

//   return adder;
// };

// const adder = getSum();

// x = 25;

// const result = adder(20);

// x = 100;

// console.log(result);
