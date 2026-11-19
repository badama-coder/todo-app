import {Trash} from "lucide-react";
import {Check} from "lucide-react";
import { ChangeEvent } from "react";
import { useState } from "react";
import { Task } from "@/types";


type TaskListProps ={
  task: Task;
  onDelete: (id:string) => void;
  onToggle: (id:string) => void;
};

export const TaskItem = ({task, onToggle, onDelete}: TaskListProps) => {
  const handleDelete = ()=> {
      onDelete(task.id);
  };

  
  const handleCheck = (id:string) => ()=>{
      onToggle(id);
  };

  

  return (
    <div className={`flex w-full gap-3 shadow-2xs justify-between items-center p-3 hover:bg-[#F8FAF8] rounded-xl ${task.completed ? "bg-[#F8FAF8]" : ""}`}>
      <div className="relative flex items-center justify-center size-10">
          <input type="checkbox" checked={task.completed} onChange={handleCheck(task.id)} className="appearance-none size-5 border border-[#BDCDC2] rounded-full checked:bg-[#3A8366] checked:border-0 cursor-pointer" />
          <Check className={`absolute size-3.5 text-white pointer-events-none ${task.completed ? "block" : "hidden"}`}/>
      </div>
      <div className={`flex-1 font-medium text-sm ${task.completed ? "text-[#93A096] line-through" : "text-[#30483C]"}`}>{task.title}</div>
      <button onClick={handleDelete} className="flex justify-center items-center text-[#93A198] size-10 hover:bg-red-100 hover:text-red-400 rounded-2xl cursor-pointer"><Trash className="size-4"/></button>
    </div>
  )
}
