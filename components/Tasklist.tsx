import {Check} from "lucide-react";

export const Tasklist = () => {
  return (
    <div className="border-t border-[#E9EEEB] w-full py-2 px-5">
      <div className="flex flex-col justify-center items-center h-60 gap-2">
        <div className="bg-[#F0F6F2] rounded-full p-4 text-[#6C9B82]"><Check/></div>
        <div className="text-[#304C3E] font-semibold">Your list starts here</div>
        <div className="text-[#7A8881] text-sm">Add your first task above.</div>
      </div>
    </div>
  )
}
