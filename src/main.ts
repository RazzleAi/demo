import { Razzle } from "@razzledotai/sdk";
import * as process from "process";
import { ExpenseManagerModule } from "./expense-manager";
import { ExpenseManagerService } from "./expense-manager.service";
import * as http from "http";
import * as dotenv from "dotenv";

dotenv.config();

function startApp() {
  Razzle.app({
    appId: process.env.RAZZLE_APP_ID,
    apiKey: process.env.RAZZLE_API_KEY,
    modules: [
      // { module: TodoModule, deps: [new TodoService()] },
      { module: ExpenseManagerModule, deps: [new ExpenseManagerService()] },
    ],
  });

  const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello World!");
    res.end();
  });

  server.listen(7001, "localhost", () => {
    console.log("Server started on port 7000");
  });
}

startApp();
