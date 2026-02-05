$(document).ready(function () {
  const $ft_list = $('#ft_list');
  function loadTodos() {
    const cookies = document.cookie.split("; ");
    const todoCookie = cookies.find(row => row.startsWith("todos="));
    if (!todoCookie) return;
    try {
      const todos = JSON.parse(todoCookie.split("=")[1]);
      for (let i = todos.length - 1; i >= 0; i--) {
        addTodo(todos[i]);
      }
    } catch (e) {
      console.log("Error parsing cookie");
    }
  }
  function saveTodos() {
    const todos = [];
    $ft_list.children('div').each(function () {
      todos.push($(this).text());
    });
    document.cookie = "todos=" + JSON.stringify(todos) + "; path=/; max-age=31536000";
  }
  function addTodo(text) {
    const $div = $('<div></div>').text(text);
    $div.click(function () {
      if (confirm("Remove this TO DO?")) {
        $(this).remove();
        saveTodos();
      }
    });
    $ft_list.prepend($div);
  }
  $('#newBtn').click(function () {
    const text = prompt("New TO DO:");
    if (!text) return;
    addTodo(text);
    saveTodos();
  });
  loadTodos();
});