import { dbConection } from "./config.js";

export const getTasks = async (req, res) => {
  const [tasks] = await dbConection.query("select * from tasks");

  res.status(200).json({ tasks });
};

export const getTask = async (req, res) => {
  const { id } = req.params;

  console.log(req.body);

  const [task] = await dbConection.query("select * from tasks where id = ?", [
    id,
  ]);

  if (task.length == 0)
    return res.status(404).json({ message: "id no encontado" });

  res.status(200).json(task[0]);
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
