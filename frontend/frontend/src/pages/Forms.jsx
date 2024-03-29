import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Form = () => {
    const [selectedPlatform, setSelectedPlatform] = useState('instagram');
    const [profileLink, setProfileLink] = useState('');
    const navigate = useNavigate()
    const handlePlatformChange = (e) => {
        setSelectedPlatform(e.target.value);
    };

    const handleProfileLinkChange = (e) => {
        setProfileLink(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post(
                "http://localhost:3000/api/v1/form",
                {
                    platformName: selectedPlatform,
                    platformLink: profileLink,
                },
                {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    },
                }
            );
            if (response) {
                // Handle success (optional)
                navigate("/info")
                console.log('Post request successful!');
            } else {
                // Handle error (optional)
                console.error('Post request failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    

    return (
        <div className='pt-14'>
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="platforms" className="block mb-2 text-sm font-medium text-white dark:text-white">
                        Select Platform
                    </label>
                    <select
                        id="platforms"
                        className="bg-gray-800 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={handlePlatformChange}
                        value={selectedPlatform}
                    >
                        <option value="instagram">Instagram</option>
                        <option value="linkedin">Linkedin</option>
                        <option value="github">Github</option>
                        <option value="twitter">Twitter</option>
                        <option value="tiktok">Tiktok</option>
                    </select>
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-white dark:text-white">
                        Your Profile Link
                    </label>
                    <input
                        type="link"
                        id="password"
                        className="bg-gray-800 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={handleProfileLinkChange}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

