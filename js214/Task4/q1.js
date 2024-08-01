//Example Invocation:
function highestPaid(emps){
    return emps.reduce(function(maxpaid,emp){
          return emp.salary>maxpaid.salary?emp:maxpaid;
    },{ name: "Alex Johnson", age: 35, department: "IT", salary: 0 },)
}
const employees = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

console.log(highestPaid(employees)); // Output: { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }

