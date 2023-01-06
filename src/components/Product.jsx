import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import AOS from 'aos'; import 'aos/dist/aos.css';
export function Product(props) {
    useEffect(() => {
        AOS.init();
    }, [])
    const addToCart = () => {
        props.addToCart({ title: props.title, price: props.price });
      };
    return (
        <div data-aos="fade-up" data-aos-delay="200">
            <div className="card card-compact w-48 h-68 bg-base-300 shadow-xl relative">
                <figure className='absolute top-0 left-0 h-24'><img src={props.image} alt="Shoes" /></figure>
                <div className="card-body mt-2">
                    <div className='w-fit mx-auto'>
                        <h2 className="card-title mt-16 w-fit">{props.title}</h2>
                    </div>
                    <p>{props.price}</p>
                    <div className="card-actions justify-end flex">
                        <div>
                            <button className="btn btn-primary mt-2" onClick={addToCart}>Add To Cart</button>
                        </div>
                        <div className=''>
                            <label htmlFor={props.modalId} className="btn absolute top-[0.01rem] left-[8.5rem] bg-transparent text-primary-focus text-3xl border-0 " > <i className="fa-solid fa-circle-info "> </i></label>
                        </div>
                    </div>

                </div>
            </div>
            <input type="checkbox" id={props.modalId} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <figure className='absolute top-0 left-0 h-24'><img src={props.image} alt="Shoes" /></figure>
                    <h3 className="font-bold text-lg text-secondary-content mt-64">{props.title}</h3>
                    <p className="py-4 text-secondary-content mt-5">{props.description}</p>
                    <p className="py-4 text-secondary-content mt-5">{props.price}</p>
                    <div className="modal-action">
                        <label htmlFor={props.modalId} className="btn bg-primary-focus text-accent border-0">close</label>
                    </div>
                </div>
            </div>
        </div>
    )
}