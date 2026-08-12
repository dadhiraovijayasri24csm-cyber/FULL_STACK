// Student details using an array
const student = {
    name: "Vijayasri",
    course: "B.Tech AI & ML",
    year: "3rd Year"
};

// Get HTML elements using DOM
const message = document.getElementById("message");
const studentDetails = document.getElementById("studentDetails");

const showButton = document.getElementById("showButton");
const changeButton = document.getElementById("changeButton");

// Display student details
showButton.addEventListener("click", function () {

    studentDetails.innerHTML = `
        <h2>Student Details</h2>
        <p><strong>Name:</strong> ${student.name}</p>
        <p><strong>Course:</strong> ${student.course}</p>
        <p><strong>Year:</strong> ${student.year}</p>
    `;

});

// Change webpage content
changeButton.addEventListener("click", function () {

    message.textContent =
        "This webpage content has been changed dynamically using JavaScript DOM.";

});