const numbers = [1, 2, 3, 4, 5, 7];
// print the sum of the square of the odd numbers
// 84
console.log(numbers.filter((number)=> number%2==1).map((odd)=> odd*odd).reduce((sum,square)=> sum+square));             
