
export const TaskFilters = () => {
  return <div className="flex w-full justify-between items-center">
    <div className="flex gap-7 text-sm text-[#7B8680] py-3 font-semibold">
      <div>All</div>
      <div>Active</div>
      <div>Completed</div>
    </div>
    <div className="text-[#65766C] bg-[#F0F4F1] p-1 rounded-md text-xs">0</div>
  </div>;
};
