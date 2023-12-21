// filter => to filter out certain values based upon condition
// returns new array
// and there is greater possibility of change in size of returned array

// let numList = [1, -1, 55, 0, -71, 60, -32, 11, -45];

// const newList = numList.filter((item, index, self) => {
//   return item > 0;
// });

// console.log(newList);

// const scoreList = [25, 11, 39, 72, 55, 63, 8, 15, 24, 27, 32, 31, 55];
// passed score=> scores greater than or equals to 32

// const newScoreList = scoreList.filter((item, index, self) => {
//   return item >= 32;
// });

// console.log(newScoreList);

// const newScores = scoreList.filter((item, index, self) => {
//   return item !== 55;
// });

// console.log(newScores);

let laptopList = [
  {
    name: "TUF F15",
    brand: "asus",
    price: 1044,
  },
  {
    name: "GF63",
    brand: "msi",
    price: 900,
  },
  {
    name: "macbook air m2",
    brand: "apple",
    price: 1400,
  },
  {
    name: "nitro",
    brand: "acer",
    price: 800,
  },

  {
    name: "inspiron 55",
    brand: "dell",
    price: 700,
  },
];

// ? due to sudden rise in tax, add 7% to the price of each laptop

// const newLaptopList = laptopList.map((item, index, self) => {
//   let newPrice = item.price + (7 / 100) * item.price;

//   item.price = newPrice;

//   return item;

//   //   return {  ...item,price: newPrice}
// });

// const newLaptopList = laptopList.map((item, index, self) => ({
//   ...item,
//   price: item.price + (7 / 100) * item.price,
// }));
// console.log(newLaptopList);
