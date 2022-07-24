import express from "express";
import { PORT } from "./config.js";

import routerIndex from "./index.routes.js";
import routerTask from "./task.routes.js";

const app = express();

app.use(express.json());

app.use(routerIndex);
app.use(routerTask);

app.listen(PORT);

console.log(`servedir corriendo en puerto ${PORT}`);
