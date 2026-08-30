// Hierarchical Inheritance

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

class Cat extends Animal {
    meow() {
        console.log("Cat can meow.");
    }
}

const dog = new Dog();
const cat = new Cat();

dog.eat();
dog.bark();

cat.eat();
cat.meow();