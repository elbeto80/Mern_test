import axios from "axios";

export const createTask = async (task) => {
  return await axios.post("http://localhost:4000/tasks", task);
};
