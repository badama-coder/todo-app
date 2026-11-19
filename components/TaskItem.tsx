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

  const [check, setCheck] = useState(false);
  const handleCheck = (id:string) => (event: ChangeEvent<HTMLInputElement>)=>{
      setCheck(event.target.checked);
      onToggle(id);
  };

  

  return (
    <div className={`flex w-full gap-3 justify-between items-center p-3 hover:bg-[#F8FAF8] rounded-xl ${check ? "bg-[#F8FAF8]" : ""}`}>
      <div className="relative flex items-center justify-center size-10">
          <input type="checkbox" onChange={handleCheck(task.id)} className="appearance-none size-5 border-2 border-[#BDCDC2] rounded-full checked:bg-[#3A8366] checked:border-0 cursor-pointer" />
          <Check className={`absolute size-3.5 text-white pointer-events-none ${check ? "block" : "hidden"}`}/>
      </div>
      <div className={`flex-1 font-medium text-sm ${check? "text-[#93A096] line-through" : "text-[#30483C]"}`}>{task.title}</div>
      <button onClick={handleDelete} className="flex justify-center items-center text-[#93A198] size-10 hover:bg-red-100 hover:text-red-400 rounded-2xl"><Trash className="size-4"/></button>
    </div>
  )
}
