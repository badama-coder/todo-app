import { FilterType, Task } from "@/types";

const filters:FilterType[] = ["All", "Active", "Completed"]

type TaskFilterProps = {
  filter: FilterType;
  onFilter: (filter:FilterType)=> void;
  tasks: Task[];
}

export const TaskFilters = ({filter, onFilter, tasks}:TaskFilterProps) => {
  const handleClick = (filterValue:FilterType)=> () => {
    onFilter(filterValue);
  };

  return <div className="flex w-full justify-between items-center">
    <div className="flex gap-7 text-sm text-[#7B8680] font-semibold">
      {filters.map((item:FilterType)=> (
        <button onClick={handleClick(item)} id={item} key={item} className={`${item === filter ? "border-[#236B53] text-[#236B53]" : "border-b-transparent"} hover:text-[#236B53] cursor-pointer border-b-2 py-3`}>{item}</button>
      ))}
    </div>
    <div className="text-[#65766C] bg-[#F0F4F1] px-2 py-1 rounded-md text-xs">{tasks.length}</div>
  </div>;
};
