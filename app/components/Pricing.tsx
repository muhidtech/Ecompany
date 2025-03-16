"use client"


import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Silver',
    price: '9.99',
    features: [
      'HTML5 and CSS3',
      'Bootstrap 4',
      'Well-commented code',
      'IonIcons integrated',
      'Free Google Font integrated',
      'Responsive design'
    ],
    available: [true, true, true, false, false, false],
  },
  {
    name: 'Gold',
    price: '19.99',
    features: [
      'HTML5 and CSS3',
      'Bootstrap 4',
      'Well-commented code',
      'IonIcons integrated',
      'Free Google Font integrated',
      'Responsive design'
    ],
    available: [true, true, true, true, true, false],
  },
  {
    name: 'Platinum',
    price: '29.99',
    features: [
      'HTML5 and CSS3',
      'Bootstrap 4',
      'Well-commented code',
      'IonIcons integrated',
      'Free Google Font integrated',
      'Responsive design'
    ],
    available: [true, true, true, true, true, true],
  }
];

const PricingCard = ({ plan }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -50 }} 
      transition={{ duration: 0.5 }}
      className={`flex flex-col items-center p-8 rounded-lg shadow-lg w-full max-w-sm ${plan.name === 'Gold' ? 'bg-green-500 text-white' : 'bg-gray-900 text-white'}`}
    >
      <h2 className="text-3xl font-semibold mb-4">{plan.name}</h2>
      <p className="text-5xl font-bold">${plan.price}</p>
      <p className="text-sm mt-2">PER MONTH</p>
      <ul className="my-8 space-y-4">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            {plan.available[index] ? <FaCheck className="text-green-400" /> : <FaTimes className="text-red-500" />}
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className="mt-auto px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">BUY NOW</button>
    </motion.div>
  );
};

const Pricing = () => {
  return (
    <div className="flex flex-col items-center w-full justify-center min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-5">Our Pricing Plans</h1>
      <p className='text-center max-w-lg mb-12'>
        Choose the plan that fits your needs. All plans include a 30-day free trial.
      </p>
      <div className="grid md:grid-cols-3 grid-cols-1 w-full justify-center  gap-8">
        {plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
