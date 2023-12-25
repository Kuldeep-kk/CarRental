"use client";
import React from 'react';
import bmw from "../../public/assets/brandLogo/bmw.png";
import volks from "../../public/assets/brandLogo/volks.png";
import tata from "../../public/assets/brandLogo/tata.png";
import mahindra from "../../public/assets/brandLogo/mahindra.png";
import toyota from "../../public/assets/brandLogo/toyota.png";
import ford from "../../public/assets/brandLogo/ford.png";
import nissan from "../../public/assets/brandLogo/nissan.png";
import mazo from "../../public/assets/brandLogo/mazo.png";
import Image from "next/image";
import {motion} from "framer-motion";



const BrandLogos = () => {
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

        <motion.div
            variants={variants}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-4 md:gap-8 lg:gap-10 xl:gap-12 justify-center items-center mt-10">

            <motion.div variants={images}>
                <Image src={volks} alt={"volks"} width={70}
                       className={`transition ease-in-out delay-200 cursor-pointer hover:scale-110`}/>
            </motion.div>
            <motion.div variants={images}>
                <Image src={bmw} alt={"bmw"} width={70}
                       className={`transition ease-in-out delay-200 cursor-pointer hover:scale-110`}/>
            </motion.div>
            <motion.div variants={images}>
            <Image src={tata} alt={"tata"} width={70}
                   className={`transition ease-in-out delay-200 cursor-pointer hover:scale-110`}/>
            </motion.div>
            <motion.div variants={images}>
            <Image src={mahindra} alt={"mahindra"} width={70}
                   className={`transition ease-in-out delay-200 cursor-pointer hover:scale-110`}/>
            </motion.div>
            <motion.div variants={images}>
            <Image src={mazo} alt={"mazo"} width={70}
                   className={`transition ease-in-out delay-200 cursor-pointer hover:scale-110`}/>
            </motion.div>
            <motion.div variants={images}>
            <Image src={toyota} alt={"toyota"} width={70}
                   className={`transition ease-in-out delay-200 cursor-pointer hover:scale-110`}/>
            </motion.div>
            <motion.div variants={images}>
            <Image src={ford} alt={"ford"} width={70}
                   className={`transition ease-in-out delay-200 cursor-pointer hover:scale-110`}/>
            </motion.div>
            <motion.div variants={images}>
            <Image src={nissan} alt={"nissan"} width={70}
                   className={`transition ease-in-out delay-200 cursor-pointer hover:scale-110`}/>
            </motion.div>


        </motion.div>
    );
};

export default BrandLogos;