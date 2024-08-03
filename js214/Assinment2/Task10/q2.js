

function sum(numbers){
     return numbers.reduce(function(acc,number){
          if(number%5==0 || number%3==0){
             return acc+number;
          }
          return acc;
     },0)
}
const numbers = [7, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];
//1817;  find the numbers that r multiple of either 5 or 3
console.log(sum(numbers));


