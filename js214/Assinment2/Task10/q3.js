
function ispalindrom(word){
     let i=0;
     let j=word.length-1;
     while(i<=j){
      if(word[i]!=word[j])
           return false;
       i++;
       j--;   
     }
     return true;
}
function findPalindroms(words){
       let ans=words.filter((word)=>{
           return ispalindrom(word)==true;
       })
       return ans;
}
const words = [
    "racecar",
    "hello",
    "deified",
    "world",
    "level",
    "programming",
    "radar",
    "civic",
    "javascript",
  ];

  
// find the palindromic strings
//["racecar", "deified", "level", "radar", "civic"];

console.log(findPalindroms(words));