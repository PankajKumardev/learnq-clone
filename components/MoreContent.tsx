import React from 'react';

const MoreContent = () => {
  return (
    <div>
      <div className="flex justify-center mt-20 flex-col items-center gap-4">
        <div className="bg-emerald-100 rounded-full  px-4 py-1 font-semibold text-lg ">
          GEN-AI Digital SAT Platform
        </div>
        <h1 className="text-4xl font-bold text-gray-900">
          Experience The Personalized Digital SAT Training Available 24/7
        </h1>
        <p className="text-lg text-gray-600 pt-4">
          Suite Of AI Driven Product With 80% More Accuracy To Predict Your
          Score
        </p>
      </div>
      <div className="bg-green-50 mt-20 ">
        <div className="flex  items-center justify-center gap-20 w-full">
          <div className=" pt-20 pb-10 px-10  max-w-md">
            <div className="mt-2 bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text border-2 border-green-500 via-blue-500 rounded-full px-4 py-1 font-semibold text-base inline ">
              AI Generated
            </div>
            <h1 className="text-3xl font-bold text-gray-900 pt-4">
              Get your Free
            </h1>
            <h1 className="text-3xl font-bold pt-1">Personalized SAT Study</h1>
            <h1 className="text-3xl font-bold pt-1">Plan to Score 1500+</h1>
            <p className="text-purple-950 text-lg pt-8  ">
              Start your journey with personalized study plan to reach your
              dream SAT score with AI Precision
            </p>

            <button className=" mt-4 bg-white border-2 border-indigo-950 font-bold text-lg py-2 px-8 rounded-full mr-4 hover:text-purple-800 hover:border-purple-800">
              Get Started Now
            </button>
          </div>
          <div className="pt-16">
            <img
              src="https://framerusercontent.com/images/FD2dH7yFEIHWuvT98V1aNxeRYs0.gif?scale-down-to=1024"
              alt=""
              className="h-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreContent;
