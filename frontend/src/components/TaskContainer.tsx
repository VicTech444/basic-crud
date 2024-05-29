import { dbInfo } from "../fetch/dbInfo";
import { returnProps } from "../interface/interfaces";
import { TaskBody } from "./TaskBody";

export const TaskContainer = () => {
  let { response } = dbInfo();

  if (response.isError) {
    return <h1>An error has been occured + {response.error.message}</h1>;
  }

  let data = response.data! as unknown as returnProps[];

  return (
    <main className="flex flex-col justify-center gap-y-6 bg-stone-700 p-10">
      <h1 className="text-center text-2xl">Tasks</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {response.isLoading ? (
          <h1 className="text-2xl">Loading Content</h1>
        ) : (
          data.map((task) => (
            <TaskBody
              isCompleted={task.isCompleted}
              key={task.id}
              created_at={task.created_at}
              title={task.taskName}
              description={task.taskDescription}
              id={task.id}
            />
          ))
        )}
      </div>
    </main>
  );
};
