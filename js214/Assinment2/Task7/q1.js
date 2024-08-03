
function calculateFinalGrades(students){
     let ans=students.filter(function(student){
       let {scores}=student;
       let totalSum=scores.reduce((acc,ele)=>acc+ele,0);
       let avg=Math.round(totalSum/scores.length);
       student['scores']=avg;
       return avg>=70;
     })
     return ans;
}
// Input
const students = [
    { id: 1, name: "Alice", scores: [85, 90, 92] },
    { id: 2, name: "Bob", scores: [70, 68, 72] },
    { id: 3, name: "Charlie", scores: [60, 65, 58] },
    { id: 4, name: "David", scores: [75, 80, 78] },
  ];
  
  // Output
  const passedStudents = calculateFinalGrades(students);
  console.log(passedStudents);
  // Output should be: finalGrade more than 70 
  // [
  //   { id: 1, name: "Alice", finalGrade: 89 },
  //   { id: 2, name: "Bob", finalGrade: 70 },
  //   { id: 4, name: "David", finalGrade: 78 }
  // ]
  
  