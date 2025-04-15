import { addDays } from "date-fns";

export const todo = (title, description, dueDate, priority, notes) => {
  return {
    title,
    description,
    dueDate,
    priority,
    notes,
    id: Math.floor(Math.random() * Date.now()).toString(16),
  };
};

export const genDueDate = (days) => {
  const milliseconds = Date.now();
  const date = new Date(milliseconds);
  console.log(date);
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getYear();
  return addDays(new Date(year, month, day), days);
};
