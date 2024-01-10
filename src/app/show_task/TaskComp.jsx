import UserContext from "@/context/userContext";
import React, { useContext } from "react";
import {RxCross1} from "react-icons/rx"

const TaskComp = ({ task,deleteTaskParent }) => {




  const { user } = useContext(UserContext);


  function deleteTaskj(taskId){
    console.log(taskId,"tttttttttttttttttttttttttt")
    deleteTaskParent(taskId);
  }
  return (
    <div
      className={` shadow-lg mt-2 rounded-md ${
        task.status == "completed" ? "bg-green-500" : "bg-gray-100"
      }`}
    >
      <div className="p-5">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">{task.title}</h1>
          
          <RxCross1 onClick={()=>{
            deleteTaskj(task._id)
          }} className="shadow-lg rounded-full  hover:animate-spin " />

        </div>
        
        <p className="font-normal">{task.content}</p>
        <div className="flex justify-between mt-2">
          <p className="text-left ">Status: {task.status.toUpperCase()}</p>
          <p className="text-right ">Author: {user.name}</p>
        </div>
      </div>
    </div>
  );
};

export default TaskComp;
