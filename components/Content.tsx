import React from 'react';

const Content = () => {
  return (
    <div className="bg-white  mb-20 px-20">
      <div className="flex  items-center justify-center gap-16 w-full">
        <div className="pt-16">
          <img
            src="https://framerusercontent.com/images/XLrfJsxdzCOHwlEpXcKoWfvWWo.webp?scale-down-to=512"
            alt=""
            className="h-80"
          />
        </div>
        <div className="max-w-xl pt-20 ">
          <h1 className="text-4xl font-bold text-gray-900">
            Ultimate SAT Prepration with The
          </h1>
          <h1 className="text-4xl font-bold text-blue-500">
            Largest Question Bank
          </h1>
          <p className="text-purple-950 text-lg pt-8 ">
            LearnQ.ai delivers over twice as many SAT practice questions as the
            College Board, ensuring comprehensive preparation for test day.
          </p>
          <p className="text-purple-950 text-lg pt-4">
            With questions categorized by difficulty and an adaptive platform
            that adjusts to your performance, you'll be fully equipped to excel
            in both modules of the digital SAT.
          </p>

          <button className=" mt-4 bg-white border-2 border-indigo-950 font-bold text-lg py-2 px-8 rounded-full mr-4 hover:text-purple-800 hover:border-purple-800">
            Practice Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
