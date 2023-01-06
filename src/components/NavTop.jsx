import React from 'react'
import { useNavigate } from "react-router-dom";


export function NavTop(props) {
    let navigate = useNavigate();
    
    return (
        <div className='flex justify-start gap-32'>
            <div className="flex flex-col align-center justify-between items-center h-12 mt-6 ml-4">
                <a onClick={() => navigate("/")} className="text-white">
                    <i class="fa-solid fa-arrow-left"></i>
                </a>
            </div>
            <div className="flex flex-col align-center justify-between items-center h-12 mt-6">
                {props.message}
            </div>
        </div>

    );
};