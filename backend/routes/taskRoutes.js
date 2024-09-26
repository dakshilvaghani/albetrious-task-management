import express from "express";
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
  filterTaskByDate,
} from "../controllers/taskController.js";
// import { isAdminRoute } from "../middlewares/authmiddlewares.js";
const router = express.Router();

router.post("/create", createTask);
router.get("/", getTasks);

router.get("/filter", filterTaskByDate);
router.get("/:id", getTask);
router.put("/update/:id", updateTask);

router.delete("/delete/:id", deleteTask);

export default router;
