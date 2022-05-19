
const todoList = document.getElementById("todo-list")
const addItemBtn = document.getElementById("add-item")
const deleteItemBtn = document.getElementById("delete-item")

addItemBtn.addEventListener("click", createItem)

function createItem() {
    let todoInput = document.getElementById("todo-input").value
    if (todoInput === "") {
        noInput()
    } else {
        const inputStr = `<li class="todo-item">${todoInput} <i class="fa-solid fa-xmark delete"></i></li>`
        todoList.innerHTML += inputStr
        checkItem()
        deleteItem()
    }
    document.getElementById("todo-input").value = "";
}

function deleteItem() {
    const deleteClass = document.getElementsByClassName("delete")

    for (let i = 0; i < deleteClass.length; i++) {
        deleteClass[i].addEventListener("click", function () {
            deleteClass[i].parentElement.style.display = "none";
        })
    }
}

function checkItem() {
    const todoItem = document.getElementsByClassName("todo-item")
    for (let x = 0; x < todoItem.length; x++) {
        todoItem[x].addEventListener("click", function () {
            todoItem[x].classList.toggle("checked")
        })
    }
}

function noInput() {
    const toast = document.getElementById("toast")
    toast.className = "show"
    setTimeout(function() { toast.className = toast.className.replace("show", ""); }, 3000)
}

checkItem()
deleteItem()