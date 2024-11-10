document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    // Function to add a new task
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = todoInput.value.trim();
        if (taskText) {
            addTask(taskText);
            todoInput.value = '';
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.classList.add('todo-item');

        const span = document.createElement('span');
        span.textContent = taskText;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => editTask(span));

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => toggleComplete(span));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => li.remove());

        li.appendChild(span);
        li.appendChild(editButton);
        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        todoList.appendChild(li);
    }

    function editTask(span) {
        const newText = prompt('Edit your task:', span.textContent);
        if (newText !== null) {
            span.textContent = newText.trim();
        }
    }

    function toggleComplete(span) {
        span.classList.toggle('completed');
    }
});
