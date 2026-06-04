const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

function createTodoElement(text) {
    const li = document.createElement('li');
    
    const textSpan = document.createElement('span');
    textSpan.className = 'task-text';
    textSpan.textContent = text;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';

    li.appendChild(textSpan);
    li.appendChild(deleteBtn);

 
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    deleteBtn.addEventListener('click', (event) => {
        event.stopPropagation(); 
        li.remove();
    });

    return li;
}

function addTask() {
    const currentText = taskInput.value.trim();

    if (currentText === "") {
        alert("Please enter a valid task.");
        return;
    }

    const todoElement = createTodoElement(currentText);
    taskList.appendChild(todoElement);
    
    taskInput.value = "";
    taskInput.focus();
}

addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});