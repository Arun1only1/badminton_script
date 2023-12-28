// promise => something that happens in future
// tasks that takes time

// ? states
// pending
// success or error

// callback

// const getSum = (x, y, callback) => {
//   let error = true;

//   setTimeout(() => {
//     // calculate sum
//     let sum = x + y;

//     // callback(null, sum);

//     callback("error aayo", null);
//   }, 5000);
// };

// getSum(2, 3, (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });

// promise

// const promise = new Promise((resolve, reject) => {
//   let error = false;
//   setTimeout(() => {
//     let sum = 20 + 30;

//     if (error) {
//       reject("Error aayo"); // error case handle => reject
//     } else {
//       resolve(sum); //success case handle => resolve
//     }
//   }, 5000);
// });

// to resolve promise => then and catch

// promise
//   .then((data) => {
//     console.log(data);

//   })
//   .catch((error) => {
//     console.log(error);
//   });

// async function resolvePromise() {
//   try {
//     const data = await promise;

//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// resolvePromise();

// try catch
// error handle
// const firstName = "Ram";

// try {
//   firstName = "Hari";
// } catch (error) {
//   console.log(error.message);
// }

// console.log("Hi");
// console.log("Good morning");

async function logMovies() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    console.log(posts);
  } catch (error) {
    console.log(error.message);
  }
}

logMovies();
console.log("Hi");

console.log(2 + 3);

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
