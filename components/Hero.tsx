import React from 'react';
import Content from './Content';

const Hero = () => {
  const text = [
    {
      title: '1.7M+',
      subtitle: 'Minutes Practiced',
      description: 'By Digital SAT Aspirants',
    },
    {
      title: '200k+',
      subtitle: ' Practice Tests Completed',
      description: 'Evaluate SAT Exam Score',
    },
    {
      title: '73k+',
      subtitle: 'SAT Doubts Answered', 
      description: 'By AI Tutor MIA',
    },
    {
      title: '139+',
      subtitle: 'Countries',
      description: 'Learners Chose Us For DSAT',
    },
    {
      title: '4.9 ⭐',
      subtitle: 'App & Play Store Rating',
      description: 'First Choice For DSAT Training',
    },
  ];
  return (
    <div className="bg-gradient-to-b from-blue-100 via-blue-50 to-green-100  pt-20 h-full ">
      <div className="flex justify-between px-12">
        <div className="pt-20">
          <div className="flex flex-col gap-2">
            <h2 className="text-5xl font-bold px-28 tracking-normal">
              Boost Your Digital SAT
            </h2>
            <h2 className="text-5xl font-bold px-28 ">Score. Guaranteed!</h2>
            <h2 className="text-5xl font-bold px-28">While Playing.</h2>
          </div>
          <div className="px-28 pt-8 text-gray-600">
            <span className="text-xl block">
              Keep a real-time track of progress with the most fun
            </span>
            <span className="text-xl block">
              and loved AI-powered practice platform.
            </span>
          </div>
          <div className="px-28 pt-4 text-gray-600 text-lg ">
            <span className="block ">✔ 5000+ Fresh Digital SAT Questions</span>
            <span className="block">
              ✔ 24x7 Doubt Resolution With Mia AI Tour
            </span>
          </div>
          <div className="px-28 pt-8">
            <button className="bg-indigo-950 text-lg text-white font-bold py-3 px-12 rounded-full ">
              Get Started
            </button>
          </div>
        </div>
        <div className="mt-16 pr-32">
          <img
            src="https://framerusercontent.com/images/oLAhhxsJrxHN0p0RTCeWpC9slFY.webp?scale-down-to=2048"
            alt="hero"
            className="h-96"
          />
        </div>
      </div>
      <div className="flex justify-center mt-16  py-8 rounded-lg  mx-12 gap-12 text-center">
        {text.map((item, index) => (
          <div key={index} className="text-center flex flex-col gap-1">
            <h2 className="text-5xl font-bold text-indigo-950">{item.title}</h2>
            <h3 className="text-base text-gray-950 font-semibold">
              {item.subtitle}
            </h3>
            <h3 className="text-base  text-gray-700 ">{item.description}</h3>
          </div>
        ))}
      </div>
    
    </div>
  );
};

export default Hero;
