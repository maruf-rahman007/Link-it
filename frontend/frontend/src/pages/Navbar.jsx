import React from "react";
import { useNavigate } from "react-router-dom";
import myImg from "../static/logo.png";
import { useAuth } from "../components/AuthProvider";
import { Link } from 'react-router-dom';
export const Navbar = () => {
    const { isLoggedIn, logout } = useAuth()
    const navigate = useNavigate(); 

    return (
        <div>
            <nav className="bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-600 mb-0 pb-0">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="lg:text-4xl md:text-5xl text-4xl text-white font-black max-w-2xl text-center mx-auto tracking-tight py-4 pb-1self-center whitespace-nowrap ">Link It</span>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        {isLoggedIn ? (
                            <button onClick={() => {
                                logout()
                                navigate("/login")
                            }} type="button" class="text-white bg-red-400 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <span class="glyphicon glyphicon-log-out"></span> Log out
                            </button>
                        ) : (
                            <button
                                onClick={() => {
                                    navigate("/signup");
                                }}
                                type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Get started
                            </button>
                        )
                        }

                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-700 rounded-lg bg-gray-800 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-gray-900 dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="/" className="block py-2 px-3 text-white rounded md:bg-transparent md:text-blue-500 md:p-0 dark:text-blue-500" aria-current="page">Home</a>
                            </li>
                            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                                {isLoggedIn && (
                                    <li>
                                        <a href="/forms" className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Forms</a>
                                    </li>
                                )}

                            </div>
                            <li>
                                <button onClick={() => {
                                    navigate("/about")
                                }}>
                                    <a href="#" className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                                </button>
                            </li>
                            <li>
                                <a href="https://github.com/maruf-rahman007/Link-it" target="_blank" rel="noopener noreferrer" className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Github</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};
