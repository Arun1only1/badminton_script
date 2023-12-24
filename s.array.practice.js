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

// remove apple laptops from the array
// const newLaptopList = laptopList.filter((item) => item.brand !== "apple");

// console.log(newLaptopList);

// decrease price of asus  laptops by 15 percent
// const decreasedLaptopList = laptopList.map((item, index, self) => {
//   if (item.brand === "asus") {
//     let newPrice = 0.85 * item.price;

//     return { ...item, price: newPrice };
//   }

//   return item;
// });

// console.log(decreasedLaptopList);

// solution 2
// const decreasedLaptopList2 = laptopList.map((item) =>
//   item.brand === "asus" ? { ...item, price: 0.85 * item.price } : item
// );

// console.log({ decreasedLaptopList2 });

// change "acer" brand name to "acerT"

// const laptopList3 = laptopList.map((item) => {
//   if (item.brand === "acer") {
//     return { ...item, brand: "acerT" };
//   } else {
//     return { ...item };
//   }
// });

// console.log(laptopList3);
