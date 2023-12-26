// sort => arrange data either ascending or descending order

// ?text
// text sort => mimics dictionary order
// const students = ["Bibek", "Suraj", "Manish", "Sagar"];

// ascending sort
// students.sort();

// descending sort
// students.sort().reverse();

// console.log(students);

// ? numeric sort

// const scores = [1, 2, 20, 11, 100, 3, 30, 40];

// // ascending sort
// scores.sort((a, b) => {
//   return a - b;
// });

// // descending sort
// scores.sort((a, b) => {
//   return b - a;
// });

// console.log(scores);

// const laptopList = [
//   {
//     name: "TUF F15",
//     brand: "asus",
//     price: 1044,
//   },
//   {
//     name: "TUF F17",
//     brand: "asus",
//     price: 1400,
//   },
//   {
//     name: "GF63",
//     brand: "msi",
//     price: 900,
//   },

//   {
//     name: "macbook pro m3",
//     brand: "apple",
//     price: 1999,
//   },
//   {
//     name: "nitro",
//     brand: "acer",
//     price: 800,
//   },
//   {
//     name: "helios 300",
//     brand: "acer",
//     price: 1245,
//   },

//   {
//     name: "inspiron 55",
//     brand: "dell",
//     price: 700,
//   },
// ];

// sort laptops from price field in ascending order

// laptopList.sort((a, b) => a.price - b.price);

// console.log(laptopList);

// ? some and every result in true or false
// ?some => returns true if at least one item satisfies condition

// const age = [77, 28, 25, 31, 8];

// const res = age.some((item) => {
//   return item >= 18;
// });
// console.log(res);

// const res = age.every((item, index, self) => {
//   return item.age >= 18;
// });

// console.log(res);

// map, filter returns array
// forEach returns  undefined

// let allAdult = true;
// age.forEach((item, index, self) => {
//   if (item < 18) {
//     allAdult = false;
//   }
// });

// allAdult ? console.log("All adult") : console.log("All not adult");

// let scores = [32, 56, 77, 68, 43, 38];

// calculate total Score
// let total =
//   scores[0] + scores[1] + scores[2] + scores[3] + scores[4] + scores[5];

// let sum = 0; //88
// scores.forEach((item, index, self) => {
//   sum = sum + item;
// });

// console.log(sum);

// reduce => accumulates value
// let scores = [32, 56, 77, 68, 43, 38];

// const result = scores.reduce((sum, item, index, self) => {
//   sum = sum + item;

//   return sum;
// }, 0);

// console.log(result);

// let prices = [25, 100, 150, 87, 225, 550];

// const result = prices.reduce((totalProduct, item) => totalProduct * item, 1);

// console.log(result);
// ?map
// ?filter
// ?find
// ?push
// ?pop
