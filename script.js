const tasksContainer = document.querySelector(".tasks");

// Function to add a task
function addTask() {
    const taskInput = document.querySelector("#task");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create task HTML
    const task = document.createElement("div");
    task.classList.add("task");
    task.innerHTML = `
        <p>${taskText}</p>
        <button class="delete">
            <i class="ri-delete-bin-line"></i>
        </button>
    `;

    // Append to task container
    tasksContainer.appendChild(task);

    // Clear the input field
    taskInput.value = "";

    // Attach delete functionality
    task.querySelector(".delete").addEventListener("click", () => {
        task.remove();
    });
}
