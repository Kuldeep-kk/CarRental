import Image from 'next/image'
import Navbar from "@/app/components/Navbar.js/Navbar";
import Hero from "@/app/components/Hero/Hero";
import RentalServices from "@/app/components/RentalServices/RentalServices";
import BrandLogos from "@/app/components/brandLogos";
import HowItsWorks from "@/app/components/HowItsWorks/HowItsWorks";
import WhyChooseUs from "@/app/components/WhyChooseus/WhyChooseUs";
import PopularDeal from "@/app/components/PopularDeal/PopularDeal";
import Testimonials from "@/app/components/Testimonials/Testimonials";
import DownloadApp from "@/app/components/DownloadApp/DownloadApp";
import Footer from "@/app/components/Footer/Footer";
import React from "react";
import PageWrapper from "@/app/components/PageWrapper";
import Feature from "@/app/components/Feature/Feature";

export default function Home() {
  return (
      <PageWrapper>
      <main>
          <Navbar/>
          <div className={``}>
              <Hero/>
              <RentalServices/>
          </div>

          <Feature/>

          <PopularDeal/>
          <BrandLogos/>
          <HowItsWorks/>
          <WhyChooseUs/>

          <div className={`bg-slate-100`}>
          <Testimonials/>
              <DownloadApp/>


          <Footer/>
          </div>

      </main>
      </PageWrapper>

  )
}
