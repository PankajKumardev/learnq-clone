import React from 'react';

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
        <div className="bg-gradient-to-b from-blue-100 via-blue-50 to-green-100 pt-20 h-full">
            <div className="flex flex-col lg:flex-row justify-between items-center px-6 lg:px-12">
                <div className="pt-10 lg:pt-20 text-center lg:text-left">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-3xl lg:text-5xl font-bold tracking-normal">
                            Boost Your Digital SAT
                        </h2>
                        <h2 className="text-3xl lg:text-5xl font-bold">Score. Guaranteed!</h2>
                        <h2 className="text-3xl lg:text-5xl font-bold">While Playing.</h2>
                    </div>
                    <div className="pt-8 text-gray-600">
                        <span className="text-lg lg:text-xl block">
                            Keep a real-time track of progress with the most fun
                        </span>
                        <span className="text-lg lg:text-xl block">
                            and loved AI-powered practice platform.
                        </span>
                    </div>
                    <div className="pt-4 text-gray-600 text-base lg:text-lg">
                        <span className="block">✔ 5000+ Fresh Digital SAT Questions</span>
                        <span className="block">✔ 24x7 Doubt Resolution With Mia AI Tour</span>
                    </div>
                    <div className="pt-8">
                        <button className="bg-indigo-950 text-lg text-white font-bold py-3 px-12 rounded-full">
                            Get Started
                        </button>
                    </div>
                </div>
                <div className="mt-10 lg:mt-16">
                    <img
                        src="https://framerusercontent.com/images/oLAhhxsJrxHN0p0RTCeWpC9slFY.webp?scale-down-to=2048"
                        alt="hero"
                        className="h-64 lg:h-96"
                    />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center mt-16 py-8 rounded-lg mx-6 lg:mx-12 gap-8 lg:gap-12 text-center">
                {text.map((item, index) => (
                    <div key={index} className="text-center flex flex-col gap-1">
                        <h2 className="text-3xl lg:text-5xl font-bold text-indigo-950">{item.title}</h2>
                        <h3 className="text-sm lg:text-base text-gray-950 font-semibold">
                            {item.subtitle}
                        </h3>
                        <h3 className="text-sm lg:text-base text-gray-700">{item.description}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hero;
