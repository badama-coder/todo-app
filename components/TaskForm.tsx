import { Form } from "lucide-react";
import {CornerDownLeft} from "lucide-react";
import { ChangeEvent, useState, SubmitEvent } from "react";

type TaskFormProps = {
  onCreateTask: (title:string) => void;
};

export const TaskForm = ({onCreateTask}: TaskFormProps) => {
  const [taskTitle, setTaskTitle] = useState("");
  const handleChange =(event: ChangeEvent<HTMLInputElement>)=>{
    setTaskTitle(event.target.value); 

  };
  const handleSubmit = (event: SubmitEvent<HTMLFormElement>)=>{
    event.preventDefault();
    onCreateTask(taskTitle);
    setTaskTitle("")
  };

  const hasValue = taskTitle.trim().length > 0;
  
  return (
    <form onSubmit={handleSubmit}>
        <div className="bg-[#F4F8F5] border border-[#DCE9E2] rounded-2xl p-2 flex gap-2">
          <input id="new-task" value={taskTitle} onChange={handleChange} placeholder="What needs to get done?" className="flex-3 p-3.5 focus:bg-white focus:outline-none rounded-2xl"/>
          <button type="submit" disabled={!hasValue} className={`flex-1 rounded-xl text-sm font-semibold flex items-center gap-2 justify-center ${hasValue ? "bg-[#236B53] text-white cursor-pointer" : "bg-[#D8E5DD] text-[#63796C] cursor-not-allowed"}`}><span className="text-xl font-extralight">+</span>Add task</button>
        </div>
        <div className="text-[#7A8881] text-[11px] flex w-full justify-end mt-3 mb-7 items-center gap-1">
          <CornerDownLeft className="size-3"/> Enter to add a task
        </div>
        
    </form>
  )
}
