
const addItemBtn = document.getElementById("add-item")


addItemBtn.addEventListener("click", function() {
    let todoInput = document.getElementById("todo-input").value
    const inputStr = `<li class="todo-item">${todoInput}</li>`
    console.log(inputStr)
})

