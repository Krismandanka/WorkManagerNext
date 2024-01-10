import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";





export async function GET(request,{params}){
    const {taskId} = params;
    console.log(taskId)
    try{
        const task = await Task.findById({_id:taskId});
        // console.log(task);
        return NextResponse.json(task);
    }
    catch(error){
        return getResponseMessage("task one failed",404,false);
    }


}

export async function PUT(request,{params}){
    const {taskId} = params;
    const {title,content,status}= await request.json();
    try{
        let task = await Task.findById({_id:taskId});
        task.title = title;
        task.content = content;
        task.status = status;
        await task.save();
        return NextResponse.json(task);

    }
    catch(error){
        return getResponseMessage("issue in update task",404,false);

    }
}

export async function DELETE(request,{params}){
    const {taskId} = params;

    try{
        await Task.findByIdAndDelete({_id:taskId});
        
        return getResponseMessage("deleted task",200,true)

    }
    catch(error){
        return getResponseMessage("issue in delte",404,false);

    }
}