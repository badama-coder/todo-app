"use client";
import { Tasklist, TaskFilters, TaskForm } from "@/components";
import { ListTodo } from "lucide-react";

const HomePage = () => {
  return (
      <div className="bg-white w-2xl rounded-3xl">
        <div className="px-8 pt-8">
          <header className="flex gap-3 mb-6 items-center">
            <div className="bg-[#E5F2ED] rounded-2xl size-10 flex justify-center items-center">
              <ListTodo className="text-[#23735A]" />
            </div>
            <div className="font-semibold text-2xl">My tasks.</div>
          </header>
          <TaskForm />
          <TaskFilters />
        </div>
        <Tasklist/>
      </div>
    
  );
};

export default HomePage;
