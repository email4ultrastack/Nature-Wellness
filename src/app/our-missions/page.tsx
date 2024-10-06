'use client'
import { DataFetchWhatWeDo } from "@/lib/utils/contentful";
import HeroSection from "./heroSection";
import WhatWeDoSection from "./what-we-do-section";
import { useContext } from "react";
import { context } from "@/context API/contextAPI";

export default function WhatWeDo(){
    const getContext = useContext(context);
    const whatWeDoData = getContext.whatWeDoData;
    return(
        <>
        <DataFetchWhatWeDo/>
        <HeroSection heroSectionData = {whatWeDoData?.fields?.heroSection}/>
        <WhatWeDoSection section2Data = {whatWeDoData?.fields?.section2}/>
        </>
    )
}