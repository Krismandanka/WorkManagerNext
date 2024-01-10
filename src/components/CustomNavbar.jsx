

"use client"
import React, { useContext } from 'react'
import Link from 'next/link'
import UserContext from '@/context/userContext'
import { LogOut } from '@/services/userService'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

const CustomNavbar = () => {

  const context = useContext(UserContext);
  const router = useRouter();


  async function doLogout(){
    try {
      const result = await LogOut();
      console.log("ppppppppppppppppp",result);
      context.setUser(undefined);
      router.push("/");
    } catch (error) {
      toast.error("logout error");
      console.log(error);
    }
  }



  // console.log("test")
  return (
    
      <nav className='bg-blue-600 h-16 py-2 px-36 text-white flex justify-between items-center'>
        <div className='brand'>
          <h1 className='text-2xl font-semibold'><a href="#!">Work Manager</a></h1> 
        </div>
        <div>
          <ul className='flex space-x-6'>
            {
              context.user && (
                <>
                  <li><Link href={"/"} className='hover:text-blue-200'>Home</Link></li>
            <li><Link href="/add_task" className='hover:text-blue-200'>Add Tasks</Link></li>
            <li><Link href={"/show_task"} className='hover:text-blue-200'>Show Task</Link></li>
                </>
              )
            }
            
          </ul>
        </div>
        <div>
        <ul className='flex space-x-6'>
          {
            context.user && (
              <>
                <li><Link href={"#!"} className='hover:text-blue-200'>{context.user.name}</Link></li>
            <li><button  onClick={doLogout} className='hover:text-blue-200'>Logout</button></li>
              </>
            )
          }

          {
            !context.user && (
              <>
                <li><Link href={"/login"} className='hover:text-blue-200'>Login</Link></li>
            <li><Link href={"/signup"} className='hover:text-blue-200'>Sign Up</Link></li>
              </>
            )
          }


            
            
          </ul>
        </div>
      </nav>
    
  )
}

export default CustomNavbar
