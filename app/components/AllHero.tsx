"use client";

import Link from 'next/link';
import React from 'react'

type Props = {
  title: string
}

function AllHero({ title }: Props) {
  return (
    <div className=' text-white py-40 w-full flex justify-center items-center' style={{backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/bubbles.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className='text-center flex py-3 border-1 '>
        <Link className=' px-6 text-md border-r-1 border-white hover:text-green-800' href="../">Home</Link>
        <Link className=' px-6 text-md hover:text-green-800' href="#">{title}</Link>
      </div>
    </div>
  )
}

export default AllHero
