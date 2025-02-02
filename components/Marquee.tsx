import React from 'react';
import { MarqueeDemoVertical } from './MarqueeContent';

const Marquee = () => {
    return (
        <div className="bg-white mt-10">
            <div className="flex flex-col items-center gap-4 px-4 md:px-0">
                <div className="bg-emerald-100 rounded-full px-4 py-1 font-semibold text-sm">
                    WALL OF LOVE
                </div>

                <h2 className="font-bold text-2xl md:text-3xl text-center">
                    Loved By Digital SAT Aspirants Across The Globe 🌎
                </h2>

                <button className="bg-purple-950 text-white text-lg font-semibold px-6 py-3 rounded-full">
                    See the Wall of Love
                </button>
            </div>
            <div className='flex flex-col md:flex-row justify-center mt-10 md:mt-20 gap-4'>
                <MarqueeDemoVertical />
                <MarqueeDemoVertical />
                <MarqueeDemoVertical />
            </div>
        </div>
    );
};

export default Marquee;
