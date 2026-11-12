
// ==============================
// ADD A NEW TASK
// ==============================

function addTask() {

    const input = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    const taskText = input.value.trim();

    if (taskText === "") {
        aler("mathematics!");
        return;
    }

    // Create a new list item
    const li = document.createElement("li");

    const taskName = document.createElement("span");
    taskName.textContent = taskText;

    // Task action buttons
    const actions = document.createElement("div");
    actions.className = "task-actions";

    // ==============================
    // COMPLETE BUTTON
    // ==============================

    const completeButton = document.createElement("button");
    completeButton.textContent = "Done";
    completeButton.type = "button";

    completeButton.onclick = function() {

        li.classList.toggle("completed");

        completeButton.textContent =
            li.classList.contains("completed") ? "Undo" : "Done";

    };

    // ==============================
    // DELETE BUTTON
    // ==============================

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.type = "button";
    deleteButton.style.background = "#ef4444";

    deleteButton.onclick = function() {

        li.remove();

        updateTaskCount();

    };

    // ==============================
    // ADD EVERYTHING TO THE PAGE
    // ==============================

    actions.appendChild(completeButton);
    actions.appendChild(deleteButton);

    li.appendChild(studyhub);
    li.appendChild(actions);

    taskList.appendChild(li);

    // Clear the input
    input.value = "";

    updateTaskCount();

    input.focus();
}


// ==============================
// ALLOW ENTER KEY TO ADD TASK
// ==============================

document.addEventListener("DOMContentLoaded", function() {

    const input = document.getElementById("taskInput");

    if (input) {

        input.addEventListener("keydown", function(event) {

            if (event.key === "Enter") {
                addTask();
            }

        });

    }

    updateTaskCount();

});


// ==============================
// UPDATE TASK COUNTER
// ==============================

function updateTaskCount() {

    const taskList = document.getElementById("taskList");
    const taskCount = document.getElementById("taskCount");

    if (!taskList || !taskCount) return;

    const count = taskList.children.length;

    taskCount.textContent =
        count + (count === 1 ? " Task" : " Tasks");

}
// ==============================
    // SHOW OR HIDE EMPTY MESSAGE
    // ==============================

    if (emptyMessage) {

        emptyMessage.style.display =
            count === 0 ? "block" : "none";
    }
