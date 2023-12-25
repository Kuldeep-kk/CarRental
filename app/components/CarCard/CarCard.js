import React from 'react';
import Image from "next/image";
import {MdAirlineSeatReclineExtra} from "react-icons/md";
import {GiSettingsKnobs} from "react-icons/gi";
import {LuAirVent} from "react-icons/lu";
import {IoMdArrowRoundForward} from "react-icons/io";
import styles from "./carcard.module.css";

const CarCard = ({cardData}) => {
    return (
        <div className={`m-auto w-64 py-3 px-2 ${styles.fontStyles} `}>
            <img src={cardData.imageSrc} alt={cardData.title} className={`w-44 m-auto`} />
            <h2 className={`text-center`}>{cardData.title}</h2>
            <div className={`${styles.detailFont}`}>
                <div className={`flex justify-between my-3 text-slate-500 `}>
                    <div className={`flex items-center gap-2`}><MdAirlineSeatReclineExtra size={25} />{cardData.seater} Passenger</div>
                    <div className={`flex items-center gap-2`}><GiSettingsKnobs size={20} />{cardData.gear}</div>

                </div>
                <div className={`flex my-3 text-slate-500`}>
                    <div className={`flex items-center gap-2`}>
                        <LuAirVent size={20}/> Air Conditioner
                    </div>

                </div>
                <hr/>
                <div className={`flex justify-between mt-3 text-slate-500`}>
                    <div className={`text-blue-400`}>₹{cardData.price}/hour</div>
                    <div className={`flex items-center text-red-400 gap-2`}>Book now<IoMdArrowRoundForward /></div>

                </div>
            </div>
            
        </div>
    );
};

export default CarCard;