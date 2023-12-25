"use client";
import React from 'react';
import Slider from "react-slick";

const Feature = () => {
    const images=[
        "https://revvselfdrivecar.s3.us-west-2.amazonaws.com/Featured+3+days.png",
        "https://revvselfdrivecar.s3.us-west-2.amazonaws.com/10+days.png",
        "https://revvselfdrivecar.s3.us-west-2.amazonaws.com/15+days.png",
        "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/subscriptions_banners_01-min.jpg",
        "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/subscriptions_banners_02-min.jpg",
        "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/subscriptions_banners_03-min.jpg",
        "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/subscriptions_banners_04-min.jpg",
        "https://revvselfdrivecar.s3.us-west-2.amazonaws.com/new20.png",
        "https://revvselfdrivecar.s3.us-west-2.amazonaws.com/Feature_Flat+10%25+off_bgr+and+hyd.png",
        "https://revvselfdrivecar.s3.us-west-2.amazonaws.com/Featured+2+days.png"
    ]
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <div className={` overflow-x-hidden m-auto w-full md:w-[80%]`}>
            <Slider {...settings} >
                {images.map((image, index) => (
                    <div key={index} className={` p-16`}>
                        <img src={image} alt={`Image ${index + 1}`} className={`transition delay-200 hover:cursor-pointer drop-shadow-2xl rounded hover:scale-110`} />
                    </div>
                ))}
            </Slider>
            
        </div>
    );
};

export default Feature;