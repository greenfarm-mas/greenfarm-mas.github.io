import React from 'react'
import { useNavigate } from "react-router-dom";
import { NavTop } from "../components/NavTop";
import { useState } from 'react';
export function SignUp() {
    const navigate = useNavigate();
    const [inputValues, setInputValues] = useState({
        email: '',
        phoneNumber: '',
        password: ''
    });

    const handleInputChange = (event) => {
        // Update the state variable with the new input value
        setInputValues({
            ...inputValues,
            [event.target.name]: event.target.value
        });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Save the input values to local storage
        localStorage.setItem('email', inputValues.email);
        localStorage.setItem('phoneNumber', inputValues.phoneNumber);
        localStorage.setItem('password', inputValues.password);
        console.log("new user", localStorage.getItem('email'));
        console.log(localStorage.getItem('phoneNumber'));
        console.log(localStorage.getItem('password'));
    };
    return (
        <div className='h-screen relative w-screen bg-base-100'>
            <div className="hero absolute top-0 left-0 h-[25rem]" style={{ backgroundImage: `url("https://www.newegg.com/insider/wp-content/uploads/windows_xp_bliss-wide.jpg")` }}>
                <div className="hero-overlay bg-opacity-60 flex justify-start gap-36">
                    <NavTop message="Welcome" />
                </div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                    </div>
                </div>
            </div>
            <div className='absolute mt-[28rem] '>
                <h1 className="text-5xl font-bold text-primary-content  ml-6">Create <span className="text-primary">Account</span></h1>
                <form onSubmit={handleFormSubmit}>
                    <div className="form-control ml-11">
                        <label className="label">
                            <span className="label-text text-primary">Your Email</span>
                        </label>
                        <label className="input-group">
                            <span>Email</span>
                            <input type="text" placeholder="info@site.com" className="input input-bordered text-primary"  name="email" value={inputValues.email} onChange={handleInputChange}/>
                        </label>
                    </div>
                    <div className="form-control ml-11">
                        <label className="label">
                            <span className="label-text text-primary">Your Phone Number</span>
                        </label>
                        <label className="input-group">
                            <span>Phone
                                Number</span>
                            <input type="text" placeholder="910887197" className="input input-bordered w-[11.4rem] text-primary"  name="phoneNumber" value={inputValues.phoneNumber} onChange={handleInputChange}/>
                        </label>
                    </div>
                    <div className="form-control ml-11">
                        <label className="label">
                            <span className="label-text text-primary">Your Password</span>
                        </label>
                        <label className="input-group">
                            <span>Password</span>
                            <input type="password" placeholder="" className="input input-bordered w-[13.65rem] text-primary"  name="password" value={inputValues.password} onChange={handleInputChange}/>
                        </label>
                    </div>
                    <button type="submit" className="button bg-gradient-to-r from-primary to-primary-content  mt-9 py-2 w-3/4 ml-[4.1rem] flex justify-center rounded-lg">Register</button>
                </form>
            </div>
        </div >
    );
}