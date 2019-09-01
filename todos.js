var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var todos = JSON.parse(localStorage.getItem("list_todos")) || [];

buttonElement.onclick = addTodo;

function listTodos() {
  listElement.innerHTML = "";
  for (todo of todos) {
    var todoElement = document.createElement("li");
    var textTodo = document.createTextNode(todo);

    var linkElement = document.createElement("a");

    linkElement.setAttribute("href", "#");

    var pos = todos.indexOf(todo);
    linkElement.setAttribute("onclick", "deleteTodo(" + pos + ")");

    var linkText = document.createTextNode("Excluir");

    linkElement.appendChild(linkText);

    todoElement.appendChild(textTodo);
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);
  }
}

listTodos();

function addTodo() {
  var textTodo = inputElement.value;

  todos.push(textTodo);
  inputElement.value = "";
  listTodos();
  saveToStorage();
}

function deleteTodo(pos) {
  todos.splice(pos, 1);
  listTodos();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("list_todos", JSON.stringify(todos));
}
