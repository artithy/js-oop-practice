class Animal {
    constructor(species, sound) {
        this.species = species;
        this.sound = sound;
    }

    makeSound() {
        console.log(`${this.species} makes a sound: ${this.sound}`);
    }
}

class Dog extends Animal {
    constructor(species, sound, color) {
        super(species, sound);
        this.color = color;
    }

    makeSound() {
        console.log(`The ${this.color} ${this.species} says: ${this.sound}`);
    }
}

const myDog = new Dog('Dog', 'Woof Woof', 'Brown');
myDog.makeSound();
