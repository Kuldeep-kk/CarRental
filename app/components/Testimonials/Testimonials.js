"use client";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import reviewList from "../reviewList.json";
import ReviewCard from "@/app/components/ReviewCard/ReviewCard";
import DownloadApp from "@/app/components/DownloadApp/DownloadApp";

const Testimonials = () => {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <button>Next</button>,
        prevArrow: <button>Previous</button>,
    };


    return (
        <div className={`bg-slate-100  pt-20  pb-20`}>
            <h3 className={`text-xs text-slate-400 text-center`}>TESTIMONIALS</h3>
            <h2 className={` text-center text-xl font-semibold text-slate-600 mt-4 mb-10`}>What people say about us?</h2>
            <div className={`w-1/2 m-auto rounded-3xl bg-white md:w-1/2 lg:w-1/3`}>

            <Slider {...settings}>
                {reviewList.peoples.map((cardData, i) => (
                    <ReviewCard cardData={cardData} key={i}/>
                ))}
            </Slider>
            </div>


        </div>
    );
};

export default Testimonials;