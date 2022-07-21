function Developer(name) {
  this.name = name;
  this.type = "Developer";
}

function Tester(name) {
  this.name = name;
  this.type = "Tester";
}

function EmployeeFactory() {
  this.create = (name, type) => {
    switch (type) {
      case "developer":
        return new Developer(name);
      case "tester":
        return new Tester(name);
    }
  };
}

const employees = [];

const employeeFactory = new EmployeeFactory();

employees.push(employeeFactory.create("lorem", "developer"));
employees.push(employeeFactory.create("ipsum", "tester"));

console.log(employees);
