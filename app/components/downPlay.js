import React from 'react';
import Image from "next/image";
import play from "@/public/assets/playlogo.png";

const DownPlay = () => {
    return (
        <div className={`bg-gray-800 flex p-2 rounded-xl items-center shadow drop-shadow-xl w-fit scale-75 transition ease-in-out delay-150 active:scale-50 hover:cursor-pointer`}>
            <Image src={play} alt={"appleLogo"} className={`w-10`}/>
            <div className={`ml-2`}>
                <h2 className={`text-white text-sm`}>Download on the</h2>
                <h2 className={`text-white text-xl`}>Google Play</h2>
            </div>


        </div>
    );
};

export default DownPlay;