"use client";
import React, {useEffect} from 'react';
import downloadImage from "../../../public/assets/mobileDownload.png";
import Image from "next/image";
import styles from "./downloadapp.module.css";
import DownAppStore from "@/app/components/DownAppStore";
import DownPlay from "@/app/components/downPlay";
import {useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {motion} from "framer-motion";

const DownloadApp = () => {
    const controls = useAnimation();
    const [refChoose, inViewChoose] = useInView();


    useEffect(() => {
        if (inViewChoose) {
            controls.start({
                x: 0
            });
        }
    }, [controls, inViewChoose]);
    return (
        <div className={`grid grid-cols-1  md:grid-cols-2  bg-amber-200 w-2/3 m-auto mt-10 rounded-2xl drop-shadow-2xl items-center justify-center  ${styles.mainBox}`}>
            <div className={`w-full m-auto order-2 md:order-1 p-3 lg:w-2/3`}>
                <motion.h2
                    ref={refChoose}
                    initial={{
                        x: -100,
                    }}
                    animate={controls}
                    transition={{duration: 1}}
                    className={`text-xl md:text-2xl font-semibold text-white mt-4 mb-2`}>Download AutoCar<br/> App for free</motion.h2>
                <motion.p
                    ref={refChoose}
                    initial={{
                        x: -100,
                    }}
                    animate={controls}
                    transition={{duration: 1}}
                    className={`text-xs text-slate-300`}>For faster, easier booking and exclusive deals.</motion.p>
                <motion.div
                    ref={refChoose}
                    initial={{
                        x: -100,
                    }}
                    animate={controls}
                    transition={{duration: 1}}
                    className={` -ml-5 flex `}>

                    <DownPlay/>
                </motion.div>

            </div>
            <motion.div
                ref={refChoose}
                initial={{
                    x: 100,
                }}
                animate={controls}
                transition={{duration: 1}}
                className={`w-1/2 md:w-full m-auto order-1 md:order-2 `}>
                <Image src={downloadImage} alt={"Download App"} className={`-mt-10 w-96`}/>
            </motion.div>


        </div>
    );
};

export default DownloadApp;