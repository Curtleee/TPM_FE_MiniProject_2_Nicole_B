document.addEventListener("DOMContentLoaded", () =>{
    const todoInput = document.getElementById("todo");
    const addButton = document.getElementById("add-btn");
    const todoList = document.getElementById("todo-list");

    addButton.addEventListener("click", () =>{
        const task = todoInput.value.trim();
        if(task !== ""){
            addTodo(task);
            todoInput.value = "";
        }
    });

    function addTodo(task){
        const todoItem = document.createElement("li");
        todoItem.className = "todo-item";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("click", () =>{
            todoItem.classList.toggle("completed");
        });

        const taskText = document.createElement("span");
        taskText.textContent = task;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "x";
        deleteButton.className = "delete-btn";
        deleteButton.addEventListener("click", () =>{
            todoItem.remove();
        });

        todoItem.appendChild(checkbox);
        todoItem.appendChild(taskText);
        todoItem.appendChild(deleteButton);
        todoList.appendChild(todoItem);
    }
});