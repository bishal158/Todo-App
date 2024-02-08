import "./styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import image from "../assets/Add tasks.gif";
import { Bounce, toast, ToastContainer } from "react-toastify";
const getLocalStorage = () => {
  let tasks = localStorage.getItem("task");
  if (tasks) {
    return JSON.parse(localStorage.getItem("task"));
  } else {
    return [];
  }
};
function Home() {
  const [items, setItems] = useState(getLocalStorage());
  const [inputs, setInputs] = useState({
    task_title: "",
    task_description: "",
    priority_level: "",
    completed: false,
  });

  const addtask = (e) => {
    e.preventDefault();
    setItems([...items, inputs]);
    toast.success("Task Added", {
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

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(items));
  }, [items]);
  return (
    <div className={"container-fluid mb-lg-5 add_task_container"}>
      <img src={image} alt={"..."} />
      <p className={"text"}>Add Your Task</p>
      <div className={"container task_form"}>
        <form onSubmit={addtask}>
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
                rows="3"
                maxLength={250}
                minLength={40}
                name={"task_description"}
                onChange={handleChange}
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
                />
                <label className="form-check-label" htmlFor={"low"}>
                  Low
                </label>
              </div>
            </div>
          </fieldset>
          <div className="row mb-3 button">
            <button type={"submit"} className={"add_task_button"}>
              <FontAwesomeIcon icon="fa-solid fa-plus" />
              Add Task
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Home;
