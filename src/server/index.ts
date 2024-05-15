import express from "express";
import mongoose from "mongoose";
import taskRouter from "./models/task-router";

const DB_URL = import.meta.env.VITE_DB_URL;

export const app = express();

async function startDB() {
  try {
    await mongoose.connect(DB_URL);
  } catch (error) {
    console.log(error);
  }
}
startDB();
app.use(express.json());

app.use("/api", taskRouter);

if (!process.env["VITE"]) {
  const frontendFiles = process.cwd() + "/dist";
  app.use(express.static(frontendFiles));
  app.get("/*", (_, res) => {
    res.send(frontendFiles + "/index.html");
  });
  app.listen(process.env["PORT"], () =>
    console.log(`Start express on port ${process.env["PORT"]}`)
  );
}
