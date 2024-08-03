

function sortStudentsByCondition(students,callback){
    students.sort(callback);
    return students;
}
// Input
const students = [
    { name: "Alice", age: 21 },
    { name: "Bob", age: 19 },
    { name: "Charlie", age: 23 },
    { name: "David", age: 20 }
  ];
  
  // Condition function: Sort by age in descending order
  function sortByAgeDescending(a, b) {
    return b.age - a.age;
  }
  
  // Output
  const sortedStudents = sortStudentsByCondition(students, sortByAgeDescending);
  console.log(sortedStudents);
  // Output should be:
  // [
  //   { name: "Charlie", age: 23 },
  //   { name: "Alice", age: 21 },
  //   { name: "David", age: 20 },
  //   { name: "Bob", age: 19 }
  // ]
  
  