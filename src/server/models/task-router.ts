import express from "express";
import TaskController from "./task-controller";

const taskRouter = express.Router();

taskRouter.get("/test", (_, res) => res.json({ greeting: "Foo off bar" }));

taskRouter.get("/task", TaskController.getAlltask);

taskRouter.post("/task", TaskController.createTask);

taskRouter.delete("/task/:id", TaskController.deleteTask);

taskRouter.patch("/task", TaskController.updateTask);

export default taskRouter;
