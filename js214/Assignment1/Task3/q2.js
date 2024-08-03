
function totalSalaryByDepartment(emps,depart){
    let ans=emps.filter(function(emp){
         return emp.department===depart;
    }).reduce(function(acc,emp){
          return acc+emp.salary;
    },0)
    return ans;
}
//Example Invocation:
const employees = [
 { name: "John Doe", age: 30, department: "HR", salary: 50000 },
 { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
 { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
 { name: "Maria Lopez", age: 29, department: "Finance", salary: 65000 },
];

console.log(totalSalaryByDepartment(employees, "Finance")); // Output: 125000

