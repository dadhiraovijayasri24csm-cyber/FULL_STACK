// Multiple Inheritance using Mixins

class Father {
    fatherSkill() {
        console.log("Father: Driving");
    }
}

class Mother {
    motherSkill() {
        console.log("Mother: Cooking");
    }
}

class Child extends Father {
    childSkill() {
        console.log("Child: Coding");
    }
}

// Copy Mother's methods into Child
Object.getOwnPropertyNames(Mother.prototype).forEach(method => {
    if (method !== "constructor") {
        Child.prototype[method] = Mother.prototype[method];
    }
});

const child = new Child();

child.fatherSkill();
child.motherSkill();
child.childSkill();