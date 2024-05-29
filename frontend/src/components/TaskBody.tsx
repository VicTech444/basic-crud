import { FC } from "react";
import { CompletedSvg } from "./CompletedSvg";
import { NotCompletedSvg } from "./NotCompletedSvg";
import { deleteTask } from "../utils/deleteTask";
import { Link } from "react-router-dom";
import { toggleTask } from "../utils/toggleTask";

interface Props {
  title: string;
  isCompleted: 0 | 1;
  description: string;
  created_at: string;
  id: number;
}

export const TaskBody: FC<Props> = ({
  title,
  isCompleted,
  description,
  created_at,
  id
}) => {
  let svg = isCompleted ? <CompletedSvg /> : <NotCompletedSvg />;
  let nextNumber = isCompleted === 1 ? 0 : 1;
  
  return (
    <article className="w-96 py-4 px-4 bg-stone-500 rounded-md" id={`${id}`}>
      <section className="flex justify-between">
        <span className="text-xl">{title}</span>
        <span className={`${isCompleted ? 'text-green-700' : 'text-red-700'}`}>{svg}</span>
      </section>
      <section className="flex flex-col">
        <span className="text-base">{description}</span>
        <span className="text-sm">{created_at}</span>
      </section>
      <section className="mt-2 text-black flex gap-x-3">
        <button onClick={() => deleteTask(id)}>Delete</button>
        <Link to={`/edit/${id}`}><button>Edit</button></Link>
        <button onClick={() => toggleTask({
          isCompleted: nextNumber,
          id: `${id}`
        })}>Toggle task</button>
      </section>
    </article>
  );
};
