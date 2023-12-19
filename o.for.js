// for

const carBrands = ["Tesla", "BYD", "Tata", "Toyota", "Nissan"];

//? for ..of
// for (const element of carBrands) {
//   console.log(element);
// }

//? map
// returns new array

carBrands.map((item, index, array) => {
  console.log(item, index, array);
});
