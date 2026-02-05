window.onload = function () {
  loadTodos();
};

function newTodo() {
  let text = prompt("New TO DO:");
  if (!text || text.trim() === "") return;

  addTodo(text);
  saveTodos();
}

function addTodo(text) {
  const ftList = document.getElementById("ft_list");

  const todo = document.createElement("div");
  todo.textContent = text;

  todo.onclick = function () {
    if (confirm("Do you want to remove this TO DO?")) {
      ftList.removeChild(todo);
      saveTodos();
    }
  };

  ftList.insertBefore(todo, ftList.firstChild);
}

function saveTodos() {
  const todos = [];
  const ftList = document.getElementById("ft_list").children;

  for (let i = 0; i < ftList.length; i++) {
    todos.push(ftList[i].textContent);
  }

  document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + ";path=/";
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
