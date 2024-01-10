
"use client"

import { SignupUser } from '@/services/userService';
import React, { useState } from 'react'
import { toast } from 'react-toastify';


const SignupComponent = () => {


const [data,setData]=useState({
    name:"",
    email:"",
    password:""
})

const dosignup=async (event)=>{
    event.preventDefault();
    try{
      
      const result = await SignupUser(data);
      console.log("birrr",result)
      toast.success("User Sign up ",{
        position:"top-center"
      })
      setData({
        name:"",
        email:"",
        password:""
      })
    }catch(error){
      console.log(error);
      toast.error("sign up errror",{
        position:"top-center"
      })
    }

}




  return (
    <div className='grid grid-cols-12'>
        <div className='border border-gray-900 p-5 col-span-6 col-start-4 shadow-gray-700 shadow rounded'>
            <div className=''>
                <h1 className='text-3xl text-center'>SignUp Here</h1>
                <form action="#!" onSubmit={dosignup}>
                    <div className="mt-3">
                        <label htmlFor="user_name" className='block text-sm font-medium '>Username</label>
                        <input type="text" className='w-full p-2.5 rounded bg-gray-300 focus:ring-gray-100' placeholder='Enter Name' id="user_name" onChange={(event)=>{
                setData({
                  ...data,
                  name:event.target.value
                })
              }} value={data.name}/>
                    </div>
                    <div className="mt-3">
                        <label htmlFor="user_email" className='block text-sm font-medium '>Email</label>
                        <input type="email" id="user_email" className='w-full p-2.5 rounded bg-gray-300 focus:ring-gray-100' placeholder='abc@gmail.com' onChange={(event)=>{
                setData({
                  ...data,
                  email:event.target.value
                })
              }} value={data.email}/>
                    </div>
                    <div className="mt-3">
                        <label htmlFor="user_passwordl" className='block text-sm font-medium '>Password</label>
                        <input type="password" id="user_password" className='w-full p-2.5 rounded bg-gray-300 focus:ring-gray-100' placeholder='Enter Password' onChange={(event)=>{
                setData({
                  ...data,
                  password:event.target.value
                })
              }} value={data.password}/>
                    </div>


                    <div className='mt-4 flex justify-center space-x-5'>
                    <button  type="submit" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Signup</button>
          


                </div>

                </form>
                
                
                
            </div>
        </div>
    </div>
  )
}

export default SignupComponent