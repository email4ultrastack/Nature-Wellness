'use client'
import HeroSection from "./heroSection";
import ContactCards from "./contactCards";
import FAQAccordian from "./faqs";
import { useContext } from "react";
import { context } from "@/context API/contextAPI";
import { DataFetchContact } from "@/lib/utils/contentful";


export default function Contact(){
    const getContext = useContext(context);
    const contactData = getContext.contactData;
    return(
        <>
        <DataFetchContact/>
       <div className=" relative">
      <HeroSection heroSectionData = {contactData?.fields?.heroSection}/>
      <ContactCards cardsData = {contactData?.fields?.heroSection}/>
      </div>
      
      <FAQAccordian faqsData = {contactData?.fields?.faqSection}/>
        </>
    )
}