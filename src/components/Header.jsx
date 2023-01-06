import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
export function Header(props) {
    const clearCart = () => {
        props.clearCart([]);
    };
    let total = props.purchaseCart;
    console.log(total);
    return (
        <div className="navbar bg-primary text-primary-content z-10 fixed left-0 rounded-lg ml-4 mt-4 w-11/12">
            <a className="btn btn-ghost normal-case text-xl">GreenFarm</a>
            <div className="dropdown dropdown-end absolute right-5">
                <label tabIndex={0} className="m-1 cursor-pointer hover:animate-bounce"><i className='fa-solid fa-shopping-cart'></i></label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    {props.cartItems.map(item => (
                        <li key={item.title}>
                            <a>{item.title} ({item.price}) x {item.quantity}</a>
                        </li>
                    ))}
                    <label for="purchase-modal" className="btn btn-success mt-2 w-full">Purchase ${total}</label>

                    <button onClick={clearCart} className="btn btn-secondary mt-2 w-full">Clear cart</button>
                </ul>

            </div>
            <input type="checkbox" id="purchase-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Purchase ${total}?</h3>
                    <div class="modal-action">
                        <label for="purchase-modal" class="btn btn-error">Close</label>

                        <label for="purchase-modal" class="btn-success btn" onClick={clearCart} >Confirm</label>
                    </div>
                </div>
            </div>
        </div>
    )
}












