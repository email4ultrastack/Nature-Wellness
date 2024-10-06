'use client'
import DonateCard from './donateCard';
import HeroSection from './heroSection';
import { useContext } from 'react';
import { context } from '@/context API/contextAPI';
import { DataFetchDonate } from '@/lib/utils/contentful';


export default function Donate() {
  const getContext = useContext(context);
  const donateData = getContext.donateData
  return (
    <>
      <DataFetchDonate/>
      <HeroSection heroSectionData = {donateData?.fields?.heroSection} />
      {/* <DonateCard donateLink = {donateData?.fields?.donateGoFundMeLink}/>      */}
      
    </>
  );
}
