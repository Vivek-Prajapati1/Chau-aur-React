import React from 'react'

function Card({ username, btnText }) {
    console.log(username);

    return (
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
            <img
                src="https://images.pexels.com/photos/32535462/pexels-photo-32535462.jpeg"
                alt=""
                className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
            />
            <div className="mt-6 mb-2">
                <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
                    Title
                </span>
                <h2 className="text-xl font-semibold tracking-wide"> {username}</h2>
            </div>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                {btnText || "visit me"} →
            </button>
        </div>
    )
}

export default Card