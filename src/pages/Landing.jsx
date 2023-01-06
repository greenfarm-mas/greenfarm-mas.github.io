import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
export function Landing() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    console.log(email, password);
    console.log("local", localStorage.getItem('email'), localStorage.getItem('password'));
    e.preventDefault();
    if (localStorage.getItem('email') === email && localStorage.getItem('password') === password) {
      navigate('./Home');
    } else {
      alert('Invalid email or password');
    }
  };

    return (
        <div className='h-screen relative w-screen bg-base-100'>
            <div className="hero absolute top-0 left-0 h-[25rem]" style={{ backgroundImage: `url("https://smart-phoneprice.com/wp-content/uploads/2022/10/Farmers-Day-3.jpg")` }}>
                <div className="hero-overlay bg-opacity-60 flex justify-start gap-36">
                </div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                    </div>
                </div>
            </div>
            <div className='absolute mt-[28rem] ml-12'>
                <div className="form-control">
                    <h1 className="text-5xl font-bold text-primary-content text-start">Welcome to <span className="text-primary">GreenFarm</span></h1>
                    <label className="label">
                        <span className="label-text text-primary">Your Email</span>
                    </label>
                    <label className="input-group">
                        <span>Email</span>
                        <input type="text" placeholder="info@site.com" className="input input-bordered text-primary" onChange={(e) => setEmail(e.target.value)} />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primary">Your Password</span>
                    </label>
                    <label className="input-group">
                        <span>Password</span>
                        <input type="password" placeholder="" className="input input-bordered w-[13.65rem] text-primary" onChange={(e) => setPassword(e.target.value)} />
                    </label>
                </div>
                <div className="button bg-gradient-to-r from-primary to-primary-content mt-9 py-2 w-3/4 ml-6 flex justify-center rounded-lg" onClick={handleSubmit}>Login</div>
                <div className="button bg-gradient-to-r from-primary to-primary-content mt-9 py-2 w-3/4 ml-6 flex justify-center rounded-lg" onClick={() => navigate("/SignUp")}>Register</div>
            </div>
        </div>
    );
};