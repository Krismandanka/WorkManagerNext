import { use } from "react";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

// import { connectdb } from "@/helper/db";
export async function DELETE(request,{params}){
    const {userId}= params;


    try{
        await User.deleteOne({_id:userId});
        return NextResponse.json({
            message:"user deleted",
            success:true
        })

    }
    catch(error){
        return NextResponse.json({
            message:"delete issur",
            success:false
        })
    }
}
export async function GET(request,{params}){
    const {userId}= params;


    try{
        const user = await User.findById({_id:userId});
        return NextResponse.json(user)

    }
    catch(error){
        return NextResponse.json({
            message:"one user find issur",
            success:false
        })
    }
}

export async function PUT(request,{params}){
    const {userId}= params;
    const {name,email,password} = await request.json();


    try{
        const user = await User.findById({_id:userId});
        user.name = name;
        user.email= email;
        user.password = password;

        const newUser = await user.save();



        return NextResponse.json(newUser)

    }
    catch(error){
        return NextResponse.json({
            message:"issue update user",
            success:false
        })
    }
}