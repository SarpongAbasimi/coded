import express, { Express } from "express";
import bodyParser from "body-parser";

export const app: Express = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/v1/auth", require("../routes/auth/auth"));
