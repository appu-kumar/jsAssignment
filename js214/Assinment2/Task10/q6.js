
function print(sentences){
      sentences.forEach(function(sentence,idx){
          let words=sentence.split(" ");
          console.log(`sentence ${idx+1} contains ${words.length} words`)
      })
}
const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "She sells seashells by the seashore.",
    "I have a dream that one day this nation will rise up.",
    "To be or not to be, that is the question.",
    "In the beginning, God created the heavens and the earth.",
  ];

  
//   output should look like this.
// "sentence 1 contains 9 words."


print(sentences);