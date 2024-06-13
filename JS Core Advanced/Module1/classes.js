class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  yearSalary() {
    return this.salary * 12;
  }
}

class Manager extends Employee {
  constructor(name, salary, bonusPerMonth) {
    super(name, salary);
    this.bonusPerMonth = bonusPerMonth;
  }

  yearSalary() {
    return (this.salary + this.bonusPerMonth) * 12;
  }
}

const employee1 = new Employee("Alisa", 120);
const manager1 = new Manager("Mark", 120, 30);

console.log(employee1.yearSalary());
console.log(manager1.yearSalary());
