import z from 'zod';

interface Props {
    taskName?: string;
    taskDescription?: string;
    isCompleted?: number;
}

const taskSchema = z.object({
    taskName : z.string({
        message: "task name field is necessary"
    }).min(5).max(100),
    taskDescription : z.string().min(5).max(400),
    isCompleted: z.number({
        message: "Field must be only a number"
    }).min(0).max(1).default(0)
})

export const validateTasksInfo = (task : Props) => {
    return taskSchema.safeParse(task);
}

export const validatePartialTasksInfo = (tasks : Props) => {
    let arrTasks : [string, string][] = Object.entries(tasks);

    let newTasks : [string, string][] = [];

    for(let i = 0; i < arrTasks.length; i++){
        if (arrTasks[i][1]){
            newTasks.push([arrTasks[i][0], arrTasks[i][1]]);
        }
    }

    let tasksReduced = Object.fromEntries(newTasks);

    return taskSchema.partial().safeParse(tasksReduced);
}