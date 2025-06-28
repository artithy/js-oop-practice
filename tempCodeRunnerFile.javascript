class University {
    constructor(name) {
        this.name = name;
        this.departments = [];
    }

    addDepartment(dept) {
        if (!this.departments.includes(dept)) {
            this.departments.push(dept);
        }
    }

    removeDepartment(dept) {
        this.departments = this.departments.filter(d => d !== dept);
    }

    showDepartments() {
        console.log(`Departments in ${this.name}:`);
        this.departments.forEach((dept, index) => {
            console.log(`${index + 1}. ${dept}`);
        });
    }
}

const myUniversity = new University("Green Valley University");

myUniversity.addDepartment("Computer Science");
myUniversity.addDepartment("Business Administration");
myUniversity.addDepartment("Psychology");

myUniversity.showDepartments();

myUniversity.removeDepartment("Business Administration");

myUniversity.showDepartments();
