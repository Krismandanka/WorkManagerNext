

import mongoose from "mongoose"
import { Schema } from "mongoose";

const taskSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    addedDate:{
        type:Date,
        default:Date.now()
    },
    status:{
        type:String,
        enum:["pending","completed"],

        default:"pending"
    },
    userId:{
        type:mongoose.ObjectId,
        required:true,
    }
})

export const Task = mongoose.models.tasks||mongoose.model("tasks",taskSchema);