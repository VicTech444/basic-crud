import { db } from "../db/connection.js";

export class TasksModel {
    static async getAllTasks () {
        let [data] = await db.query("SELECT * FROM TasksInfo");
        return data
    }
    
    static async createNewTask (input) {
        let {taskName, taskDescription} = input
        let SQL = "INSERT INTO TasksInfo (taskName, taskDescription) VALUES (?, ?)"
        let [data] = await db.query(SQL, [taskName, taskDescription])

        return data;
    }

    static async updateTask ({input, id}) {
        let {taskName, taskDescription, isCompleted} = input;
        let fields = [];
        let values = [];

        if (taskName) {
            fields.push('taskName = ?');
            values.push(taskName);
        }

        if (taskDescription) {
            fields.push('taskDescription = ?');
            values.push(taskDescription);
        }

        if (isCompleted || isCompleted === 0) {
            fields.push('isCompleted = ?');
            values.push(isCompleted);
        }

        if (fields.length === 0) {
            return false;
        }

        let sql = `UPDATE TasksInfo SET ${fields.join(", ")} WHERE id = ${id}`
        
        let [data] = await db.query(sql, values);

        return data;
    }

    static async deleteTask (id) {
        let [data] = await db.query(`DELETE FROM TasksInfo WHERE id = ${id}`);

        return data
    }
}