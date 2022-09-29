
// Save all the variables
const form = document.querySelector('.form')
const input = document.querySelector('.input-value')
const todoList = document.querySelector('.todo-list')
const clear = document.querySelector('.clear-list')

// Form submission
form.addEventListener('submit', (e) => {
    e.preventDefault()

    task = input.value

    if (task === '') {
        alert('please add a task')
    }

    else {
        
        addTask()
        input.value = ''
    }


})

function addTask() {
    const text = document.createElement('P')
    text.classList.add('text')
    text.innerText = task

    const del = document.createElement('button')
    del.innerText = "del"

    const edit = document.createElement('button')
    edit.innerText = "edit"

    const todo = document.createElement('li')
    todo.appendChild(text)
    todo.appendChild(del)
    todo.appendChild(edit)
    todo.classList.add('todo')

    todoList.appendChild(todo)


    /* Delete a Task */
    del.addEventListener("click", () => {
        todoList.removeChild(todo)
    })

    /* Complete a Task */
    text.addEventListener("click", () => {
        text.classList.toggle('complete')
    })

    /* Edit a Task */



}


/* Delete all tasks */
clear.addEventListener('click', () => {
    todoList.innerText = ''
})
