import React from 'react';
import styles from "./review.module.css";

const ReviewCard = ({cardData}) => {
    return (
        <div className={`flex flex-col md:flex-row ${styles.fontStyles}`}>
            <img src={cardData.imageSrc} alt={cardData.name} className={`w-full h-40 md:w-36 md:w-36  rounded-2xl`}/>
            <div className={`p-3`}>
                <h2 className={`text-slate-600`}>{cardData.name}</h2>
                <p className={`text-slate-400 text-xs font-light mt-2`}>{cardData.desc}</p>
                {cardData.stars===5 && <p>⭐⭐⭐⭐⭐</p>}
                {cardData.stars===4 && <p>⭐⭐⭐⭐</p>}
                {cardData.stars===3 && <p>⭐⭐⭐</p>}
                {cardData.stars===2 && <p>⭐⭐</p>}
                {cardData.stars===1 && <p>⭐</p>}
            </div>


        </div>
    );
};

export default ReviewCard;