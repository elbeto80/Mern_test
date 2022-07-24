import { Router } from "express";
import { dbConection } from "./config.js";

const routerIndex = Router();

routerIndex.get("/", async (req, res) => {
  const result = await dbConection.query("select 1+1 as result");

  console.log(result);

  res.status(200).json({ message: "ok" });
});

export default routerIndex;
