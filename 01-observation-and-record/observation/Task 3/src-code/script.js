// Selecting HTML elements using DOM
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");

// Add Task button event listener
addTaskBtn.addEventListener("click", function () {

    const taskText = taskInput.value.trim();

    // Check if input is empty
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create a new list item
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");

    // Create task text
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    taskSpan.classList.add("task-text");

    // Create buttons container
    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("task-buttons");

    // Create Complete button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.classList.add("complete-btn");

    // Create Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    // Complete button event listener
    completeBtn.addEventListener("click", function () {
        taskSpan.classList.toggle("completed");

        if (taskSpan.classList.contains("completed")) {
            completeBtn.textContent = "Completed";
        } else {
            completeBtn.textContent = "Complete";
        }
    });

    // Delete button event listener
    deleteBtn.addEventListener("click", function () {
        taskItem.remove();

        // Show empty message if no tasks remain
        if (taskList.children.length === 0) {
            emptyMessage.style.display = "block";
        }
    });

    // Add buttons to buttons container
    buttonsDiv.appendChild(completeBtn);
    buttonsDiv.appendChild(deleteBtn);

    // Add task text and buttons to task item
    taskItem.appendChild(taskSpan);
    taskItem.appendChild(buttonsDiv);

    // Add task item to task list
    taskList.appendChild(taskItem);

    // Hide empty message
    emptyMessage.style.display = "none";

    // Clear input box
    taskInput.value = "";
});
