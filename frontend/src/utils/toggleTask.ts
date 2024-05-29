import { validatePartialTasksInfo } from "./validations";

interface Props {
    isCompleted: number;
    id: string;
}

const fetchDbInfo = async ({ isCompleted, id }: Props) => {
    let data = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            isCompleted
        })
    }).then((res) => res.json());
    return data
}

export const toggleTask = async ({ isCompleted, id }: Props) => {
    let data = validatePartialTasksInfo({
        isCompleted
    });
    
    if (!data.success){
        console.log(JSON.parse(data.error.message))
        return
    };

    await fetchDbInfo({ isCompleted, id });
    window.location.reload();
}