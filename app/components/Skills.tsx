"use client";

import React, { useEffect, useState } from 'react';

const skillsData = [
    { skill: 'HTML', percentage: 100, color: 'bg-green-500' },
    { skill: 'CSS', percentage: 90, color: 'bg-cyan-500' },
    { skill: 'JQUERY', percentage: 80, color: 'bg-yellow-400' },
    { skill: 'PHP', percentage: 70, color: 'bg-red-500' }
];

const counters = [
    { value: 100, label: 'Our Staffs' },
    { value: 200, label: 'Our Clients' },
    { value: 300, label: 'Completed Projects' },
    { value: 400, label: 'Running Projects' }
];

const SkillsProgress = () => {
    const [progress, setProgress] = useState(skillsData.map(() => 0));

    useEffect(() => {
        const timer = setTimeout(() => {
            setProgress(skillsData.map(item => item.percentage));
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-white py-12 px-8">
            <h1 className="text-4xl font-semibold text-center mb-4">OUR SKILLS</h1>
            <p className="text-center max-w-2xl mx-auto mb-12">
                Quisque ac tincidunt ipsum egestas viverra mi, ac vehicula enim consectetur quis.
                In imperdiet varius elit, ut convallis lectus luctus quis.
            </p>

            <div className="space-y-6">
                {skillsData.map((item, index) => (
                    <div key={index} className="relative">
                        <div className="flex justify-between mb-2">
                            <span className="font-semibold">{item.skill}</span>
                            <span>{progress[index]}%</span>
                        </div>
                        <div className="bg-gray-200 rounded-full h-8 overflow-hidden">
                            <div
                                className={`h-full ${item.color} transition-all duration-1000 ease-in-out`}
                                style={{ width: `${progress[index]}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {counters.map((counter, index) => (
                    <div key={index}>
                        <h2 className="text-5xl font-bold text-green-500">{counter.value}</h2>
                        <p className="text-gray-600 mt-2">{counter.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsProgress;
