"use client";
import React, {useEffect} from 'react';
import styles from "./whychooseus.module.css";
import carServices from "../../../public/assets/carServices.png";

import Image from "next/image";
import {MdSupportAgent} from "react-icons/md";
import {TbBrandDaysCounter} from "react-icons/tb";
import {GiCarKey} from "react-icons/gi";
import {ImPriceTags} from "react-icons/im";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
const WhyChooseUs = () => {
    const controls = useAnimation();
    const [refChoose, inViewChoose] = useInView();
    const [refOneToOne,inViewOne]=useInView();


    useEffect(() => {
        if (inViewChoose) {
            controls.start({
                x: 0
            });
        }
    }, [controls, inViewChoose]);
    useEffect(() => {
        if (inViewOne) {
            controls.start("show");
        }
    }, [controls, inViewOne]);

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
    return (


        <div
        className={`flex flex-col md:flex-row bg-slate-100  p-20 md:p-8 ${styles.fontStyle}`}>
            <motion.div
                ref={refChoose}
                initial={{
                    x: -100,
                }}
                animate={controls}
                transition={{duration: 1}}
                className={`flex items-center w-full justify-center md:w-1/2 `}>
                <Image src={carServices} alt={"car Service Image"} className={`w-[90%]`}/>
            </motion.div>
            <div className={` w-full md:w-1/2 relative `}>
                <h3 className={`text-slate-400 text-xs `}>WHY CHOOSE US</h3>
                <h2 className={`text-xl font-semibold text-slate-600 my-3`}>Get the best experience of rental cars</h2>
                <motion.div
                    ref={refOneToOne}

                    animate={controls}

                    variants={variants}
                    initial="hidden"
                     className={``}>
                    <motion.div
                        variants={images}
                        className={`flex gap-6 items-center justify-start my-5`}>
                        <div
                            className={`h-16 w-16 bg-white drop-shadow-2xl rounded-xl flex justify-center  items-center`}>
                            <ImPriceTags size={30} color={"#5195b2"}/>

                        </div>
                        <div>
                            <h3 className={`text-slate-500`}>
                                Cheapest Market Price Guarantee
                            </h3>
                            <p className={`text-sm text-slate-400`}>We refund 100% if you find cheaper deal</p>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={images}
                        className={`flex gap-6 items-center justify-start my-5`}>
                        <div
                            className={`h-16 w-16 bg-white drop-shadow-2xl rounded-xl flex justify-center  items-center`}>
                            <GiCarKey size={30} color={"#5195b2"}/>
                        </div>
                        <div>
                            <h3 className={`text-slate-500`}>
                                Self Drive
                            </h3>
                            <p className={`text-sm text-slate-400`}> Navigate your own journey, self-driven success.</p>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={images}
                        className={`flex gap-6 items-center justify-start my-5`}>
                        <div
                            className={`h-16 w-16 bg-white drop-shadow-2xl rounded-xl flex justify-center  items-center`}>
                            <TbBrandDaysCounter size={30} color={"#5195b2"}/>

                        </div>
                        <div>
                            <h3 className={`text-slate-500`}>
                                Same Day Delivery
                            </h3>
                            <p className={`text-sm text-slate-400`}>Swift service, same day delight delivered.</p>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={images}
                        className={`flex gap-6 items-center justify-start my-5`}>
                        <div
                            className={`h-16 w-16 bg-white drop-shadow-2xl rounded-xl flex justify-center  items-center`}>
                            <MdSupportAgent size={30} color={"#5195b2"}/>

                        </div>
                        <div>
                            <h3 className={`text-slate-500`}>
                                24/7 Support
                            </h3>
                            <p className={`text-sm text-slate-400`}>Round-the-clock care, support at every hour.</p>
                        </div>
                    </motion.div>
                </motion.div>

            </div>


        </div>
    );
};

export default WhyChooseUs;