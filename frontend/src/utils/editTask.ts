import { validatePartialTasksInfo } from "./validations";

interface Props {
    taskName: string;
    taskDescription: string;
    id: string;
}

const fetchDbInfo = async ({ taskName, taskDescription, id }: Props) => {
    let data = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            taskName,
            taskDescription
        })
    }).then((res) => res.json());
    return data
}

export const editTask = async ({ taskName, taskDescription, id }: Props) => {
    let data = validatePartialTasksInfo({
        taskName,
        taskDescription
    });

    if (!data.success) {
        console.log(JSON.parse(data.error.message))
        return
    };

    await fetchDbInfo({ taskName, taskDescription, id });
    window.history.back()
}