"use client";

import React from 'react'
import { FiSmartphone, FiMonitor, FiCpu, FiTablet } from "react-icons/fi";


function Service() {

    const data = {
        services: [
            {
                id: 1,
                icon: FiSmartphone,
                title: "Mobile App Development",
                description: "We provide mobile app development services for both Android and iOS platforms."
            },
            {
                id: 2,
                icon: FiMonitor,
                title: "Web Development",
                description: "We provide web development services for both front-end and back-end."
            },
            {
                id: 3,
                icon: FiCpu,
                title: "Software Development",
                description: "We provide software development services for both Windows and Mac."
            },
            {
                id: 4,
                icon: FiTablet,
                title: "UI/UX Design",
                description: "We provide UI/UX design services for both web and mobile applications."
            }
        ]
    }

  return (
    <div className='flex flex-col gap-10 items-center justify-center w-full  lg:px-50 px-15 py-10'>
        <h1 className='text-3xl font-medium'>
            SERVICE
        </h1>
        <p className='text-center text-md max-w-2xl'>
            Integer sollicitudin sed nulla non consequat. Nullam vitae erat quis leo accumsan ullamcorper. Suspendisse leo purus, pellentesque posuere.
        </p>
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4'>
            {data.services.map((service) => {
                const Icon = service.icon;
                return (
                    <div key={service.id} className='flex flex-col items-center gap-5 text-center'>
                        <Icon className="text-4xl text-green-500" />
                        <h2 className='text-lg font-medium'>
                            {service.title}
                        </h2>
                        <p className='text-sm'>
                            {service.description}
                        </p>
                    </div>
                )
            })}

            {data.services.map((service) => {
                const Icon = service.icon;
                return (
                    <div key={service.id} className='flex flex-col items-center gap-5 text-center'>
                        <Icon className="text-4xl text-green-500" />
                        <h2 className='text-lg font-medium'>
                            {service.title}
                        </h2>
                        <p className='text-sm'>
                            {service.description}
                        </p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Service
