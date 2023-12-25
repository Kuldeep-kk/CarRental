"use client";
import React, {useEffect, useState} from 'react';
import styles from "./populardeal.module.css";
import carList from "../carsList.json";
import CarCard from "@/app/components/CarCard/CarCard";
import {FaArrowTurnDown, FaArrowTurnUp} from "react-icons/fa6";
import {motion} from "framer-motion";

const PopularDeal = () => {
    const [visibleCount, setVisibleCount] = useState(3);
    const [cardItems, setCardItems] = useState([]);
    const [isExpanded, setIsExpanded] = useState(true);

    useEffect(() => {
        if (carList.redringCards && carList.redringCards.length > 0) {
            // Slice the first 12 items initially
            setCardItems(carList.redringCards.slice(0, visibleCount));
        }
        if (carList.redringCards.length <= visibleCount) {
            setIsExpanded(false);
        }
    }, [carList.redringCards, visibleCount]);

    const handleViewMore = () => {
        setVisibleCount(prevCount => prevCount + 3);
        if (carList.redringCards.length <= visibleCount + 3) {
            setIsExpanded(false);
        }
    };
    const handleCollapse = () => {
        setVisibleCount(3);
        setIsExpanded(true);
    };

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
        <div className={`${styles.fontStyles} my-10`}>
            <h3 className={`text-xs text-slate-400 text-center`}>POPULAR RENTAL DEALS</h3>
            <h2 className={` text-center text-xl font-semibold text-slate-600 mt-4 mb-10`}>Most popular cars rental
                deals</h2>
            <motion.div
                variants={variants}
                initial="hidden"
                animate="show"
                className={`grid grid-cols-1 gap-5 w-2/3 m-auto md:grid-cols-2 lg:grid-cols-3  `}>
                {(cardItems && JSON.stringify(cardItems).length>2)  &&
                    <>

                        {Object.values(cardItems).map((cardData,i) => (
                            <motion.div key={CarCard.id} variants={images}>
                            <CarCard key={CarCard.id} cardData={cardData} index={i}/>
                            </motion.div>
                        ))}
                    </>
                }

            </motion.div>
            <div className={`flex justify-center mt-8 cursor-pointer`}>
                {isExpanded ? (
                    <span
                        className={`flex items-center gap-2 text-slate-500 hover:text-blue-500`}
                        onClick={handleViewMore}

                    >
                        Show all Vehicles <FaArrowTurnDown />
                    </span>
                ) : (
                    <span
                        className={`flex items-center gap-2 text-slate-500 hover:text-red-400 `}
                        onClick={handleCollapse}
                    >
                        Show less <FaArrowTurnUp />
                    </span>
                )}
            </div>


        </div>
    );
};

export default PopularDeal;