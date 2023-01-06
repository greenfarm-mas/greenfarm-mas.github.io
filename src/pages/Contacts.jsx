import React from 'react'
import { useNavigate } from "react-router-dom";
import { NavBar } from '../components/NavBar';
import { Carousel } from '../components/Carousel';
import { Product } from '../components/Product';
import { Header } from '../components/Header';
import { ContactItem } from '../components/ContactItem';
import { NavTop } from '../components/NavTop';
export function Contacts() {
    return (
        <div className=''>
            <div className="bg-secondary-content rounded-xl flex justify-start gap-36 mt-0 mb-20">
                <NavTop message="Contacts" />
            </div>
            <div className="flex flex-col w-full mb-32">
                <ContactItem title="User Support" number="910887197"></ContactItem>
                <div className="divider m-0"></div>
                <ContactItem title="Transporters and Staff" number="914531502"></ContactItem>
                <div className="divider m-0"></div>
                <ContactItem title="Agriculture Producer" number="916445051"></ContactItem>
            </div>
            <NavBar></NavBar>
        </div>
    )
}