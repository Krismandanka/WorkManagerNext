"use client"

import React from 'react'

import Link from 'next/link'
const Footer = () => {
  return (
    <footer className='h-40 bg-blue-600'>
        <div className='flex p-5 justify-around'>
            <div className='text-center'>
                <h1>Welcome to work Manager</h1>
                <p>Lorem ipsum dolor sit amet consectetur adi</p>
            </div>
            <div className='text-center'>
                <h1>Importants Links</h1>
                <ul>
                    <li><Link href={"/facebook"}>Facebook</Link></li>
                    
                    <li><Link href={"linkdin"}>LinkdIn</Link></li>
                    
                    <li><Link href={"youtube"}>YouTube</Link></li>
                </ul>
            </div>

        </div>

    </footer>
   
  )
}

export default Footer