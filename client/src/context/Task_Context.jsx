import { createContext, useState } from "react";

export const Task_Context = createContext({});

const getLocalStorage = () => {
  let tasks = localStorage.getItem("task");
  if (tasks) {
    return JSON.parse(localStorage.getItem("task"));
  } else {
    return [];
  }
};
export const Task_Context_Provider = ({ children }) => {
  const [items, setItems] = useState(getLocalStorage());
  return (
    <Task_Context.Provider value={{ items, setItems }}>
      {children}
    </Task_Context.Provider>
  );
};
