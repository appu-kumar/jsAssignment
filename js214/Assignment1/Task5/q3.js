const school = {
    name: "XYZ School",
    establishYear: 1990,
    departments: {
      math: { teachers: 5, students: 150 },
      science: { teachers: 4, students: 120 },
      history: { teachers: 3, students: 100 },
      english: { teachers: 4, students: 130 },
    },
    courses: ["math", "science", "history", "english"],
    students: [
      {
        name: "Alice",
        className: "Grade 5",
        scores: { math: 95, science: 88, history: 85, english: 92 },
      },
      {
        name: "Bob",
        className: "Grade 4",
        scores: { math: 80, science: 78, history: 92, english: 85 },
      },
      {
        name: "Charlie",
        className: "Grade 5",
        scores: { math: 88, science: 90, history: 78, english: 88 },
      },
      {
        name: "Diana",
        className: "Grade 4",
        scores: { math: 92, science: 85, history: 88, english: 90 },
      },
    ],
  };


function findTopStudent(school, courseName) {
    let topStudent = null;
    let highestScore = 0;
    for (let student of school.students) {
      if (student.scores[courseName] > highestScore) {
        highestScore = student.scores[courseName];
        topStudent = student;
      }
    }
    return topStudent;
  }
  console.log(findTopStudent(school, 'math'))
  
  
  // Problem 12
function addNewDept(school,newDepart){
      school.departments['art']=newDepart;
      return school;
}
console.log(addNewDept(school,{ teachers: 2, students: 50 }))
