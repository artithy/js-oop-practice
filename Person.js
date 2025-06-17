class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    showDetails() {
        console.log('Name: ${this.name}');
        console.log('Age: ${this.age}');
        console.log('Country: ${this.country}');
        console.log('-------------------------');
    }
}

const person1 = new Person("Afrina Rahman Tithy", 20, "Bangladesh");
const person2 = new Person("TT", 22, "Bangladesh");

person1.showDetails();
person2.showDetails();
