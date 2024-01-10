
"use client"
import UserContext from '@/context/userContext';
import { deleteTasks, getTaskUser } from '@/services/taskService'
import React, { useContext, useEffect, useState } from 'react'
import TaskComp from './TaskComp';
import { toast } from 'react-toastify';
const ShowTasks = () => {
    const [tasks,setTasks]= useState([]);

    const context = useContext(UserContext);

    async function loadTask(userId){
        try {
            const tasks=await getTaskUser(userId);
            setTasks([...tasks].reverse());
            console.log(tasks)
        } catch (error) {
            console.log(error);
        }
    }


    async function deleteTaskParent(taskId){
        
        try {
            const result = await deleteTasks(taskId);
            console.log(result,"kkkkkkkkkkkkkkk");
            const newTasks = tasks.filter(item=>item._id!= taskId)
            setTasks(newTasks)

            toast.success("task is deleted")
        } catch (error) {
            console.log(error);
            toast.error("Error in deleteing Task")
        }
    }

useEffect(() => {
  
    if(context.user){
        console.log("hhhhhhhhhhhh",context.user._id)
        loadTask(context.user._id);
    }

  
}, [context.user])


  return (
    <div className=' grid grid-cols-12 mt-3'>
        <div className='col-span-6 col-start-4'>
            <h1 className='text-3xl text-center mb-3'>Your Tasks ( {tasks.length} )</h1>
            {tasks.map((task)=>(
                <TaskComp task={task} key={task._id} deleteTaskParent={deleteTaskParent}/>
            ))}


        </div>
    </div>
  )
}

export default ShowTasks