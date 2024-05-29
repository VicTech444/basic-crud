interface Props {
    taskName: string;
    taskDescription: string;
}

const fetchDbInfo = async ({ taskName, taskDescription }: Props) => {
    let data = await fetch(`http://localhost:3000/tasks/`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            taskName,
            taskDescription
        })
    }).then((res) => res.json());
    return data
}

export const newTask = async ({ taskName, taskDescription }: Props) => {
    await fetchDbInfo({ taskName, taskDescription });
    window.history.back();
}