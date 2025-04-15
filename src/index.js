import "./styles.css";
import { todo } from "./todo";
import { toggleSidebar, toggleSubMenu } from "./sidebar";
import { renderTodoList } from "./todoList";
import { addTodo } from "./todoStore";

window.toggleSidebar = toggleSidebar;
window.toggleSubMenu = toggleSubMenu;

const myTodo = todo("dishes", "do the dishes", "Friday", "Low", "");
const myOtherTodo = todo("eat", "family dinner", "Saturday", "High", "");

addTodo(myTodo);
addTodo(myOtherTodo);

const render = () => {
  const displayTodos = document.getElementsByClassName("display-todos")[0];
  const todoList = renderTodoList();
  console.log(todoList);
  displayTodos.appendChild(todoList);
};

render();
