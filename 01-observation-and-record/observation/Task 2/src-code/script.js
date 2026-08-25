// Create Student class
class Student {
    constructor(name, rollNumber, department, cgpa) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.department = department;
        this.cgpa = cgpa;
    }
}

// Select the button and profile container
const createProfileButton = document.getElementById("createProfile");
const studentProfile = document.getElementById("studentProfile");

// Add event listener to the button
createProfileButton.addEventListener("click", function () {

    // Get values from input fields
    const name = document.getElementById("name").value;
    const rollNumber = document.getElementById("rollNumber").value;
    const department = document.getElementById("department").value;
    const cgpa = document.getElementById("cgpa").value;

    // Create Student object
    const student = new Student(
        name,
        rollNumber,
        department,
        cgpa
    );

    // Clear previous profile
    studentProfile.innerHTML = "";

    // Create profile div dynamically
    const profile = document.createElement("div");
    profile.className = "profile";

    // Create heading
    const heading = document.createElement("h2");
    heading.textContent = "Student Profile";

    // Create paragraphs
    const namePara = document.createElement("p");
    namePara.textContent = "Name : " + student.name;

    const rollPara = document.createElement("p");
    rollPara.textContent = "Roll No : " + student.rollNumber;

    const departmentPara = document.createElement("p");
    departmentPara.textContent = "Department : " + student.department;

    const cgpaPara = document.createElement("p");
    cgpaPara.textContent = "CGPA : " + student.cgpa;

    // Add elements to profile
    profile.appendChild(heading);
    profile.appendChild(namePara);
    profile.appendChild(rollPara);
    profile.appendChild(departmentPara);
    profile.appendChild(cgpaPara);

    // Add profile to webpage
    studentProfile.appendChild(profile);
});