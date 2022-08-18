require("dotenv").config();
import express from "express";
import config from "config";
import connectToDb from "./utils/connectToDb";
import router from "./routes/index";

const app = express();
const port = config.get("port");

app.use(router);

app.listen(port, () => {
  console.log(`App started at http://localhost:${port}`);
  connectToDb();
});
