class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }
}

class Manager extends Employee {
    constructor(name, salary, department, bonus) {
        super(name, salary);
        this.department = department;
        this.bonus = bonus;
    }

    getAnnualSalary() {
        return (this.salary * 12) + this.bonus;
    }
}

const manager1 = new Manager("TT", 60000, "HR", 1005);
const manager2 = new Manager("AR", 80000, "Finance", 15007);

console.log(`${manager1.name} (${manager1.department}): Annual Salary = ${manager1.getAnnualSalary()} BDT`);
console.log(`${manager2.name} (${manager2.department}): Annual Salary = ${manager2.getAnnualSalary()} BDT`);
