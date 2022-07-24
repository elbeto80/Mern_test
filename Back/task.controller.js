import { dbConection } from "./config.js";

export const getTasks = (req, res) => {
  res.send("Onteniendo todo");
};

export const getTask = (req, res) => {
  res.send("Onteniendo una");
};

export const addTask = async (req, res) => {
  const { title, description } = req.body;

  const [result] = await dbConection.query(
    "INSERT INTO tasks (title, description) VALUES (?, ?)",
    [title, description]
  );
  console.log(result);

  res.status(200).json({ id: result.insertId, title, description });
};

export const updateTask = (req, res) => {
  res.send("actualizando");
};

export const deleteTask = (req, res) => {
  res.send("eliminando");
};
