import React from "react";

export const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 rounded-lg shadow m-4">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
                    <span className="block text-sm text-gray-400 sm:text-center">© 2024 <a href="https://flowbite.com/" className="hover:underline text-gray-300">LinkIt™</a>. All Rights Reserved.</span>
                </div>
            </footer>
        </div>
    )
}
