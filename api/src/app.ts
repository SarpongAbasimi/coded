import { app } from "./server/index";

const port = 8080;

app.listen(port, (): void => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
