import mongoose from "mongoose";

const Task = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

export default mongoose.model("Task", Task);
