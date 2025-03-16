"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import { FiTarget, FiEye, FiFlag } from "react-icons/fi";

function About() {
    const [onHover, setOnHover] = useState(false);
    const data = [
        {
            header: "Our Mission",
            text: "Aenean volutpat, dolor eu finibus rhoncus, elit felis vehicula nunc, ut pulvinar ex diam nec lacus. Phasellus sit amet rhoncus turpis. Aenean tincidunt auctor purus, ac sodales sapien sagittis",
            image: "/about2.jpg",
            icon: FiTarget
        },

        {
            header: "Our Vision",
            text: "Aenean volutpat, dolor eu finibus rhoncus, elit felis vehicula nunc, ut pulvinar ex diam nec lacus. Phasellus sit amet rhoncus turpis. Aenean tincidunt auctor purus, ac sodales sapien sagittis",
            image: "/about3.jpg",
            icon: FiEye
        },

        {
            header: "Our Objective",
            text: "Aenean volutpat, dolor eu finibus rhoncus, elit felis vehicula nunc, ut pulvinar ex diam nec lacus. Phasellus sit amet rhoncus turpis. Aenean tincidunt auctor purus, ac sodales sapien sagittis",
            image: "/about4.jpg",
            icon: FiFlag
        }
    ];

    return (
        <div className='lg:px-50 px-5 sm:px-10 md:px-20  py-15 bg-white/60 lg:py-30 flex flex-col gap-10 items-center justify-center'>
            <h1 className='text-4xl font-medium text-center mb-4'>
                ABOUT US
            </h1>
            <p className='text-center max-w-2xl mb-10'>
                Maecenas vel turpis quis lorem aliquam tempus quis non mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>

            <div className='flex w-full md:flex-row flex-col max-md:px-15 max-sm:px-0 items-center justify-center gap-10'>
                <Image width={576} height={350} src='/about1.jpg' alt="" className='w-4xl h-[350px]' />
                <div className='flex flex-col gap-5 justify-center items-center'>
                    <h1 className='text-3xl font-medium text-green-600'>
                        Welcome to Our Site
                    </h1>
                    <p className='max-w-7xl'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum rutrum ligula. Integer ac porttitor mi. In finibus vehicula aliquet. Vestibulum et velit placerat, pretium lorem id, porttitor libero. Suspendisse scelerisque nec arcu a malesuada. Nulla tempus dictum tristique.
                    </p>
                    <button className='px-6 py-2 bg-green-500 text-white text-xl rounded-2xl cursor-pointer w-50'>
                        Read More
                    </button>
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {data.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div key={index} onMouseOver={() => setOnHover(true)} onMouseLeave={()  => setOnHover(false)} className='flex flex-col items-center justify-center'>
                            <img
                                src={item.image}
                                className='w-4xl h-[350px] object-cover rounded-t-2xl'
                                alt=""
                            />
                            <div className='relative flex flex-col gap-5 items-center justify-center bg-green-100 p-5 rounded-b-2xl'>
                                <h1 className='text-2xl font-medium text-green-600'>
                                    {item.header}
                                </h1>
                                <p className='text-center'>
                                    {item.text}
                                </p>

                                <button className={`px-6 py-2 bg-green-500 text-white ${onHover? "hover:bg-[#301e1e]" : "" } text-lg rounded-xl cursor-pointer`}>
                                    Read More
                                </button>
                                <span className={`absolute top-[-10%] bg-green-500 text-white p-3 rounded-full border-3 border-white ${onHover ? "hover:bg-white hover:text-green-500" : ""}`}>
                                    <Icon/>
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default About;
