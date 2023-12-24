// find => to find out single element based upon provided condition
// returns value
// const students = ["Bibek", "Binod", "Bharghav", "Dipesh", "Sagar"];

// const st = students.filter((item, index, self) => {
//   console.log(item);
//   if (item === "Sagar") {
//     return item;
//   }
// });

// console.log(st);

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

// get details of nitro laptop

// const laptop = laptopList.find((item) => {
//   if (item.name === "nitro") {
//     return item;
//   }
// });

// console.log(laptop);

const laptopList = [
  {
    name: "TUF F15",
    brand: "asus",
    price: 1044,
  },
  {
    name: "TUF F17",
    brand: "asus",
    price: 1400,
  },
  {
    name: "GF63",
    brand: "msi",
    price: 900,
  },

  {
    name: "macbook pro m3",
    brand: "apple",
    price: 1999,
  },
  {
    name: "nitro",
    brand: "acer",
    price: 800,
  },
  {
    name: "helios 300",
    brand: "acer",
    price: 1245,
  },

  {
    name: "inspiron 55",
    brand: "dell",
    price: 700,
  },
];

// find details of laptop whose price is 1999

// const requiredData = laptopList.find((item, index, self) => {
//   return item.price === 1999;
// });
// console.log(requiredData);
