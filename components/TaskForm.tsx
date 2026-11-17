import { Form } from "lucide-react";
import {CornerDownLeft} from "lucide-react";

export const TaskForm = () => {
  return (
    <form>
        <div className="bg-[#F4F8F5] border border-[#DCE9E2] rounded-2xl p-2.5 flex gap-2">
          <input type="input" placeholder="What needs to get done?" className="flex-3 p-4"/>
          <button className="flex-1 bg-[#D8E5DD] rounded-xl text-[#63796C] text-sm font-semibold flex items-center gap-2 justify-center"><span className="text-xl font-extralight">+</span>Add task</button>
        </div>
        <div className="text-[#7A8881] text-[11px] flex w-full justify-end mt-3 mb-7 items-center gap-1">
          <CornerDownLeft className="size-3"/> Enter to add a task</div>
    </form>
  )
}
