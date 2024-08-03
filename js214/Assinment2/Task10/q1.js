const strings = [
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "pear",
    "apple",
  ];


function findFreq(strings){
   
    return strings.reduce(function(dict,string){
           if(dict.hasOwnProperty(string))
                 dict[string]+=1;
           else 
                dict[string]=1;          
          return dict;
    },{})   

}  

console.log(findFreq(strings));
  