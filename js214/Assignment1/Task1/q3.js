/* 3. Merging Objects */

const student = { name: "Alice", age: 20 };
const course = { courseName: "Math", teacher: "Mr. Smith" };

function mergingObjects(student, course){
const studentWithCourse = {
...student, ...course
}
return studentWithCourse
}

console.log(mergingObjects(student, course)); // Output: { name: 'Alice', age: 20, courseName: 'Math', teacher: 'Mr. Smith' }