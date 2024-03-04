import React from "react";

export const LandingPage = () => {
    return (
        <div className="bg-gray-900">
            <div className="mx-auto max-sm:mt-32 mt-32">
                <h2 className="lg:text-6xl md:text-5xl text-4xl text-white font-black max-w-2xl text-center mx-auto tracking-tight py-4 pb-1">Social Media Reference Landing Page</h2>
                <p className="text-gray-300 leading-7 mt-3 sm:text-lg mx-auto max-w-xl tracking-normal text-center">Create a personalized and customizable page that houses all the important links that you want to share with your audience.</p>
            </div>
            <div className="flex gap-6 justify-center mt-10">
                <a className="inline-flex transition-colors items-center justify-center h-[40px] rounded-full px-4 py-2 text-sm font-medium text-white ring-1 ring-gray-300/50 bg-gray-800 hover:bg-gray-700" target="_blank" rel="noopener noreferrer" href="https://github.com/maruf-rahman007/Link-it">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                    </svg>
                    Contribute
                </a>
            </div>
            <div className="mx-auto my-8 mt-20 sm:mt-32 flex flex-col items-center">
                <h2 className="mt-4 mb-0 text-3xl font-extrabold text-center tracking-[-0.03em] text-white sm:text-4xl sm:leading-[3.5rem]">
                    <span className="gradient-white mt-1 inline-flex">Create and organize <br />your social links with LinkIt.</span>
                </h2>
                <p className="text-gray-300 leading-7 mt-3 sm:text-lg mx-auto max-w-xl tracking-normal text-center">
                    Welcome to my all-in-one hub! Dive into TikTok dances, Instagram visuals, Twitter conversations, and more—all on a single landing page. Shop, stay updated on events, and join the adventure! </p>
            </div>
        </div>
    )
}
