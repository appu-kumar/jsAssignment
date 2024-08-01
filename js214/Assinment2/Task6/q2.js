// 2. Filtering Data:
// o "Ask the user for a list of integers separated by commas. Create a function that uses the filter HOF to extract even numbers from the input and display
// them."
// o Example Input: "1, 2, 3, 4, 5"
// o Expected Output: "[2, 4]"

let arr=[1,2,3,4,5];
let ans=arr.filter(function(ele){
    return ele%2==0    
})
console.log(ans)