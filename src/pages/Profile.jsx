import React from 'react'
import { useNavigate } from "react-router-dom";
import { NavTop } from '../components/NavTop';
import { NavBar } from '../components/NavBar';
import { useState } from 'react';
export function Profile() {
    const navigate = useNavigate();
    const [name, setName] = useState(localStorage.getItem("name") || "");
    const [email, setEmail] = useState(localStorage.getItem("email") || "");

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        console.log(localStorage.getItem("email"));
    };

    return (
        <div className='h-screen relative w-screen bg-base-100'>
            <div className="bg-secondary-content rounded-xl flex justify-start gap-26 mt-10 ml-2 w-[24.5rem]">
                <NavTop message="Edit Profile" />
            </div>
            <div className="avatar mt-20">
                <div className="w-24 rounded-full">
                    <img src="https://placeimg.com/192/192/people" />
                </div>
            </div>
            <div className="artboard artboard-horizontal phone-3 bg-secondary-content rounded-xl m-5 ml-2 max-w-[400px]">
                <div>
                    <h1 className='pt-5'>{name}</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control ml-8 flex gap-10 mt-10 text-start">
                            <h2 className="text-primary font-lg">Edit your Profile Information:</h2>
                            <input type="text" placeholder="Input New Name" className="input input-bordered input-secondary w-full max-w-xs text-primary-focus font-bold " value={name} onChange={(e) => setName(e.target.value)} />
                            <input type="text" placeholder="Input New Email" className="input input-bordered input-secondary w-full max-w-xs text-primary-focus font-bold " value={email} onChange={(e) => setEmail(e.target.value)} />
                            <button className="btn btn-outline btn-accent w-1/3" type="submit">Edit</button>
                        </div>
                    </form>
                </div>
            </div>
            <NavBar></NavBar>
        </div>
    )
}