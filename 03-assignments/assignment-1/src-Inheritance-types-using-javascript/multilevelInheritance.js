// Multilevel Inheritance

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

class Puppy extends Dog {
    play() {
        console.log("Puppy can play.");
    }
}

const puppy = new Puppy();

puppy.eat();
puppy.bark();
puppy.play();