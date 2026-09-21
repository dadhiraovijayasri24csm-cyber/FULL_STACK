// Normal JavaScript function
function greetStudent(name) {
    return "Hello, " + name + "!";
}

// JavaScript class
class Student {
    constructor(name, course, year) {
        this.name = name;
        this.course = course;
        this.year = year;
    }

    // Class method
    getDetails() {
        return `
            <div class="student">
                <h3>${this.name}</h3>
                <p><strong>Course:</strong> ${this.course}</p>
                <p><strong>Year:</strong> ${this.year}</p>
            </div>
        `;
    }
}

// Creating multiple objects from the same class
const student1 = new Student("Ravi", "CSE", "2nd Year");
const student2 = new Student("Anu", "CSE", "2nd Year");
const student3 = new Student("Kiran", "CSE", "3rd Year");

// DOM element
const output = document.getElementById("output");

// Event listener
document.getElementById("showStudentsBtn").addEventListener("click", function () {

    const greeting = greetStudent("Student");

    output.innerHTML = `
        <h2>${greeting}</h2>
        ${student1.getDetails()}
        ${student2.getDetails()}
        ${student3.getDetails()}
    `;
});