import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 8080;

app.get("/", (_: Request, res: Response) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
