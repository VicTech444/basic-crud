const fetchDbInfo = async (id : number) => {
    let data = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "DELETE"
    }).then((res) => res.json());
    return data
}

export const deleteTask = (id : number) => {
    fetchDbInfo(id);
    window.location.reload();
}