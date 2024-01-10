import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { connectdb } from "@/helper/db";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";


connectdb();
export async function POST(request) {
  const { title, content, userId, status } = await request.json();

  const authToken = request.cookies.get("authToken")?.value;

  const data = jwt.verify(authToken, process.env.JWT_KEY);

  try { 
    const tak = new Task({
      title,
      content,
      userId: data._id,
      status,
    });
    const createdTak = await tak.save();

    return NextResponse.json(createdTak, {
      status: 201,
    });
  } catch (error) {
    return getResponseMessage("issue in task making", 400, false);
  }
}

export async function GET(request) {
  // const {title,content,userId}= await request.json();
  try {
    // const tak = new Task({
    //     title,content,userId
    // })
    // const createdTak = await tak.save();
    const tt = await Task.find();
    console.log("ppppppppppppppppppppppppppp", tt);
    return NextResponse.json(tt);
  } catch (error) {
    return NextResponse.json({
      message: "no get tasks",
      success: false,
    });
  }
}
