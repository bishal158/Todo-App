import { createSlice } from "@reduxjs/toolkit";

const getLocalStorage = () => {
  let tasks = localStorage.getItem("task");
  if (tasks) {
    return JSON.parse(localStorage.getItem("task"));
  } else {
    return [];
  }
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    isLoading: false,
    success: false,
    todos: getLocalStorage(),
  },
  reducers: {
    addTask: (state, action) => {
      state.todos = [...state.todos, action.payload];
      localStorage.setItem("task", JSON.stringify(state.todos));
    },
    deleteTask: (state, action) => {
      const newState = [...state.todos];
      newState.splice(action.payload, 1);
      state.todos = newState;
      localStorage.setItem("task", JSON.stringify(state.todos));
    },
    updateTask: (state, action) => {
      let updateTask = action.payload;
      const updatedTask = [...state.todos];
      updatedTask[updateTask.previousDataIndex] = updateTask.updateinputs;
      state.todos = updatedTask;
      localStorage.setItem("task", JSON.stringify(state.todos));
    },
    toggleTask: (state, action) => {
      let info = action.payload;
      const newStatus = [...state.todos];
      newStatus[info.index].completed = !info.status;
      state.todos = newStatus;
      localStorage.setItem("task", JSON.stringify(state.todos));
    },
  },
  extraReducers: () => {},
});
export default todoSlice.reducer;
export const { addTask, deleteTask, updateTask, toggleTask } =
  todoSlice.actions;
