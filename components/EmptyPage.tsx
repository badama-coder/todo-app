import {Check} from "lucide-react";

type HasTasksType = {
    hasTasks: boolean;
}

export const EmptyPage = ({hasTasks}: HasTasksType) => {
  return (
    <div>
        <div className="flex flex-col justify-center items-center h-60 gap-2">
            <div className="bg-[#F0F6F2] rounded-full p-4 text-[#6C9B82]"><Check/></div>
            <div className="text-[#304C3E] font-semibold">{`${hasTasks ? "No tasks here" : "Your list starts here"}`}</div>
            <div className="text-[#7A8881] text-sm">{`${hasTasks ? "Try another filter to see your tasks." : "Add your first task above."}`}</div>
          </div>
    </div>
  )
}
