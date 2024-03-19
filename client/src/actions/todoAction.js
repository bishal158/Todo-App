import {
  Add_Task,
  Delete_Task,
  Toggle_Status,
  Update_Task,
} from "../constants.js";

export const AddTask = (data) => {
  return {
    type: Add_Task,
    payload: data,
  };
};
export const DeleteTask = (id) => {
  return {
    type: Delete_Task,
    payload: id,
  };
};
export const UpdateTask = (updateTask) => {
  return {
    type: Update_Task,
    payload: updateTask,
  };
};

export const ToggleStatus = (info) => {
  return {
    type: Toggle_Status,
    payload: info,
  };
};
