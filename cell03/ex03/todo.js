const ft_list = document.getElementById("ft_list");

function newTodo() {
  const text = prompt("New TO DO:");
  if (!text) return;

  addTodo(text);
  saveTodos();
}

function addTodo(text) {
  const div = document.createElement("div");
  div.textContent = text;

  div.onclick = function () {
    if (confirm("Remove this TO DO?")) {
      div.remove();
      saveTodos();
    }
  };

  ft_list.prepend(div);
}

function saveTodos() {
  const todos = [];
  ft_list.querySelectorAll("div").forEach(div => {
    todos.push(div.textContent);
  });
  document.cookie = "todos=" + JSON.stringify(todos);
}

function loadTodos() {
  const cookies = document.cookie.split("; ");
  const todoCookie = cookies.find(row => row.startsWith("todos="));
  if (!todoCookie) return;

  const todos = JSON.parse(todoCookie.split("=")[1]);

  for (let i = todos.length - 1; i >= 0; i--) {
    addTodo(todos[i]);
  }
}


loadTodos();
