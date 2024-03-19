import {
  Add_Task,
  Delete_Task,
  Toggle_Status,
  Update_Task,
} from "../constants.js";
import { useEffect, useState } from "react";

const getLocalStorage = () => {
  let tasks = localStorage.getItem("task");
  if (tasks) {
    return JSON.parse(localStorage.getItem("task"));
  } else {
    return [];
  }
};

export const todoReducer = (state = getLocalStorage(), action) => {
  switch (action.type) {
    case Add_Task:
      state = [...state, action.payload];
      localStorage.setItem("task", JSON.stringify(state));
      return state;
    case Delete_Task:
      let id = action.payload;
      const newState = [...state];
      newState.splice(id, 1);
      state = newState;
      localStorage.setItem("task", JSON.stringify(state));
      return newState;
    case Toggle_Status:
      let info = action.payload;
      const newStatus = [...state];
      newStatus[info.index].completed = !info.status;
      state = newStatus;
      localStorage.setItem("task", JSON.stringify(state));
      return state;
    case Update_Task:
      let updateTask = action.payload;
      const updatedTask = [...state];
      updatedTask[updateTask.previousDataIndex] = updateTask.updateinputs;
      localStorage.setItem("task", JSON.stringify(updatedTask));
      return updatedTask;
    default:
      return state;
  }
};
