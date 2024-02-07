import React, { useEffect, useState } from "react";
import "./styles/AllTasks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// get tasks from localStorage
const getLocalStorage = () => {
  let tasks = localStorage.getItem("task");
  if (tasks) {
    return JSON.parse(localStorage.getItem("task"));
  } else {
    return [];
  }
};
function AllTasks() {
  // react hooks
  const [items, setItems] = useState(getLocalStorage());
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(items));
  }, [items]);
  // update data form

  // Crud Operation Functions
  const updateTask = (id, updatedTask) => {};
  const deleteTask = (id) => {
    // const remainingTask = items.filter((task, index) => {
    //   return index !== id;
    // });
    // setItems(remainingTask);
  };
  const statusToggle = (index, status) => {
    setItems((pre) => {
      const newTask = [...pre];
      newTask[index].completed = !status;
      console.log(newTask[index]);
      return newTask;
    });
  };

  return (
    <div className={"all-tasks"}>
      <h1>All Your Task</h1>
      <div className={"container"}>
        {items.map((task, index) => {
          return (
            <div key={index}>
              <h3>{task.task_title}</h3>
              <h4>{task.task_description}</h4>
              <p className={"priority-level"}>
                <span
                  style={{
                    color:
                      task.priority_level === "high"
                        ? "red"
                        : task.priority_level === "medium"
                          ? "yellow"
                          : "green",
                  }}
                >
                  <FontAwesomeIcon icon="fa-solid fa-signal" />
                </span>
                <span>{task.priority_level}</span>
              </p>
              {task.completed === true ? (
                <p className={"complete"}>
                  Status: <span>Completed</span>
                </p>
              ) : (
                <p className={"incomplete"}>
                  Status: <span>Incomplete</span>
                </p>
              )}
              <h6>
                <span>
                  <FontAwesomeIcon
                    icon="fa-solid fa-pen-to-square"
                    data-bs-toggle="modal-dialog"
                    data-bs-target="#exampleModal"
                  />
                </span>
                <span
                  onClick={() => {
                    deleteTask(index);
                  }}
                >
                  <FontAwesomeIcon
                    icon="fa-solid fa-trash-can"
                    className={"text-danger"}
                  />
                </span>
                <span>
                  <FontAwesomeIcon
                    icon={
                      task.completed
                        ? "fa-solid fa-circle-check"
                        : "fa-solid fa-circle-xmark"
                    }
                    className={task.completed ? "text-success" : "text-danger"}
                    onClick={() => statusToggle(index, task.completed)}
                  />
                </span>
              </h6>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllTasks;
