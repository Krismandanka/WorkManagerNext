import { httpAxios } from "@/helper/httpHelper";


export async function SignupUser(user){
    const result=await httpAxios.post("/api/users",user).then((response)=>response.data);
    return result;
}



export async function LoginUser(user){
    const result=await httpAxios.post("/api/login",user).then((response)=>response.data);
    return result;
}



export async function currentUser(){
    const result=await httpAxios.get("/api/current").then((response)=>response.data);
    return result;
}



export async function LogOut(){
    const result=await httpAxios.post("/api/logout").then((response)=>response.data);
    return result;
}