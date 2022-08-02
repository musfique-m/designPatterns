function Employee(salary) {
  this.salary = salary;
}

Employee.prototype = {
  getSalary: function () {
    return this.salary;
  },
  setSalary: function (newSalary) {
    this.salary = newSalary;
  },
  accept: function (visitorFunction) {
    visitorFunction(this);
  },
};

const newEmployee = new Employee(10);
console.log(newEmployee.getSalary());

function IncrementSalary(employee) {
  employee.setSalary(employee.getSalary() + 1);
}

newEmployee.accept(IncrementSalary);

console.log(newEmployee.getSalary());
