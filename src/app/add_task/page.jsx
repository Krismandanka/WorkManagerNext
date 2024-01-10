
"use client"
import { addTask } from '@/services/taskService'
import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const AddTask =() => {
  const [task,setTask]=useState({
    title:"",
    content:"",
    status:"none",
    
    
    
  })

  const handleAddTask= async (event)=>{
      event.preventDefault();
      try {

        console.log("mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm");
        const result= await addTask(task);
        toast.success("Your Task Is Added",{
          position:"top-center"
        });
        setTask({
          title:"",
          content:"",
          status:"none"
        })
      } catch (error) {
        console.log("erroetttttttttt",error);
        toast.error("Task Not Added",{
          position:"top-center"
        }
        )
      }

  }



  return (
    <div className='grid grid-cols-12 justify-center'>
        <div className='border border-gray-900 p-5 col-span-6 col-start-4 shadow-gray-700 shadow'> 
          <h1 className='text-3xl'>Add your task here!</h1>
          <form action="" onSubmit={handleAddTask}>
            <div className='mt-4'>
              <label htmlFor="task_title" className='block text-sm font-medium '>Title</label>
              <input type="text" id='task-title' className='w-full p-2.5 rounded bg-gray-300 focus:ring-gray-100' name="task_title" onChange={(event)=>{
                setTask({
                  ...task,
                  title:event.target.value
                })
              }} value={task.title}/>
            </div>

            <div className='mt-4'>
              <label htmlFor="task_content" className='block text-sm font-medium '>Content</label>
              <textarea rows={3} type="text" id='task-content' className='w-full p-2.5 rounded bg-gray-300 focus:ring-gray-100' name="task_content" onChange={(event)=>{
                setTask({
                  ...task,
                  content:event.target.value
                })
              }} value={task.content}/>
            </div>

            <div className='mt-4'>
              <label htmlFor="task_status" className='block text-sm font-medium '>Status</label>
               <select name="task_status" id="task_status" className='w-full p-2.5 rounded bg-gray-300 focus:ring-gray-100'  onChange={(event)=>{
                setTask({
                  ...task,
                  status:event.target.value
                })
              }} value={task.status}>
                <option value="none" disabled>---Select Status</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
               </select>
            </div>
            <div className='mt-4 flex justify-center space-x-5'>
              <button type="submit" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Todo</button>
              <button type="submit" className=" text-white bg-red-600 hover:bg-red-500   font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  ">Clear</button>


            </div>
            
            
          </form>
        </div>
    </div>
    
    
  )
}

export default AddTask;