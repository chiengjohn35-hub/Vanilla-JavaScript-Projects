// Dom elements
const todoform = document.getElementById('todo-form');
const todoinput = document.getElementById('todo-input');
const todolist = document.getElementById('todo-list');


// lead storage setup
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// render todos from localStorage
function renderTodos() {
    todolist.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        const text = (typeof todo === 'string') ? todo : (todo && todo.text) ? todo.text : String(todo);
        li.innerText = text;
        li.classList.add('todo-item');

        const editBtn = document.createElement('button');
        editBtn.innerText = 'Edit';
        editBtn.classList.add('edit-btn');

        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
            todos.splice(index, 1);
            localStorage.setItem('todos', JSON.stringify(todos));
            renderTodos();
        });

        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        todolist.appendChild(li);
    });
}

// add todo
todoform.addEventListener('submit', (e) => {

    e.preventDefault();

    const newTodo = todoinput.value.trim();
    if (newTodo){
        todos.push(newTodo);
        localStorage.setItem('todos', JSON.stringify(todos));
        todoinput.value = '';
        renderTodos();
    } 
})

// edit todo
todolist.addEventListener('click', (e) => {
    if (e.target.classList.contains('edit-btn')){
        const li = e.target.parentElement;
        const index = Array.from(todolist.children).indexOf(li);
        const current = todos[index];
        const currentText = (typeof current === 'string') ? current : (current && current.text) ? current.text : String(current);
        const newTodo = prompt('Edit your todo:', currentText);
        if (newTodo !== null){
            const trimmed = newTodo.trim();
            if (trimmed !== ''){
                todos[index] = trimmed;
                localStorage.setItem('todos', JSON.stringify(todos));
                renderTodos();
            }
        }
    }
});

// initial render
renderTodos();




