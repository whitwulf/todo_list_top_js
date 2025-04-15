const todoStore = {
  default: [],
  test: [],
};

const addTodo = (todo, list = "default") => {
  todoStore[list].push(todo);
};

const getTodos = (list = "default") => {
  if (todoStore[list]) {
    return todoStore[list];
  }
};

const addTodoToNewList = (todo, key) => {
  todoStore[key] = [todo];
};

const editPriority = (id, newPriority, key = "default") => {
  todoStore[key].forEach((todo) => {
    if (todo.id === id) {
      todo.priority = newPriority;
    }
  });
};

const removeTodo = (id, key = "default") => {
  todoStore[key].forEach((todo, i) => {
    if (todo.id === id) {
      todoStore[key].splice(i, 1);
    }
  });
};

const removeList = (key) => {
  if (key === "default") {
    return;
  }

  delete todoStore[key];
};

export {
  addTodo,
  getTodos,
  addTodoToNewList,
  editPriority,
  removeTodo,
  removeList,
};
