import React from 'react'
import { useNavigate } from "react-router-dom";

export function NavBar() {
    const navigate = useNavigate();
    const handleHomeButtonClick = () => {
        navigate('/Home');
      };
      const handleProfileButtonClick = () => {
        navigate('/Profile');
      };
      const handleContactsButtonClick = () => {
        navigate('/Contacts');
      };
            
    return (
        <div className="btm-nav fixed flex gap-4 mb-0 bg-base-300">
            <button className='bg-base-300 text-primary-content ml-2 select-none border-none' onClick={handleHomeButtonClick}>
                <i className="fa-solid fa-home"></i>
            </button>
            <button className="bg-base-300 text-primary-content select-none border-none" onClick={handleProfileButtonClick}>
                <i className="fa-solid fa-user"></i>
            </button>
            <button className='bg-base-300 text-primary-content mr-2 select-none border-none' onClick={handleContactsButtonClick}>
                <i className="fa-solid fa-envelope"></i>
            </button>
        </div>
    )
}