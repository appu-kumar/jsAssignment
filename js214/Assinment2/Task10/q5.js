
function swap(string){
    string=string.split("");   
    let i=0;
    let j=string.length;
    while(i<=j){
        let temp=string[i];
        string[i]=string[j];
        string[j]=temp;
        i++;
        j--;
    }
    // ['a','r','y','a','b','h','a','t']
    return string.join("");  
}
function swapWord(strings){
     return strings.map(function(string){
            return swap(string);     
     })
}
const strings = [
    "Hello",
    "world",
    "this",
    "is",
    "an",
    "example",
    "array",
    "of",
    "strings",
  ];

console.log(swapWord(strings));  
  