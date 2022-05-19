
const todoList = document.getElementById("todo-list")
const addItemBtn = document.getElementById("add-item")
const deleteItemBtn = document.getElementById("delete-item")

addItemBtn.addEventListener("click", addItem)

function addItem() {
    let todoInput = document.getElementById("todo-input").value
        if ( todoInput === "") {
            alert("No input")
        } else {
            const inputStr = `<li class="todo-item">${todoInput} <i class="fa-solid fa-xmark delete"></i></li>`
            todoList.innerHTML += inputStr
            deleteItem()
        }
    document.getElementById("todo-input").value = "";
}


function deleteItem() {
    const deleteClass = document.getElementsByClassName("delete")

    for (let i = 0; i < deleteClass.length; i++) {
        deleteClass[i].onclick = function() {
            d = this.parentElement;
            d.style.display = "none";
        }
    }
}

deleteItem()