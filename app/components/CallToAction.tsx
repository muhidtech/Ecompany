'use client';

import React from 'react'

function CallToAction() {
  return (
    <div className='flex flex-col w-full gap-5 items-center justify-center bg-green-500 text-white py-15'>
      <h1 className='md:text-4xl text-2xl font-medium'>
        CALL TO ACTION
      </h1>
      <p className='text-center md:w-2xl px-2 mt-4'>
        Integer sollicitudin sed nulla non consequat. Nullam vitae erat quis leo accumsan ullamcorper. Suspendisse leo purus, pellentesque posuere.
      </p>

      <button className='bg-white cursor-pointer font-medium text-green-700 px-4 py-2 mt-4 rounded-2xl hover:bg-green-500 hover:text-white'>
        CALL TO ACTION
      </button>
    </div>
  )
}

export default CallToAction
  