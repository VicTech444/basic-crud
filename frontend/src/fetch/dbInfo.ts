import { useQuery } from "@tanstack/react-query";

const fetchDbInfo = async () => {
    let data = await fetch('http://localhost:3000/tasks').then((res) => res.json());
    return data
}

export const dbInfo = () => {
    let response = useQuery({
        queryKey: ['db-info'],
        queryFn: fetchDbInfo,
        staleTime: 1000 * 60 * 5
    })

    return {response}
}