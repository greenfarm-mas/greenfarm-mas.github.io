import React from 'react'
import { useNavigate } from "react-router-dom";

export function Carousel() {
    return (
    <div className=''>
        <div className="carousel h-96 absolute top-0 left-0">
            <div id="item1" className="carousel-item w-full">
                <img src="https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg" className="" />
            </div>
            <div id="item2" className="carousel-item w-full">
                <img src="https://img.freepik.com/premium-photo/indian-farmer-feeling-happy-proud-sugarcane-field_621325-10.jpg?w=2000" className="w-full" />
            </div>
            <div id="item3" className="carousel-item w-full">
                <img src="https://img.freepik.com/premium-photo/happy-indian-farmer-green-turmeric-agriculture-field_75648-12539.jpg?w=2000" className="w-full" />
            </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
            <a href="#item1" className="btn btn-xs">1</a>
            <a href="#item2" className="btn btn-xs">2</a>
            <a href="#item3" className="btn btn-xs">3</a>
            <a href="#item4" className="btn btn-xs">4</a>
        </div>
    </div>
    )
}