"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./server/index");
const port = 8080;
index_1.app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
