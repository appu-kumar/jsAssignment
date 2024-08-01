// 3. Reducing Arrays:
// o "Prompt the user for a series of numbers separated by semicolons. Implement a function that uses the reduce HOF to calculate the sum of the numbers
// and display the result."
// o Example Input: "5; 10; 15"
// o Expected Output: "30"


let arr=[5,10,15]

let maxval=arr.reduce(function(acc,ele){
       return acc=acc+ele;
},0)

console.log(maxval)
