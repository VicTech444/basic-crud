import { useRef } from "react";
import { newTask } from "../utils/newTask";
import { Link } from "react-router-dom";

interface Props {
  taskName: string;
  taskDescription: string;
}

export const NewTask = () => {
  let taskName = useRef<HTMLTextAreaElement>(null);
  let taskDescription = useRef<HTMLTextAreaElement>(null);

  const handleSaveClick = async ({ taskName, taskDescription }: Props) => {
    if (!taskName) return false;
    if (!taskDescription) return false;

    await newTask({
      taskName,
      taskDescription,
    });
  };

  let url = taskName.current!?.value && taskDescription.current!?.value;

  return (
    <main className="flex items-center justify-center">
      <article className="flex w-96 flex-col gap-y-3 rounded-md bg-stone-500 px-4 py-4">
        <section className="flex justify-center">
          <span className="text-xl text-white">New Task</span>
        </section>
        <section className="flex flex-col items-center gap-y-2">
          <span className="text-base text-white">Task Name</span>
          <textarea
            className="w-full resize-none rounded-lg p-2 text-lg text-black outline-none"
            rows={1}
            ref={taskName}
          />
        </section>
        <section className="flex flex-col items-center gap-y-2">
          <span className="text-base text-white ">Task Description</span>
          <textarea
            className="w-full resize-none rounded-lg p-2 text-lg text-black outline-none"
            rows={5}
            ref={taskDescription}
          />
        </section>
        <section className="mt-2 flex gap-x-3 text-black">
        <Link to={url && '/'} className="mx-auto">
            <button
              className="mx-auto"
              onClick={() =>
                handleSaveClick({
                  taskName: taskName.current!?.value,
                  taskDescription: taskDescription.current!?.value,
                })
              }
            >
              Save
            </button>
          </Link>
        </section>
      </article>
    </main>
  );
};
