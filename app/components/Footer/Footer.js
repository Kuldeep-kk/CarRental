import React from 'react';
import Image from "next/image";
import logo from "@/public/assets/logo.png";
import DownloadApp from "@/app/components/DownloadApp/DownloadApp";
import {IoCall} from "react-icons/io5";
import {FaXTwitter} from "react-icons/fa6";
import {FaYoutube} from "react-icons/fa";
import {BsFacebook} from "react-icons/bs";
import {RiInstagramFill} from "react-icons/ri";
import styles from "./footer.module.css";

const Footer = () => {
    return (
        <div className={`bg-gray-400 -mt-24 ${styles.footerMain}`}>

            <div className={`grid grid-cols-1 md:gap-4 pt-32 pb-16 md:pb-5 items-center md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-0`}>
                <div className={`m-auto`}>
                    <Image src={logo} alt={""} className={`h-10 w-auto `}/>
                </div>
                <div className={`m-auto text-slate-500 text-md  `}>Jalandhar - Delhi, Grand Trunk Rd,<br/> Phagwara, Punjab 144001</div>
                <div className={`flex items-center gap-2 m-auto text-slate-500`}><IoCall size={22} /> 7007834160</div>
                <div className={`m-auto text-slate-500`}>
                    <div>Follow Us</div>
                    <div className={`flex gap-4`}>
                        <FaXTwitter size={22} />
                        <BsFacebook size={22} />
                        <FaYoutube size={22}/>
                        <RiInstagramFill size={22} />
                    </div>
                </div>

            </div>
            <hr/>
            <p className={`text-center text-xs mt-4 text-slate-500`}>Copyright 2023 &copy; Kuldeep_k. All Right Reserved </p>

        </div>
    );
};

export default Footer;