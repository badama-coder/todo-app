import {Check} from "lucide-react";
import { TaskItem } from "./TaskItem";
import {Task} from "@/types";

type TaskListProps ={
  tasks: Task[];
  onDelete: (id:string) => void;
  onToggle: (id:string) => void;
}

export const Tasklist = ({tasks, onToggle, onDelete}: TaskListProps) => {
  return (
    <div className="border-t border-[#E9EEEB] w-full py-2 px-5 ">
      {/* <div className="flex flex-col justify-center items-center h-60 gap-2">
        <div className="bg-[#F0F6F2] rounded-full p-4 text-[#6C9B82]"><Check/></div>
        <div className="text-[#304C3E] font-semibold">Your list starts here</div>
        <div className="text-[#7A8881] text-sm">Add your first task above.</div>
      </div> */}
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
