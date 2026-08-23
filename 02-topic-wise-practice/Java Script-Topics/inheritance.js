// Parent Class
class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(this.name + " is eating.");
    }
}

// Child Class
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Calls the parent class constructor
        this.breed = breed;
    }

    bark() {
        console.log(this.name + " is barking.");
    }

    displayDetails() {
        console.log("Name  :", this.name);
        console.log("Breed :", this.breed);
    }
}

// Creating Object of Child Class
const dog1 = new Dog("Tommy", "Labrador");

// Calling Methods
dog1.displayDetails();
dog1.eat();      // Inherited from Animal
dog1.bark();     // Dog's own method