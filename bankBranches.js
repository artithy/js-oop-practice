class Bank {
    constructor(name) {
        this.name = name;
        this.branches = [];
    }

    add(branch) {
        this.branches.push(branch);
    }

    remove(branch) {
        this.branches = this.branches.filter(b => b !== branch);
    }

    show() {
        console.log(`${this.name} branches: ${this.branches.join(", ")}`);
    }
}

const b = new Bank("Sonali Bank");

b.add("Dhaka");
b.add("Chittagong");
b.show();

b.remove("Dhaka");
b.show();
