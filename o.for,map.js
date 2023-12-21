// for

// const carBrands = ["Tesla", "BYD", "Tata", "Toyota", "Nissan"];

//? for ..of
// for (const element of carBrands) {
//   console.log(element);
// }

//? map
// returns new array
//  does not change original array
// original array and returned array are of same size

// to change elements

// let prices = [100, 250, 100, 500, 450];

// const newPriceList = prices.map((item, index, array) => {
//   return item - 10;
// });

// console.log(newPriceList);

// score :400
// let newScore =  score +(10/100)*score
// newScore =  score(1+0.1)
// newScore =  score *1.1

let scores = [400, 450, 777, 521, 666, 232];
// every score must be updated by 10 percent and return new score
// let newScore = item + 0.1 * item;
//  let newScore = (item * 1.1).toFixed(2);

// const newScoreList = scores.map((item) => item + 0.1 * item);

// console.log(newScoreList);

// let numList = [21, 72, 51, 6, 4, 30, 11, 17, 13, 16];
// if number is even, add 5 in it
// if number is odd,  subtract 3 on it

// const newNumList = numList.map((item, index, array) => {
//   let remainder = item % 2;

//   let newItem;

//   if (remainder === 0) {
//     //even case
//     newItem = item + 5;
//   } else {
//     // odd case
//     newItem = item - 3;
//   }

//   return newItem;
// });

// console.log(newNumList);
// let fullName = "SABIN";
// console.log(fullName.toLowerCase());

// const countryNames = ["Nepal", "BanglaDesh", "PaKistan", "BhutaN", "MongoLia"];
// // convert country names to lowercase

// const newList = countryNames.map((item) => item.toLowerCase());

// console.log(newList);

// const getSum = (x, y) => x + y;

// const result = getSum(2, 3);
// console.log(result);
