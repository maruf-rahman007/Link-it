import React, { useEffect, useState } from "react";
import myImage from '../static/logo.png';
import { useParams } from "react-router-dom";
import axios from "axios";
import { Instagram } from "../components/Instagram";
import { Linkedin } from "../components/Linkedin";
import { Github } from "../components/Github";
import { X } from "../components/X";
import { Tiktok } from "../components/Tiktok";

export const Card = () => {
    const [socials, setSocials] = useState([]);
    const { username } = useParams();
    const [user, setUser] = useState();

    useEffect(() => {
        async function fetchDatas(username) {
            try {
                const response = await axios.get(`http://localhost:3000/api/v1/social-link/${username}`);
                const socialMediaLinks = response.data.socialMediaLinks;
                const extractedData = socialMediaLinks.map(link => ({
                    name: link.name,
                    url: link.url,
                }));
                setUser(response.data.name)
                setSocials(extractedData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchDatas(username);
    }, [username]);

    return (
        <div className="grid justify-items-center pt-32">
            <div className="w-full max-w-sm bg-gray-800 dark:border-gray-700 rounded-t-lg">
                <div className="pt-6 flex flex-col items-center pb-10">
                    <img
                        className="w-24 h-24 mb-3 rounded-full shadow-lg"
                        src={myImage}
                        alt="Bonnie image"
                    />
                    <h5 className="mb-1 text-xl font-medium text-gray-300 dark:text-white">
                        {user}
                    </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        Software Engineer
                    </span>
                </div>
            </div>
            <div className="w-full max-w-sm p-1 bg-gray-800 dark:bg-gray-800 dark:border-gray-700 rounded-b-lg">
                <ul className="my-4 space-y-3">
                    {socials.map((link, index) => (
                        <li key={index}>
                            {link.name === "instagram" && <Instagram url={link.url} />}
                            {link.name === "linkedin" && <Linkedin url={link.url} />}
                            {link.name === "github" && <Github url={link.url} />}
                            {link.name === "twitter" && <X url={link.url} />}
                            {link.name === "tiktok" && <Tiktok url={link.url} />}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
