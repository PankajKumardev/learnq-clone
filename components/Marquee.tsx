import React from 'react';
import { MarqueeDemoVertical } from './MarqueeContent';

const Marquee = () => {
  return (
    <div className="bg-white mt-10">
      <div className="flex justify-center w-full flex-col items-center gap-4">
        <div className="bg-emerald-100 rounded-full  px-4 py-1 font-semibold text-sm">
          WALL OF LOVE
        </div>

        <h2 className="font-bold text-3xl ">
          Loved By Digital SAT Aspirants Across The Globe 🌎
        </h2>

        <button className="bg-purple-950 text-white text-lg font-semibold px-6 py-3 rounded-full">
          See the Wall of Love
        </button>
      </div>
      <div className='flex justify-center mt-20'>
        <MarqueeDemoVertical />
        <MarqueeDemoVertical />
        <MarqueeDemoVertical />
      </div>
    </div>
  );
};

export default Marquee;
