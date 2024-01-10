


import { User } from "@/models/user";
import { NextResponse } from "next/server";
import { Task } from "@/models/task";

// import { connectdb } from "@/helper/db";
export async function GET(request,{params}){
    const {userId}= params;


    try{
       let tasks = await Task.find({userId:userId})
       return NextResponse.json(tasks)

    }
    catch(error){
        return NextResponse.json({
            message:"all task of user no issue",
            success:false
        })
    }
}