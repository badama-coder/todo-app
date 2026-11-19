import { TaskItem } from "./TaskItem";
import {Task} from "@/types";
import { EmptyPage } from "./EmptyPage";

type TaskListProps ={
  tasks: Task[];
  onDelete: (id:string) => void;
  onToggle: (id:string) => void;
  hasTasks: boolean;
}

export const Tasklist = ({tasks, onToggle, onDelete, hasTasks}: TaskListProps) => {
  if (!tasks.length) return <EmptyPage hasTasks={hasTasks}/>
  return (
    <div className="border-t border-[#E9EEEB] w-full py-2 px-5 flex flex-col gap-1">
      {tasks.map((task)=> (
          <TaskItem key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
          /> 
      ))}
      
    </div>
  )
}
