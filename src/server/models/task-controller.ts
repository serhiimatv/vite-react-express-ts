import { Response, Request } from "express";
import Task from "./task";

class Controller {
  getAlltask = async (_: Request, res: Response) => {
    try {
      const response = await Task.find();

      return res.status(200).json(response);
    } catch (error) {
      console.log(error);
      return res.status(501).json(error);
    }
  };
  createTask = async (req: Request, res: Response) => {
    const { title } = req.body;

    try {
      const task = await Task.create({ title });
      return res.json(task);
    } catch (error) {
      console.log(error);
      return res.status(501).json(error);
    }
  };
  deleteTask = async (req: Request, res: Response) => {
    try {
      const task = await Task.deleteOne({ _id: req.params.id });

      return res.status(200).json(task);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  };
  updateTask = async (req: Request, res: Response) => {
    try {
      const task = await Task.findOneAndUpdate(
        { _id: req.body._id },
        { completed: !req.body.completed },
        { new: true }
      );
      return res.status(200).json(task);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  };
}

const TaskController = new Controller();

export default TaskController;
