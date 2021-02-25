import "reflect-metadata";
import * as express from "express";

import createConnection from "./database";
import router from "./routes";

createConnection();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

export default app;
