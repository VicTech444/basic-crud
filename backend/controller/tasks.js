import { TasksModel } from "../model/task.js"
import { validatePartialTasksInfo, validateTasksInfo } from "../schema/validate.js";

export class TasksController {
    static async getAllTasks (req, res) {
        let data = await TasksModel.getAllTasks();

        if (!data) {
            res.status(400).json({message: `Theres been an error with the request ${data}`})
            return;
        }
    
        res.status(200).json(data)
    }

    static async createNewTask (req, res) {
        let validation = validateTasksInfo(req.body);

        if (validation.error) {
            res.status(400).json({message: JSON.parse(validation.error.message)});
            return;
        }

        let data = await TasksModel.createNewTask(validation.data);
        
        if (data.serverStatus !== 2) {
            res.status(500).json({message: "An error occured while connecting with the server"});
            return;
        }
    
        if (!data.affectedRows) {
            res.status(500).json({message: "An error occured while creating the task, try again later"})
            return;
        }

        res.status(200).json(validation.data);
    }

    static async updateTask (req, res) {
        let validation = validatePartialTasksInfo(req.body);
        if (!validation.success) {
            res.status(400).send({message: JSON.parse(validation.error.message)})
            return;
        }

        let {id} = req.params;
        let data = await TasksModel.updateTask({
            id: id,
            input: validation.data
        })

        if (!data) {
            res.status(400).json({message: "No information found to update"});
            return
        }

        if (data.serverStatus !== 2) {
            res.status(500).json({message: "An error occured while connecting with the server"});
            return;
        }
    
        if (!data.affectedRows) {
            res.status(500).json({message: "An error occured while updating the task, try again later"})
            return;
        }

        res.status(200).json(validation.data);
    }

    static async deleteTask (req, res) {
        let {id} = req.params;

        let data = await TasksModel.deleteTask(id)
    
        if (data.serverStatus !== 2) {
            res.status(500).json({message: "An error occured while connecting with the server"});
            return;
        }

        if (!data.affectedRows) {
            res.status(400).json({message: "Task already deleted"})
            return;
        }

        res.status(200).json({message: "Task succesfully deleted"})
    }
}   