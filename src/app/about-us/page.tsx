'use client'
import { DataFetchAbout } from '@/lib/utils/contentful'
import AboutSection from './aboutSection'
import HeroSection from './heroSection'
import Section3 from './section3'
import { context } from '@/context API/contextAPI'
import { useContext } from 'react'
import Head from 'next/head'

export default function AboutUS() {
    const getContext = useContext(context);
    const aboutUsData = getContext.aboutUsData;
    // console.log('About Us Data');
    // console.log(aboutUsData);
    // console.log(aboutUsData?.fields?.ogTag?.fields?.ogTitle);
    // console.log(aboutUsData?.fields?.ogTag?.fields?.ogPageTitle);
    // console.log(aboutUsData?.fields?.ogTag?.fields?.ogDescription);
    // console.log(aboutUsData?.fields?.ogTag?.fields?.ogImage.fields.file.url);
    return (
        <>
            <DataFetchAbout />
            <Head>
                <title>{aboutUsData?.fields?.ogTag?.fields?.ogTitle}</title>
                <meta property="og:title" content={aboutUsData?.fields?.ogTag?.fields?.ogPageTitle} />
                <meta property="og:description" content={aboutUsData?.fields?.ogTag?.fields?.ogDescription} />
                <meta property="og:image" content={aboutUsData?.fields?.ogTag?.fields?.ogImage.fields.file.url} />
                {/* <meta property="og:url" content={'https://hydrate-humanity-alpha.vercel.app/about-us'} /> */}
            </Head>
            <HeroSection heroSectionData={aboutUsData?.fields?.heroSection} />
            <AboutSection aboutSectionData={aboutUsData?.fields?.aboutUsSection} />
            <Section3 section3Data={aboutUsData?.fields?.section3} />
        </>
    )
}