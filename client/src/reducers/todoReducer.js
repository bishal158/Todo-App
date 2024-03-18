import { Add_Task } from "../constants.js";
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
    default:
      return state;
  }
};
