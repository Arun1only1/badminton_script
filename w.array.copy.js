// const scores = [32, 35, 45];

// const newScores = scores; // reference copy

// newScores.push(77);

// console.log(scores);

// const newScores = [...scores]; //copies value

// newScores.push(85);

// console.log(scores);

// const newScores = structuredClone(scores);
// newScores.push(95);
// console.log(scores);

// const students = [
//   {
//     name: "Deepesh",
//     age: 22,
//   },
//   {
//     name: "Bharghav",
//     age: 22,
//   },
// ];

// shallow copy
// reference/address copy
// const newStudents = students;

// newStudents[1].age = 23;

// spread operator
// value copy
// shallow
// if there is object, it copies reference
// const newStudents = [...students];

// newStudents[0].age = 25;
// console.log(students);

// structuredClone
// deep copy
// const newStudents = structuredClone(students);

// newStudents[0].age = 24;
// console.log(students);
