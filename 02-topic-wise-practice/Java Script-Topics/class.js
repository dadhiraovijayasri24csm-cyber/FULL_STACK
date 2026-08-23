// Class Definition
class Student {
    // Constructor
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }

    // Method
    displayDetails() {
        console.log("Student Name :", this.name);
        console.log("Age          :", this.age);
        console.log("Course       :", this.course);
    }
}

// Creating Objects
const student1 = new Student("Liya", 19, "B.Tech");
const student2 = new Student("Rahul", 20, "B.Sc");

// Calling Methods
console.log("Student 1 Details");
student1.displayDetails();

console.log("\nStudent 2 Details");
student2.displayDetails();