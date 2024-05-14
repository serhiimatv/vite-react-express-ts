import express from "express";
import mongoose from "mongoose";
import Task from "./models/Task.ts";

const DB_URL = "mongodb+srv://user:user@cluster0.spttqut.mongodb.net/";

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

app.get("/api/test", (_, res) => res.json({ greeting: "Foo off bar" }));

app.post("/api/task", async (req, res) => {
  const { title } = req.body;

  try {
    const task = await Task.create({ title });
    return res.json(task);
  } catch (error) {
    console.log(error);
  }
});
