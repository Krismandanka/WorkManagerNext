


"use client"

import UserContext from '@/context/userContext'
import { LoginUser } from '@/services/userService'
import { useRouter } from 'next/navigation'
import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify'

const LoginPage = () => {

  const router = useRouter();


  const context = useContext(UserContext)
    const [data,setData] = useState({
        email:"",
        password:""
    })
    const loginSubmit = async (event)=>{
        event.preventDefault();



        try{
          const result = await LoginUser(data);
          // console.log("first",result);
          toast.success("Logged In",{
            position:"top-center"
          })

          context.setUser(result.user)

          router.push("/profile/user")


        }
        catch(error){
          console.log(error);
          toast.error("Error in Login",{
            position:"top-center"
          })
        }

    }

  return (
    <div className='grid grid-cols-12'>
        <div className='border border-gray-900 p-5 col-span-6 col-start-4 shadow-gray-700 shadow rounded'>
            <div className=''>
                <h1 className='text-3xl text-center'>Login Here</h1>
                <form action="#!" onSubmit={loginSubmit}>
                    
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
                    <button  type="submit" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
          


                </div>

                </form>
                
                
                
                
            </div>
        </div>
    </div>
  )
}

export default LoginPage