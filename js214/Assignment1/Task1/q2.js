/* 2. Cloning objects */
const person = { name: "John", age: 30, address: "123 Main St" };

function cloningObjects(person){
const newObj = {
...person
}
return newObj
}

console.log(cloningObjects(person)); // Output: { name: "John", age: 30, address: "123 Main St" }

