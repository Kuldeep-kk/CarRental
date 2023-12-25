"use client";
import React, {useEffect} from 'react';
import styles from './howitswork.module.css';
import {IoCalendar} from "react-icons/io5";
import {FaLocationDot} from "react-icons/fa6";
import {GiSteeringWheel} from "react-icons/gi";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";

const HowItsWorks = () => {

    const controls = useAnimation();
    const [refOneToOne,inViewOne]=useInView();
    const variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const images = {
        hidden: {
            opacity: 0,
            x: 30,
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1
            },
        },
    };

    useEffect(() => {
        if (inViewOne) {
            controls.start("show");
        }
    }, [controls, inViewOne]);
    return (
        <div className={`my-24 w-full `}>
            <h3 className={`${styles.fontStyles} text-xs text-slate-400 text-center`}>HOW IT WORK</h3>
            <h2 className={`${styles.fontStyles} text-center text-xl font-semibold text-slate-600 my-2`}>Rent your desired car with following 3 working steps</h2>
            <motion.div
                variants={variants}
                initial="hidden"
                ref={refOneToOne}

                animate={controls}
                className={`flex flex-col md:flex-row justify-center items-center mt-10 gap-10 md:gap-1`}>
                <motion.div
                    variants={images}
                    className={` text-center`}>
                    <div className={`h-20 w-20 bg-white drop-shadow-2xl rounded-xl m-auto flex justify-center  items-center`}>
                        <FaLocationDot size={40} color={"#4c7a97"} className={`drop-shadow-lg`}/>
                    </div>
                    <h2 className={`${styles.fontStyles} mt-6 text-md font-semibold text-slate-600`}>
                        Pick Your location
                    </h2>
                    <p className={`${styles.fontStyles} text-xs text-slate-400 mt-2`}>Choose your location and
                        find <br/>your best car.</p>
                </motion.div>
                <h1 className={`-mt-20 text-slate-400 font-bold text-center tracking-wide hidden md:block`}>-----------</h1>
                <motion.div
                    variants={images} className={` text-center`}>
                    <div className={`h-20 w-20  rounded-xl m-auto items-center flex justify-center ${styles.calBox}`}>
                        <IoCalendar size={40} className={`text-white`} />

                    </div>
                    <h2 className={`${styles.fontStyles} mt-6 text-md font-semibold text-slate-600`}>
                        Pick-up Date
                    </h2>
                    <p className={`${styles.fontStyles} text-xs text-slate-400 mt-2`}>Select your pick up date and<br/>time to book your car.</p>
                </motion.div>
                <h1 className={`-mt-20 text-slate-400 font-bold text-center tracking-wide hidden md:block`}>-----------</h1>
                <motion.div
                    variants={images} className={` text-center`}>
                    <div className={`h-20 w-20 bg-white drop-shadow-2xl rounded-xl m-auto flex justify-center items-center`}>
                        <GiSteeringWheel size={40} color={"#4c7a97"} className={`drop-shadow-lg`} />
                    </div>
                    <h2 className={`${styles.fontStyles} mt-6 text-md font-semibold text-slate-600`}>
                        Book your Desired Car
                    </h2>
                    <p className={`${styles.fontStyles} text-xs text-slate-400 mt-2`}>We will deliver it directly to you.</p>
                </motion.div>

            </motion.div>

        </div>
    );
};

export default HowItsWorks;