import "reflect-metadata";
import express from "express";
import {router} from "./services/routes";

import "./database";

const app = express();

app.use(express.json());

app.use(router);

// http://localhost:3000
app.listen(3000, () => console.log("server is running"));