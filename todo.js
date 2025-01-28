function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value.trim();
    if (taskText === '') return;
    
    let li = document.createElement('li');
    li.innerHTML = `<span>${taskText}</span>
                    <div>
                        <button class="edit" onclick="editTask(this)">Edit</button>
                        <button class="delete" onclick="deleteTask(this)">Delete</button>
                    </div>`;
    document.getElementById('taskList').appendChild(li);
    taskInput.value = '';
}

function editTask(button) {
    let taskSpan = button.parentElement.previousElementSibling;
    let newTaskText = prompt('Edit task:', taskSpan.innerText);
    if (newTaskText !== null) {
        taskSpan.innerText = newTaskText.trim();
    }
}

function deleteTask(button) {
    button.parentElement.parentElement.remove();
}