import React, { useEffect, useState } from "react";
import "./styles/AllTasks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-bootstrap/Modal";
import { NavLink } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";
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
  // filter terms
  const [filterTerm, setFilterTerm] = useState("");
  console.log(filterTerm);
  // show popup  updateForm
  const [modalShow, setModalShow] = useState(false);
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(items));
  }, [items]);

  const totalTasks = items.length;
  const completedTasks = items.filter((t) => t.completed === true).length;
  const incompletedTasks = items.filter((t) => t.completed === false).length;
  // Update Task Form

  // Task previous data
  const [previousData, setPreviousData] = useState({});
  // Previous Task Index
  const [previousDataIndex, setPreviousDataIndex] = useState(0);

  // Collect updated inputs
  const [updateinputs, setUpdateinputs] = useState({
    task_title: previousData.task_title,
    task_description: previousData.task_description,
    priority_level: previousData.priority_level,
    completed: false,
  });

  // Handle Input Change
  const handleChange = (e) => {
    setUpdateinputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  // Crud Operation Functions

  const updateTask = (id, previousData) => {
    setModalShow(true);
    setPreviousData(previousData);
    setPreviousDataIndex(id);
  };
  const updateTaskValues = (e) => {
    e.preventDefault();
    // set item with previous task and updated task
    setItems((pre) => {
      const newTask = [...pre];
      newTask[previousDataIndex] = updateinputs;
      return newTask;
    });
    toast.info("Task Updated", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };
  const deleteTask = (id) => {
    // delete a task using splice()
    setItems((pre) => {
      const newTask = [...pre];
      newTask.splice(id, 1);
      return newTask;
    });
    toast.error("Task Deleted", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };
  const statusToggle = (index, status) => {
    // update only status of a specific task
    setItems((pre) => {
      const newTask = [...pre];
      newTask[index].completed = !status;
      console.log(newTask[index]);
      return newTask;
    });
  };
  return (
    <div className={"all-tasks"}>
      <div className={"counters"}>
        <p className={"total-task"}>
          <span className={"text-primary"}>Total Task:</span>
          <span>{totalTasks}</span>
        </p>
        <p className={"completed-task"}>
          <span className={"text-success"}>Completed Task:</span>
          <span>
            {completedTasks} / {totalTasks}
          </span>
        </p>
        <p className={"incomplete-task"}>
          <span className={"text-danger"}>Incomplete Task</span>
          <span>
            {incompletedTasks} / {totalTasks}
          </span>
        </p>
      </div>
      <div className={"filters"}>
        <button onClick={() => setFilterTerm("high")}>High</button>
        <button onClick={() => setFilterTerm("medium")}>Medium</button>
        <button onClick={() => setFilterTerm("low")}>Low</button>
        <button onClick={() => setFilterTerm("")}>All</button>
      </div>
      <Modal
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalShow}
      >
        <Modal.Header>
          <span className={"title"}>Updated Task</span>
          <span className={"close"} onClick={() => setModalShow(false)}>
            <FontAwesomeIcon icon="fa-solid fa-xmark" />
          </span>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={updateTaskValues}>
            <div className="row mb-3">
              <label htmlFor={"task_title"} className="col-sm-2 col-form-label">
                Task Title
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className={"form-control"}
                  id={"task_title"}
                  name={"task_title"}
                  onChange={handleChange}
                  maxLength={40}
                  defaultValue={previousData.task_title}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="task_description"
                className="col-sm-2 col-form-label"
              >
                Task Description
              </label>
              <div className="col-sm-10">
                <textarea
                  className="form-control"
                  id={"task_description"}
                  rows="8"
                  maxLength={250}
                  name={"task_description"}
                  onChange={handleChange}
                  defaultValue={previousData.task_description}
                ></textarea>
              </div>
            </div>
            <fieldset className="row mb-3">
              <legend className="col-form-label col-sm-2 pt-0">
                Priority Level
              </legend>
              <div className="col-sm-10">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name={"priority_level"}
                    id={"high"}
                    onChange={handleChange}
                    value={"high"}
                    defaultValue={previousData.priority_level}
                  />
                  <label className="form-check-label" htmlFor={"high"}>
                    High
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name={"priority_level"}
                    id={"medium"}
                    onChange={handleChange}
                    value={"medium"}
                    defaultValue={previousData.priority_level}
                  />
                  <label className="form-check-label" htmlFor={"medium"}>
                    Medium
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name={"priority_level"}
                    id={"low"}
                    value={"low"}
                    onChange={handleChange}
                    defaultValue={previousData.priority_level}
                  />
                  <label className="form-check-label" htmlFor={"low"}>
                    Low
                  </label>
                </div>
              </div>
            </fieldset>
            <div className="row mb-3 button">
              <button type={"submit"} className={"add_task_button"}>
                <FontAwesomeIcon
                  className={"mx-1"}
                  icon="fa-solid fa-pen-to-square"
                />
                Update Task
              </button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => setModalShow(false)}>Cancel</button>
        </Modal.Footer>
      </Modal>
      <div className={"container"}>
        {items
          .filter((item) => {
            if (!filterTerm) {
              return item;
            }
            if (item.priority_level === filterTerm) {
              return item;
            }
          })
          .map((task, index) => {
            return (
              <div key={index} className={"task"}>
                <h3>
                  <span>Title:</span>
                  {task.task_title}
                </h3>
                <h4>
                  <span>Description:</span>
                  {task.task_description}
                </h4>
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
                      onClick={() => updateTask(index, task)}
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
                      className={
                        task.completed ? "text-success" : "text-danger"
                      }
                      onClick={() => statusToggle(index, task.completed)}
                    />
                  </span>
                </h6>
              </div>
            );
          })}
      </div>
      <ToastContainer />
    </div>
  );
}

export default AllTasks;
