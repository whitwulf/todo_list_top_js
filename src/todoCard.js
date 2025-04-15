import { renderTodoList } from "./todoList";
import { removeTodo } from "./todoStore";

export const todoCard = (todo) => {
  const card = document.createElement("div");
  card.classList = "todo-card";

  const todoTitle = document.createElement("h3");
  todoTitle.classList = "todoTitle";
  todoTitle.textContent = todo.title;
  card.appendChild(todoTitle);

  const todoDesc = document.createElement("p");
  todoDesc.classList = "todoDesc";
  todoDesc.textContent = todo.description;
  card.appendChild(todoDesc);

  const dueDate = document.createElement("p");
  dueDate.classList = "due-date";
  dueDate.textContent = todo.dueDate;
  card.appendChild(dueDate);

  const priority = document.createElement("p");
  priority.classList = "priority";
  priority.textContent = todo.priority;
  card.appendChild(priority);

  const removeBtn = document.createElement("button");
  removeBtn.classList = "remove-btn";
  removeBtn.textContent = "Remove";
  removeBtn.addEventListener("click", () => {
    removeTodo(todo.id);
    console.log(todo);
    renderTodoList();
  });
  card.appendChild(removeBtn);

  const editPriorityBtn = document.createElement("button");
  editPriorityBtn.classList = "priority-btn";
  editPriorityBtn.textContent = "Edit Priority";
  card.appendChild(editPriorityBtn);

  return card;
};
