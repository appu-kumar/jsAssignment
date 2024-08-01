
function employeesInDepartment(emps,depart){

      return emps.filter(function(emp){
            return emp.department===depart;
      }).map(function(emp){
         return emp.name;
      })
}
//Example Invocation:
const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
    { name: "Maria Lopez", age: 29, department: "Finance", salary: 65000 },
  ];
  
  console.log(employeesInDepartment(employees, "Finance")); // Output: ['Jane Smith', 'Maria Lopez']
  
  

  