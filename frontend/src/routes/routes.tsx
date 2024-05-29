import { Navigate, createBrowserRouter} from "react-router-dom";
import { Tasks } from "../pages";
import { NewTask } from "../pages/newTask";
import { EditTask } from "../pages/edit";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Tasks />
    },
    {
        path: '/new',
        element: <NewTask />
    },
    {
        path: '/edit/:id',
        element: <EditTask />

    },
    {
        path: '*',
        element: <Navigate to={'/'}/>
    }
])