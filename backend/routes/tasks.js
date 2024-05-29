import { Router } from "express";
import { TasksController } from "../controller/tasks.js";

export const taskRouter = Router();

taskRouter.get('/', TasksController.getAllTasks);
taskRouter.post('/', TasksController.createNewTask);
taskRouter.patch('/:id' , TasksController.updateTask);
taskRouter.delete('/:id', TasksController.deleteTask);