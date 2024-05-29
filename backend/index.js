import e from "express";
import { taskRouter } from "./routes/tasks.js";
import { corsMiddleware } from './middleware/cors.js'

let PORT = process.env.PORT || 3000;

const app = e();

app.use(e.json());
app.use(corsMiddleware());
app.use('/tasks', taskRouter);

app.listen(PORT, () => {
    console.log(`listening to port http://localhost:${PORT}`)
})