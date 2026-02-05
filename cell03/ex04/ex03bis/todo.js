$(document).ready(function () {
  loadTodos();
  $("#new").on("click", newTodo);
});


function newTodo() {
  let text = prompt("New TO DO:");
  if (!text || text.trim() === "") return;

  addTodo(text);
  saveTodos();
}

function addTodo(text) {
  const ftList = $("#ft_list");

  const todo = $("<div></div>").text(text);

  todo.on("click", function () {
    if (confirm("Do you want to remove this TO DO?")) {
      $(this).remove();
      saveTodos();
    }
  });

  ftList.prepend(todo);
}

function saveTodos() {
  const todos = [];

  $("#ft_list").children().each(function () {
    todos.push($(this).text());
  });

  document.cookie =
    "todos=" + encodeURIComponent(JSON.stringify(todos)) + ";path=/";
}

function loadTodos() {
  const cookies = document.cookie.split("; ");

  for (let c of cookies) {
    if (c.startsWith("todos=")) {
      const todos = JSON.parse(decodeURIComponent(c.split("=")[1]));
      for (let todo of todos.reverse()) {
        addTodo(todo);
      }
    }
  }
}

