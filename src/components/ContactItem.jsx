import React from 'react'
import { useNavigate } from "react-router-dom";


export function ContactItem(props) {


    return (
        <div>
            <div className="grid flex-grow h-32 my-5 w-96 card bg-primary-content rounded-box place-items-center">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-2xl font-bold">{props.title}</h1>
                    <p className="text-base"> <i className='fa-solid fa-phone mr-2'></i>{props.number}</p>
                </div>
            </div>
        </div>

    );
};