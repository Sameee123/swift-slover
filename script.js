function addTask() {
    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value.trim();
    if (task) {
        let li = document.createElement("li");
        li.innerText = task;
        li.onclick = function() {
            this.classList.toggle("completed");
            updateTasks();
        };
        document.getElementById("pendingTasks").appendChild(li);
        taskInput.value = "";
    }
    updateTasks();
}

function updateTasks() {
    let completedTasks = document.querySelectorAll("#pendingTasks .completed");
    let completedList = document.getElementById("completedTasks");

    completedTasks.forEach(task => {
        completedList.appendChild(task);
    });
}
