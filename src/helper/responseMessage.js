import { NextResponse } from "next/server"


export const getResponseMessage = (message,statuscode,success)=>{
    return NextResponse.json({
        message:message,
        success:success
    },{
        status :statuscode
    }
    )
}