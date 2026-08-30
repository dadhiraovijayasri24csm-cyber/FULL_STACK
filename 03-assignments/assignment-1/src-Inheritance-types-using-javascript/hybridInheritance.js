// Hybrid Inheritance

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

class Pet extends Dog {
    play() {
        console.log("Pet can play.");
    }
}

// Mixin
const Friendly = {
    beFriendly() {
        console.log("Pet is friendly.");
    }
};

Object.assign(Pet.prototype, Friendly);

const pet = new Pet();

pet.eat();
pet.bark();
pet.play();
pet.beFriendly();