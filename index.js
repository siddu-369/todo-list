let todoItemsContainer = document.getElementById("todoItemsContainer");
// let todoList = [
//   {
//     text: "Learn HTML",
//   },
//   {
//     text: "Learn CSS",
//   },
//   {
//     text: "Learn JavaScript",
//   },
// ];

let addButton = document.getElementById("addButton");

let todoList = [];
let todoCount = 0;

function createAndAppendTodo(todo) {
  let todoId = "todo" + todo.id;
  let checkboxId = "checkbox" + todo.id;
  let labelId = "label" + todo.id;

  let todoItem = document.createElement("li");
  todoItem.id = todoId;
  todoItem.classList.add("todo-item-container", "d-flex", "flex-row");
  todoItemsContainer.appendChild(todoItem);

  let inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.id = checkboxId;
  inputElement.classList.add("checkbox-input");

  todoItem.appendChild(inputElement);

  inputElement.onclick = function () {
    labelElement.classList.toggle("checked");
  };

  let labelContainer = document.createElement("div");
  labelContainer.classList.add("label-container", "d-flex", "flex-row");
  todoItem.appendChild(labelContainer);

  let labelElement = document.createElement("label");
  labelElement.textContent = todo.text;
  labelElement.id = labelId;
  labelElement.setAttribute("for", "checkboxInput");

  labelElement.classList.add("checkbox-label");
  labelContainer.appendChild(labelElement);

  let deleteIconContainer = document.createElement("div");
  deleteIconContainer.classList.add("delete-icon-container");
  labelContainer.appendChild(deleteIconContainer);

  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fa-regular", "fa-trash-can", "delete-icon");
  deleteIcon.onclick = function () {
    let todoElement = document.getElementById(todoId);
    console.log(todoElement);
    todoItemsContainer.removeChild(todoElement);
  };

  deleteIconContainer.appendChild(deleteIcon);
}
addButton.onclick = function () {
  let inputValueElement = document.getElementById("inputValue");

  let inputValue = inputValueElement.value.trim();
  if (inputValue === "") {
    alert("Please enter some input");
    return;
  }

  todoCount = todoCount + 1;

  let newtodo = {
    text: inputValue,
    id: todoCount,
  };
  todoList.push(newtodo);
  console.log(todoList);
  //console.log(inputValue);

  createAndAppendTodo(newtodo);
  inputValueElement.value = "";
};
