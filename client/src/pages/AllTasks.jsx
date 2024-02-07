import React, { useEffect, useState } from "react";
import "./styles/AllTasks.css";
const getLocalStorage = () => {
  let tasks = localStorage.getItem("task");
  if (tasks) {
    return JSON.parse(localStorage.getItem("task"));
  } else {
    return [];
  }
};
function AllTasks() {
  const [items, setItems] = useState(getLocalStorage());
  return (
    <div className={"all-tasks"}>
      <h1>All Your Task</h1>
      <div className={"container"}>
        {items.map((task, index) => {
          return (
            <div key={index}>
              <p>{task.task_title}</p>
              <p>{task.task_description}</p>
              <p>{task.priority_level}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllTasks;
