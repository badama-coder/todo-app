"use client";
import { Tasklist, TaskFilters, TaskForm, TaskItem } from "@/components";
import { ListTodo } from "lucide-react";
import { useState } from "react";
import {Task, FilterType} from "@/types";


const HomePage = () => {
 const [tasks, setTasks] = useState<Task[]>([]);
const [filter, setFilter] = useState<FilterType>("All");

 const createTask = (title:string) =>{
  const newTask: Task = {
    id: Date.now().toString(),
    title,
    completed: false
  };
  setTasks((current)=> [newTask, ...current]);
 };
  
 const deleteTask = (id:string) => {
  setTasks((current)=> current.filter((task)=> task.id !== id))
 };

 const toggleTask = (id:string) => {
  setTasks((current)=> current.map((task)=> (task.id === id ? {...task, completed: !task.completed} : task) ))
 };

const visibleTasks = tasks.filter((task)=> filter === "All" || (filter === "Active" ? !task.completed : task.completed))


  return (
      <div className="bg-white w-2xl rounded-3xl drop-shadow-xl">
        <div className="px-8 pt-8">
          <header className="flex gap-3 mb-6 items-center">
            <div className="bg-[#E5F2ED] rounded-2xl size-11 flex justify-center items-center">
              <ListTodo className="text-[#23735A]" />
            </div>
            <div className="font-semibold text-2xl">My tasks.</div>
          </header>
        
          <TaskForm onCreateTask={createTask} />
          <TaskFilters filter={filter} onFilter={setFilter} />
        </div>
        <Tasklist tasks={visibleTasks} onDelete={deleteTask} onToggle={toggleTask}/>
      </div>
    
  );
};

export default HomePage;
