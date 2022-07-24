import { createPool } from "mysql2/promise";

export const PORT = 4000;

export const dbConection = createPool({
  host: "localhost",
  port: 3306,
  user: "beto",
  password: "x",
  database: "mern",
});
