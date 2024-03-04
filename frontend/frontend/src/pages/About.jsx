import React from "react";
import myImg from "../static/pic.svg";
export const About = () => {
    return (
        <div class="sm:flex items-center max-w-screen-xl">
            <div class="sm:w-1/2 p-10">
                <div class="image object-center text-center">
                    <img src={myImg}/>
                </div>
            </div>
            <div class="sm:w-1/2 p-5">
                <div class="text">
                    <span class="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
                    <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">About <span class="text-indigo-600">Our Company</span>
                    </h2>
                    <p class="text-gray-300 font-semibold">
                    Link It is a free social media reference landing page, developed by <b>Maruf Rahman</b> as part of learning journey. It provides users with a platform to create a personalized landing page featuring their social media references. Users can sign up using their email, set a password, and share their social media links. The platform generates a unique card for each user, showcasing their social media names and links. Visitors can easily navigate to the user's social media profiles by clicking on the references.
                    </p>
                </div>
            </div>
        </div>
    )
} 