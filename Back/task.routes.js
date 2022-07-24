import { Router } from "express";

import {
  getTasks,
  getTask,
  addTask,
  updateTask,
  deleteTask,
} from "./task.controller.js";

const routerTask = Router();

routerTask.get("/tasks", getTasks);

routerTask.get("/tasks/:id", getTask);

routerTask.post("/tasks", addTask);

routerTask.put("/tasks/:id", updateTask);

routerTask.delete("/tasks/:id", deleteTask);

export default routerTask;
