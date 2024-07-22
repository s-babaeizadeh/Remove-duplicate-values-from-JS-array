// Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
// cannot use additional data structures?

// let char = "aahbnnncdeehhhh";

// function removeDuplicateChar(char) {
//   return [...new Set(char)].join("");
// }

// console.log(removeDuplicateChar(char));

//////////////////

// let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

// function removeDuplicateChar(char) {
//   return [...new Set(char)];
// }

// console.log(removeDuplicateChar(arr));

/////////////////////////

// let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

// function removeDuplication(arr) {
//   return arr.filter((item, index) => arr.indexOf(item) === index);
// }

// console.log(removeDuplication(arr));

//////////////////
let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

function removeDuplicates(arr) {
  let unique = [];
  for (i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
    }
  }
  return unique;
}
console.log(removeDuplicates(arr));

////////////
let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

for (i = 0; i < arr.length; i++) {
  console.log(arr.indexOf(arr[i]));
}
