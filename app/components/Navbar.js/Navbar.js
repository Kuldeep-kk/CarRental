import React from 'react';
import logo from '../../../public/assets/logo.png';
import Image from "next/image";
import {AiOutlineLogin} from "react-icons/ai";

const Navbar = () => {
    return (
        <nav className="">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 px-8 md:px-2">
                <a href="https://flowbite.com" className="">
                    <Image src={logo} alt={""} className={`h-10 w-auto `}/>
                </a>
                <div className="flex items-center space-x-3 md:space-x-6 rtl:space-x-reverse">
                    <a href="tel:5541251234" className="text-sm font-bold text-slate-500   hover:underline"> FAQs </a>
                    <a href="#" className=" text-sky-400  flex items-center hover:underline"><AiOutlineLogin size={25} className={`font-bold `}/><span className={`hidden md:block`}>Login or SignUp</span></a>
                </div>
            </div>
        </nav>
    )
        ;
};

export default Navbar;