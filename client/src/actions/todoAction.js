import { Add_Task, Delete_Task, Update_Task } from "../constants.js";

export const addTask = (data) => {
  return {
    type: Add_Task,
    payload: data,
  };
};
export const deleteTask = () => {
  return {
    type: Delete_Task,
  };
};
export const updateTask = () => {
  return {
    type: Update_Task,
  };
};
