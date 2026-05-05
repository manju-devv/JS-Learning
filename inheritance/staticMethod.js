class Employee {
  static employeeCount = 0;
  constructor(name) {
    this.name = name;
    Employee.employeeCount++;
  }

  static getEmployeeCount() {
    return Employee.employeeCount;
  }
}

const employee1 = new Employee("Alice");
const employee2 = new Employee("Bob");
const employee3 = new Employee("Smith");
console.log(Employee.getEmployeeCount());

class EmployeeChallenge {
  constructor(name) {
    this.name = name;
  }
  static getNewIntern(name) {
    return { ...new EmployeeChallenge(name), role: "intern", startDate: (new Date).toDateString() };
    // return { name, role: "intern", startDate: (new Date).toDateString() };
  }
  /*
Challenge:
1. Set up a static method called getNewIntern. 
   getNewIntern should return an object with a 'name' property, 
   a 'role' property which is hard-coded to ‘intern’, and a 
   'startDate' property which should be the time of code execution. 
   (🤔 How can you use JS to get the time right now?)
*/
}

console.log(EmployeeChallenge.getNewIntern("Dave"));
