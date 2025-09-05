
let a=10;
let b=5;
console.log("Sum " ,(a+b))
console.log("Diff" ,(a-b))
console.log("mult " ,(a*b))
console.log("Div" ,(a/b))

let arr = [12, 45, 7, 23, 89];

let largest = Math.max(...arr);
let smallest = Math.min(...arr);

console.log("Largest:", largest);
console.log("Smallest:", smallest);

console.log("Ascending:", [...arr].sort((a, b) => a - b));
console.log("Descending:", [...arr].sort((a, b) => b - a));

let student = {
  name: "Rahul",
  age: 20,
  grade: "B"
};

// Add new property
student.class = "12th";

// Update grade
student.grade = "A";

// Display all info
for (let key in student) {
  console.log(key + ": " + student[key]);
}


function processArray(arr) {
  let result = arr
    .filter(num => num % 2 === 0)   // Remove odd numbers
    .map(num => num * 2)            // Multiply remaining by 2
    .reduce((sum, num) => sum + num, 0); // Sum them

  return result;
}

console.log(processArray([1, 2, 3, 4, 5, 6])); // Output: 24
