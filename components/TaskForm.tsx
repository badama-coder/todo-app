import { Form } from "lucide-react"

export const TaskForm = () => {
  return (
    <form>
        <div className="bg-[#F4F8F5] border border-[#DCE9E2] rounded-2xl p-2 flex gap-2">
          <input type="input" placeholder="What needs to get done?" className="flex-3 p-4"/>
          <button className="flex-1 bg-[#D8E5DD] rounded-xl text-[#63796C] text-sm font-semibold">+ Add task</button>
        </div>
        <div className="text-[#7A8881] text-[11px] flex w-full justify-end mt-3 mb-7 items-center gap-1"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 2V5.5C10 6.03043 9.78929 6.53914 9.41421 6.91421C9.03914 7.28929 8.53043 7.5 8 7.5H2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="#7A8881"/>
<path d="M4.5 5L2 7.5L4.5 10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="#7A8881"/>
</svg>
 Enter to add a task</div>
    </form>
  )
}
