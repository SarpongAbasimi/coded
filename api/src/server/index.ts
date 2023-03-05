import express, { Express } from "express";
import bodyParser from "body-parser";

const app: Express = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/v1/auth", require("../routes/auth/auth"));

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
