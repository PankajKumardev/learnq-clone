import React from 'react';

const Content = () => {
    return (
        <div className="bg-white mb-20">
            <div className="flex flex-col items-center justify-center gap-16 w-full md:flex-row">
                <div className="pt-16">
                    <img
                        src="https://framerusercontent.com/images/XLrfJsxdzCOHwlEpXcKoWfvWWo.webp?scale-down-to=512"
                        alt=""
                        className="h-80"
                    />
                </div>
                <div className="max-w-xl pt-20 text-center md:text-left">
                    <h1 className="text-4xl font-bold text-gray-900">
                        Ultimate SAT Prepration with The
                    </h1>
                    <h1 className="text-4xl font-bold text-blue-500">
                        Largest Question Bank
                    </h1>
                    <p className="text-purple-950 text-lg pt-8">
                        LearnQ.ai delivers over twice as many SAT practice questions as the
                        College Board, ensuring comprehensive preparation for test day.
                    </p>
                    <p className="text-purple-950 text-lg pt-4">
                        With questions categorized by difficulty and an adaptive platform
                        that adjusts to your performance, you'll be fully equipped to excel
                        in both modules of the digital SAT.
                    </p>
                    <button className="mt-4 bg-white border-2 border-indigo-950 font-bold text-lg py-2 px-8 rounded-full hover:text-purple-800 hover:border-purple-800">
                        Practice Now
                    </button>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-20 mt-40 md:flex-row">
                <div className="max-w-xl gap-2 text-center md:text-left">
                    <h2 className="text-4xl font-bold text-gray-900">
                        <span className="text-blue-500">Boost Your Digital SAT Score</span>{' '}
                        and
                    </h2>
                    <h2 className="text-4xl font-bold text-gray-900 pt-1 mb-4">
                        Save Big with LearnQ.ai?
                    </h2>
                    <h2 className="text-2xl font-semibold text-gray-900">
                        - Expert Insights from Ritesh Verma
                    </h2>
                    <p className="text-gray-500 text-lg pt-4">
                        Discover how Ritesh Verma uses LearnQ’s smart tools and AI to help
                        students ace the Digital SAT.
                    </p>
                    <button className="mt-4 bg-white border-2 border-indigo-950 font-bold text-lg py-2 px-8 rounded-full hover:text-purple-800 hover:border-purple-800">
                        Try LearnQ.ai
                    </button>
                </div>
                <div>
                    <img
                        src="https://framerusercontent.com/images/hfTIDuYAdxBXzQL5rLQH1J2Zg.webp?scale-down-to=512"
                        alt=""
                        className="h-80 rounded-xl"
                    />
                </div>
            </div>
            <div className="bg-green-50 mt-20">
                <div className="flex flex-col items-center justify-center gap-20 w-full md:flex-row">
                    <div className="pt-16">
                        <img
                            src="https://framerusercontent.com/images/Ur7AUqo0m0fONQfidOaYxyOlz5M.webp?scale-down-to=512"
                            alt=""
                            className="h-80"
                        />
                    </div>
                    <div className="max-w-2xl pt-20 pb-10 px-8 text-center md:text-left">
                        <h1 className="text-4xl font-bold text-gray-900">
                            Achieve Accurate SAT Results with
                        </h1>
                        <h1 className="text-4xl font-bold pt-1 text-green-700">
                            LearnQ's Precision Algorithm
                        </h1>
                        <p className="text-purple-950 text-lg pt-8">
                            At LearnQ, our advanced algorithm, combined with high-quality
                            questions, ensures that students practice scores closely mirror
                            their actual SAT results.
                        </p>
                        <p className="text-purple-950 text-lg pt-4">
                            The graph below illustrates the impressive alignment between
                            average scores on our platform and actual SAT scores. With LearnQ,
                            students are always a step ahead, fully prepared to excel on test
                            day.
                        </p>
                        <button className="mt-4 bg-white border-2 border-indigo-950 font-bold text-lg py-2 px-8 rounded-full hover:text-purple-800 hover:border-purple-800">
                            Boost Your Score
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-lime-100 mx-4 md:mx-40 rounded-xl border flex flex-col gap-8 py-8 px-10 shadow-lg md:flex-row md:gap-24">
                <div>
                    <h2 className="font-bold text-4xl text-gray-900">
                        Are You a Tutor or a Test Prep Institute?
                    </h2>
                    <p className="text-purple-950 text-lg pt-4 max-w-3xl">
                        Give your students a Duolingo-like platform for the SAT with
                        Shopify-like customization for tutors and test prep institutes.
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <button className="mt-4 bg-white border-2 border-indigo-950 font-bold text-lg py-3 px-8 rounded-full hover:text-purple-800 hover:border-purple-800">
                        Book Free Demo
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Content;
