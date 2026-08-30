// Single Inheritance

class Animal {
    eat() {
        console.log("Animal can eat.");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog can bark.");
    }
}

const dog = new Dog();

dog.eat();
dog.bark();