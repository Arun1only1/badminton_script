// objects
// key value pair in js
// complex data structure
// grouping of data with similar characteristic

// let x = {};

// let firstName = "Pratik";
// let lastName = "Prajapati";
// let address = "Bhaktapur";
// let phoneNumber = "9852135232";
// let email = "pratik@gmail.com";
// let isMarried = false;
// let isGraduated = null;

// let firstNameForManish = "Manish";
// let lastNameForManish = "Pun Magar";
// let age = 21;
// let gender = "male";

// let firstNameForSuraj = "suraj";

// let student1 = {
//   firstName: "Pratik",
//   lastName: "Prajapati",
//   address: "Bkt",
//   email: "pratik@gmail.com",
//   contact: "9854213222",
//   isMarried: false,
//   isGraduated: null,
//   age: 21,
// };

// let student2 = {
//   firstName: "Manish",
//   lastName: "Pun Magar",
//   address: "Ktm",
//   email: "manish@gmail.com",
//   contact: "983123222",
//   isMarried: false,
//   isGraduated: null,
//   age: 22,
// };

// console.log(student2);
// console.log(typeof student2);

// CRUD
// C => Create/Add
// R => Read/ Retrieve
// U => Update/Edit
// D => Delete/Remove

// ? dot operator(.)
// ? square operator([])

// ?Read
// console.log(student2.email);
// console.log(student2["email"]);

//? Create/Add
// student2.laptop = "Mac";
// student2["college"] = "LBEF";
// console.log(student2);

// ? Delete/Remove
// delete student2.contact;
// delete student2["age"];
// console.log(student2);

// ?Update (Upsert=> Update or Insert)
// student2.address = "Biratnagar";
// console.log(student2);
// student2.postalCode = "44600";
// student2["firstName"] = "Manisha";
// console.log(student2);

// ?assignment
// 2 solution
// const myHouseDetails = {
//   numberOfRooms: 9,
//   numberOfMembers: 6,
//   color: "green",
//   builtYear: 2011,
//   numberOfStorey: 3,
// };

// delete myHouseDetails.numberOfMembers;
// delete myHouseDetails["numberOfMembers"];

// myHouseDetails.numberOfRooms += 5;
// myHouseDetails["estimatedPrice"] = "3crore";

// “I have a green coloured house
//   with 9 rooms where 10 people are  living.
//  The house is 3 storey and was built in 2011
//   with an estimated budget of 2 crores.”

// console.log(
//   `I have a ${myHouseDetails.color} coloured house with ${myHouseDetails.numberOfRooms} rooms where ${myHouseDetails.numberOfMembers} members live together.`
// );

// const studentDetails = {
//   firstName: "Suraj",
//   lastName: "Thapa",
//   address: {
//     temporary: {
//       addressLine1: "baneswor",
//       addressLine2: "chabil",
//     },
//     permanent: "biratnagar",
//   },
// };
// console.log(studentDetails.address.temporary.addressLine1);

// console.log(studentDetails.address.temporary);
// console.log(studentDetails["address"]["temporary"]);
// console.log(studentDetails.address["temporary"]);

// studentDetails.address.temporary = "lalitpur";

// delete studentDetails.address.permanent;

// console.log(studentDetails);

//? Create an object named myFavoutireFood
//?  and add any three properties on it.
//? Create another object by copying this object.

// let x = 5;
// let y = x; //value copy
// x = 7;
// y = 99;
// console.log(x);
// x = 75;

// let collegeDetails = {
//   name: "ABC",
//   address: "Pokhara",
// };

// shallow copy
// let newCollegeDetails = collegeDetails;

// newCollegeDetails.name = "XYZ";
// console.log(collegeDetails);

// spread operator
// let newCollegeDetails = { ...collegeDetails };
// newCollegeDetails.name = "XYZ";
// console.log(collegeDetails);

// let universityDetails = {
//   name: "TU",
//   address: {
//     temporary: "Pokhara",
//     permanent: "Kathmandu",
//   },
// };

// shallow copy
// spread operator copies value of primitive data types
// spread operator copies address of non-primitive data types
// let newUniversityDetails = { ...universityDetails };

// newUniversityDetails.name = "PU";
// newUniversityDetails.address.temporary = "Biratnagar";
// console.log(universityDetails);

// structuredClone => deep copy
// let universityDetails = {
//   name: "TU",
//   address: {
//     temporary: "Pokhara",
//     permanent: "Kathmandu",
//   },
// };

// let newUniversityDetails = structuredClone(universityDetails);
// universityDetails.address.temporary = "A";
// console.log(newUniversityDetails);

// const myFavoriteFood = {
//   name: "Momo",
//   variant: {
//     type1: "chicken",
//     type2: "buff",
//     type3: "veg",
//   },
//   price: 160,
//   place: "Sweet cave",
// };

// console.log(myFavoriteFood);

// // const anotherFood = { ...myFavoriteFood };
// const anotherFood = structuredClone(myFavoriteFood);
