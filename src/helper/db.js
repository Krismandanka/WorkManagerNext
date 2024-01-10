

import mongoose from "mongoose"
require('dotenv').config();
import { User } from "@/models/user";

export const connectdb  = async ()=>{
    try{
        // console.log(process.env.MONGODB_URI)
        const {connection} = await mongoose.connect(process.env.MONGODB_URI,{
            dbName:"work_manager",
        })


        console.log("db connected");

        // const uuser = new User({
        //     name:"kris",
        //     email:"nsk@gmal.com",
        //     password:"vgdeuj"
        // })
        // await uuser.save();
        // console.log("user is creat ed")

        
    }
    catch(error){
        console.log("failed to connect with dtabase");
        // console.log(error);
    }
}
// export const  connectdb = async () => {
//     await mongoose.connect(process.env.MONGODB_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology:true,
//     })
//     .then(() => console.log("DB Connected Successfully"))
//     .catch( (error) => {
//         console.log("DB Connection Failed");
//         console.error(error);
//         // process.exit(1);
//     } )
// };

