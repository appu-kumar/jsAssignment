/* 1. Combining Arrays: */

const fruits = ["apple", "banana", "orange"];
const vegetables = ["carrot", "broccoli", "spinach"];

 function combiningArrays(fruits, vegetables){
 const groceries = [...fruits, ...vegetables]
 return groceries
 }

console.log(combiningArrays(fruits, vegetables)); // Output: [ 'apple', 'banana', 'orange', 'carrot', 'broccoli', 'spinach' ]
