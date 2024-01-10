import { connectdb } from "@/helper/db";
import { NextResponse } from "next/server"
import { User } from "@/models/user";
import bcrypt from "bcryptjs"

connectdb();
export async  function GET(request){
    
    try{
        let users = await User.find();
        // console.log("ppppppppppppppp",users)
        return NextResponse.json(users);
    }
    catch(error){
        return NextResponse.json({
            message:"failed to not founf user",
            status:false
        })
    }


    
}

export async function POST(request){
    const {name,email,password} = await request.json();
    // console.log("pppppppppp",await request.json());
    try {

        console.log("whoooo")

        const uu = await User.findOne({email});
        if(uu){
            return NextResponse.json({
                message:"failed to create user multiple email not allowed",
                status:false
            })
        }
        const user = new User({
            name,email,password
        })
        

        user.password = bcrypt.hashSync(user.password,10);
        console.log("meeeeeeeeee");
        console.log(user);


        
        const createdUser = await user.save();
        const res = NextResponse.json(
            user,{
                status:201
            }
        )
        return res;
    
    } catch (error) {
        return NextResponse.json({
            message:"failed to create user",
            status:false
        })
    }
}