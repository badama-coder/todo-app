import { FilterType } from "@/types";

const filters:FilterType[] = ["All", "Active", "Completed"]

type TaskFilterProps = {
  filter: FilterType;
  onFilter: (filter:FilterType)=> void;
}

export const TaskFilters = ({filter, onFilter}:TaskFilterProps) => {
  const handleClick = (filterValue:FilterType)=> () => {
    onFilter(filterValue);
  };

  return <div className="flex w-full justify-between items-center">
    <div className="flex gap-7 text-sm text-[#7B8680] py-3 font-semibold">
      {filters.map((item:FilterType)=> (
        <button onClick={handleClick(item)} id={item} key={item}>{item}</button>
      ))}
    </div>
    <div className="text-[#65766C] bg-[#F0F4F1] px-2 py-1 rounded-md text-xs">0</div>
  </div>;
};
