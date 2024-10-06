'use client'
import { DataFetchHome } from "@/lib/utils/contentful";
import AboutSection from "./aboutSection";
import HeroSection from "./heroSection";
import Testimonials from "./testimonials";
import WhatWeDoCards from "./whatWeDoCards";
import { WhatWeDoSection } from "./whatWeDoSection";
import { useContext } from "react";
import { context } from "@/context API/contextAPI";
import BannerNCount from "./bannerNcount";


export default function Home() {

  const getContext = useContext(context);
  const homeData = getContext.homeData; 
  console.log('Home Data');
  console.log(homeData);
  
  
  return (
      <>

      <DataFetchHome/>
      <div>
      <HeroSection heroSectionData = {homeData?.fields?.heroSection}/>
      </div>
      <WhatWeDoSection whatWeDoData = {homeData?.fields} />
      <WhatWeDoCards cardsData = {homeData?.fields?.heroSection}/>
      <AboutSection aboutSectionData  = {homeData?.fields?.section2}/>
      <BannerNCount whatWeDoData = {homeData?.fields} />
      <Testimonials testimonialData = {homeData?.fields?.testimonialSection}/>
      </>
    );
  }