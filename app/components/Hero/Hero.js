"use client";
import React from 'react';
import Image from "next/image";
import heroImg from "../../../public/assets/HeroPoster.png";
import styles from "./hero.module.css";
import DownAppStore from "@/app/components/DownAppStore";
import DownPlay from "@/app/components/downPlay";
import {motion} from "framer-motion";

const Hero = () => {
    return (

        <div className={`flex flex-col md:flex-row  ${styles.heroMain}`}>
            <div className={`flex items-center w-full justify-center md:w-1/2 md:pl-10 md:pt-5 md:pb-14`}>
                <motion.div
                    initial={{
                    y: -100,
                }}
                    animate={{y: 0,}}
                    transition={{duration: 1}}
                    className={`flex flex-col pl-10 md:pl-0 justify-center`}>

                <h2 className={`text-2xl text-slate-500 tracking-normal md:text-4xl lg:text-5xl ${styles.heroHeader}`}>Rent
                    you favorite <br/> car in <span className={``}>Easy</span> steps.</h2>
                <p className={`text-sm text-slate-400 ${styles.postText} mt-2 w-3/4 md:w-[80%]`}>Get a car wherever and
                    whenever you need it with your iOS or Android device.</p>
                <div className={` -ml-5 flex justify-start mt-3  `}>
                    <DownAppStore/>
                    <DownPlay/>
                </div>
            </motion.div>
        </div>
            <motion.div
                initial={{
                    x: 100,
                }}
                animate={{x: 0,}}
                transition={{duration: 1}} className={` w-full md:w-1/2 relative  `}>
        <Image src={heroImg} alt={""} className={`pt-16 pb-7 px-10 md:px-0 md:w-full`}/>
            </motion.div>
</div>
)
    ;
};

export default Hero;