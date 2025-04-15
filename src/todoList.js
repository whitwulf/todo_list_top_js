import { todoCard } from "./todoCard";
import { getTodos } from "./todoStore";

export const renderTodoList = () => {
  const todos = getTodos();
  const todoListDiv = document.createElement("div");
  todoListDiv.classList = "todo-list";

  todos.forEach((todo) => {
    console.log(todo);
    const card = todoCard(todo);
    todoListDiv.appendChild(card);
  });

  return todoListDiv;
};
