import { dbConection } from "./config.js";

export const getTasks = async (req, res) => {
  try {
    const [tasks] = await dbConection.query("select * from tasks");

    return res.status(200).json({ tasks });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTask = async (req, res) => {
  try {
    const { id } = req.params;

    const [task] = await dbConection.query("select * from tasks where id = ?", [
      id,
    ]);

    if (task.length == 0)
      return res.status(404).json({ message: "id no encontado" });

    return res.status(200).json(task[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const addTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    const [result] = await dbConection.query(
      "INSERT INTO tasks (title, description) VALUES (?, ?)",
      [title, description]
    );

    return res.status(200).json({ id: result.insertId, title, description });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const result = await dbConection.query("UPDATE tasks SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const [result] = await dbConection.query("delete from tasks where id = ?", [
      id,
    ]);

    if (result.affectedRows == 0)
      return res.status(404).json({ message: "id no encontado" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
