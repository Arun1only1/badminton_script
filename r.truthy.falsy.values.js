// ?falsy
// 0,-0, false,undefined,null,NaN,""

// truthy
// all values except falsy values
// {},[]
// const personDetails = {};
const personDetails = null;

if (personDetails) {
  console.log("Hi");
}
