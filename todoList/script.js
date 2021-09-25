'use strict';

let todos;
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');
const cleanButton = document.querySelector('.clean-button');
const headerText = document.getElementById('text');

document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

function addTodo(event) {
    // Prevent form from submitting
    event.preventDefault();

    if(todoInput.value !== '') {
        // Div for todo
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        // li for todo div
        const newTodo = document.createElement('li');
        newTodo.innerText = todoInput.value;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);

        saveTodos(todoInput.value);

        // Check button
        const checkButton = document.createElement('button');
        checkButton.innerHTML = '<i class="far fa-check-circle"></i>';
        checkButton.classList.add('check-btn');
        todoDiv.appendChild(checkButton);

        // Delete button
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-ban"></i>';
        deleteButton.classList.add('delete-btn');
        todoDiv.appendChild(deleteButton);

        // Append to list
        todoList.appendChild(todoDiv);
        todoInput.value = '';

        resetHeader('Vanilla JS Todo List', 'white');
    } else {
        resetHeader('Please Enter a Valid Value', 'maroon');
    }
}
function deleteCheck(event) {
    const item = event.target;

    if(item.classList[0] === 'delete-btn') {
        const todo = item.parentElement;
        todo.classList.add('fall');
        removeTodos(todo);
        todo.addEventListener('transitionend', () => {
            todo.remove();
        });
    }

    if(item.classList[0] === 'check-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('checked');
    }
}
function filterTodo(event) {
    const todos = todoList.childNodes;
    todos.forEach((todo) => {
        switch(event.target.value) {
            case 'all':
                todo.style.display = 'flex';
                break;
            case 'completed':
                if(todo.classList.contains('checked')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case 'uncompleted':
                if(!todo.classList.contains('checked')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
        }
    });
}
function resetHeader(text, color) {
    headerText.innerText = text;
    headerText.style.color = color;
}
function saveTodos(todo) {
    if(localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}
function getTodos() {
    if(localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.forEach((todo) => {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);

        const checkButton = document.createElement('button');
        checkButton.innerHTML = '<i class="far fa-check-circle"></i>';
        checkButton.classList.add('check-btn');
        todoDiv.appendChild(checkButton);

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-ban"></i>';
        deleteButton.classList.add('delete-btn');
        todoDiv.appendChild(deleteButton);

        todoList.appendChild(todoDiv);
    });
}
function removeTodos(todo) {
    if(localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}
