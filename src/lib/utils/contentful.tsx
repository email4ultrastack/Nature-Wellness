'use client'

import { useEffect, useContext } from "react"
import { context } from "@/context API/contextAPI"


async function getNestedRichData(client:any,section:any){

  if (section && section.fields?.multipleRichDescriptions) {
      const multipleRichDescriptions = await Promise.all(
        section.fields.multipleRichDescriptions.map(async (item: any) => {
              const entry = await client.getEntry(item.sys.id);
              return entry;
          })
      );
      
      return multipleRichDescriptions;
  }
}

// Home Page Data
export const DataFetchHome=()=>{

    const getContext = useContext(context)
    const setNavbarData = getContext.setNavbarData;
    const setHomeData = getContext.setHomeData;
    const setFooterData = getContext.setFooterData;
    useEffect(()=>{
        async function getData(){

            const client = require('contentful').createClient({
                space: process.env.NEXT_PUBLIC_SPACE_ID,
                accessToken: process.env.NEXT_PUBLIC_CONTENT_DELIVERY_API
              })
              
              try{
                // Navbar Data
                const navbarData  = await client.getEntries({
                    content_type: 'navbar',
                    include: 1,
                  })
                  setNavbarData(navbarData.items[0])
                  console.log('Navbar Data')
                  console.log(navbarData.items[0])
                // Home Data
                  const homePageData  = await client.getEntries({
                    content_type: 'homePage',
                  })
                  //  Hero Section Nested Multiple Rich Descriptions Data Fetch 
                  const heroSection = homePageData.items[0]?.fields?.heroSection;
                  let data = await(getNestedRichData(client,heroSection))
                  // Add the fetched descriptions to heroSection
                  heroSection.fields.multipleRichDescriptions = data;

                  
                  //  section3SecondHalf Nested Multiple Rich Descriptions Data Fetch 
                  const section3SecondHalf = homePageData.items[0]?.fields?.section3SecondHalf;
                   data = await(getNestedRichData(client,section3SecondHalf))
                    section3SecondHalf.fields.multipleRichDescriptions = data;

                    //  testimonialSection Nested Multiple Rich Descriptions Data Fetch 
                  const testimonialSection = homePageData.items[0]?.fields?.testimonialSection;
                  data = await(getNestedRichData(client,testimonialSection))
                  testimonialSection.fields.multipleRichDescriptions = data;
                  
                  
                  setHomeData(homePageData.items[0])
                  // console.log('Home Page Data')
                  // console.log(homePageData.items[0])

                  // Footer Data
                const footerData  = await client.getEntries({
                    content_type: 'footer',
                  })
                  setFooterData(footerData.items[0])
                  // console.log('Footer Data')
                  // console.log(footerData.items[0])
                
              }
              catch(err){
                  console.log('Error is '+err)
              }
        }
        getData()
    },[])

    return(
        <>
       
        </>

)
}

// About US Page Data
export const DataFetchAbout=()=>{

  const getContext = useContext(context)
  const setNavbarData = getContext.setNavbarData;
  const setAboutUsData = getContext.setAboutUsData;
  const setFooterData = getContext.setFooterData;
  useEffect(()=>{

      async function getData(){

          const client = require('contentful').createClient({
              space: process.env.NEXT_PUBLIC_SPACE_ID,
              accessToken: process.env.NEXT_PUBLIC_CONTENT_DELIVERY_API
            })
            
            try{
              // Navbar Data
              const navbarData  = await client.getEntries({
                  content_type: 'navbar',
                    include: 1,
                })
                setNavbarData(navbarData.items[0])
                // console.log('Navbar Data')
                // console.log(navbarData.items[0])
              // About Us Data
                const abouUsPageData  = await client.getEntries({
                  content_type: 'aboutUsPage',
                })
                //  Section3 Nested Multiple Rich Descriptions Data Fetch 
                const section3 = abouUsPageData.items[0]?.fields?.section3;
                let data = await(getNestedRichData(client,section3))
                // Add the fetched descriptions to heroSection
                section3.fields.multipleRichDescriptions = data;

                setAboutUsData(abouUsPageData.items[0])
                // console.log('About Us Page Data')
                // console.log(abouUsPageData.items[0])

                // Footer Data
              const footerData  = await client.getEntries({
                  content_type: 'footer',
                })
                setFooterData(footerData.items[0])
                // console.log('Footer Data')
                // console.log(footerData.items[0])
              
            }
            catch(err){
                console.log('Error is '+err)
            }
      }
      getData()
  },[])

  return(
      <>
     
      </>

)
}

// What We Do Page Data
export const DataFetchWhatWeDo=()=>{

  const getContext = useContext(context)
  const setNavbarData = getContext.setNavbarData;
  const setWhatWeDoData = getContext.setWhatWeDoData;
  const setFooterData = getContext.setFooterData;

  useEffect(()=>{

      async function getData(){

          const client = require('contentful').createClient({
              space: process.env.NEXT_PUBLIC_SPACE_ID,
              accessToken: process.env.NEXT_PUBLIC_CONTENT_DELIVERY_API
            })
            
            try{
              // Navbar Data
              const navbarData  = await client.getEntries({
                  content_type: 'navbar',
                    include: 1,
                })
                setNavbarData(navbarData.items[0])
                // console.log('Navbar Data')
                // console.log(navbarData.items[0])
              // What We Do Data
                const whatWeDoPageData  = await client.getEntries({
                  content_type: 'whatWeDoPage',
                })
                 //  Section2 Nested Multiple Rich Descriptions Data Fetch 
                 const section2 = whatWeDoPageData.items[0]?.fields?.section2;
                 let data = await(getNestedRichData(client,section2))
                 // Add the fetched descriptions to heroSection
                 section2.fields.multipleRichDescriptions = data;
                setWhatWeDoData(whatWeDoPageData.items[0])
                // console.log('What We Do Page Data')
                // console.log(whatWeDoPageData.items[0])

                // Footer Data
              const footerData  = await client.getEntries({
                  content_type: 'footer',
                })
                setFooterData(footerData.items[0])
                // console.log('Footer Data')
                // console.log(footerData.items[0])
              
            }
            catch(err){
                console.log('Error is '+err)
            }
      }
      getData()
  },[])

  return(
      <>
     
      </>

)
}


// Blog Page Data
export const DataFetchBlogs=()=>{

  const getContext = useContext(context)
  const setNavbarData = getContext.setNavbarData;
  const setBlogsDoData = getContext.setBlogsData;
  const setFooterData = getContext.setFooterData;

  useEffect(()=>{

      async function getData(){

          const client = require('contentful').createClient({
              space: process.env.NEXT_PUBLIC_SPACE_ID,
              accessToken: process.env.NEXT_PUBLIC_CONTENT_DELIVERY_API
            })
            
            try{
              // Navbar Data
              const navbarData  = await client.getEntries({
                  content_type: 'navbar',
                    include: 1,
                })
                setNavbarData(navbarData.items[0])
                // console.log('Navbar Data')
                // console.log(navbarData.items[0])
              // Blog Data
                const blogPageData  = await client.getEntries({
                  content_type: 'blogs',
                })
                console.log('Blog Page Data: ',blogPageData.items[0]);
                 
                setBlogsDoData(blogPageData.items[0])
                // console.log('Blog Page Data')
                // console.log(blogPageData.items[0])

                // Footer Data
              const footerData  = await client.getEntries({
                  content_type: 'footer',
                })
                setFooterData(footerData.items[0])
                // console.log('Footer Data')
                // console.log(footerData.items[0])
              
            }
            catch(err){
                console.log('Error is '+err)
            }
      }
      getData()
  },[])

  return(
      <>
     
      </>

)
}


// Contact Page Data
export const DataFetchDonate=()=>{

  const getContext = useContext(context)
  const setNavbarData = getContext.setNavbarData;
  const setDonateData = getContext.setDonateData;
  const setFooterData = getContext.setFooterData;

  useEffect(()=>{

      async function getData(){

          const client = require('contentful').createClient({
              space: process.env.NEXT_PUBLIC_SPACE_ID,
              accessToken: process.env.NEXT_PUBLIC_CONTENT_DELIVERY_API
            })
            
            try{
              // Navbar Data
              const navbarData  = await client.getEntries({
                  content_type: 'navbar',
                    include: 1,
                })
                setNavbarData(navbarData.items[0])
                // console.log('Navbar Data')
                // console.log(navbarData.items[0])
              // Contact Data
                const donatePageData  = await client.getEntries({
                  content_type: 'donate',
                })

                setDonateData(donatePageData.items[0])
                // console.log('Donate Page Data')
                // console.log(donatePageData.items[0])

                // Footer Data
              const footerData  = await client.getEntries({
                  content_type: 'footer',
                })
                setFooterData(footerData.items[0])
                // console.log('Footer Data')
                // console.log(footerData.items[0])
              
            }
            catch(err){
                console.log('Error is '+err)
            }
      }
      getData()
  },[])

  return(
      <>
     
      </>

)
}


// Contact Page Data
export const DataFetchContact=()=>{

  const getContext = useContext(context)
  const setNavbarData = getContext.setNavbarData;
  const setContactData = getContext.setContactData;
  const setFooterData = getContext.setFooterData;

  useEffect(()=>{

      async function getData(){

          const client = require('contentful').createClient({
              space: process.env.NEXT_PUBLIC_SPACE_ID,
              accessToken: process.env.NEXT_PUBLIC_CONTENT_DELIVERY_API
            })
            
            try{
              // Navbar Data
              const navbarData  = await client.getEntries({
                  content_type: 'navbar',
                    include: 1,
                })
                setNavbarData(navbarData.items[0])
                // console.log('Navbar Data')
                // console.log(navbarData.items[0])
              // Contact Data
                const contactPageData  = await client.getEntries({
                  content_type: 'contact',
                })
                //  Hero Section Nested Multiple Rich Descriptions Data Fetch 
                const heroSection = contactPageData.items[0]?.fields?.heroSection;
                let data = await(getNestedRichData(client,heroSection))
                // Add the fetched descriptions to heroSection
                heroSection.fields.multipleRichDescriptions = data;
                 
                //  faqSection Nested Multiple Rich Descriptions Data Fetch 
                const faqSection = contactPageData.items[0]?.fields?.faqSection;
                data = await(getNestedRichData(client,faqSection))
                // Add the fetched descriptions to heroSection
                faqSection.fields.multipleRichDescriptions = data;

                setContactData(contactPageData.items[0])
                // console.log('Contact Page Data')
                // console.log(contactPageData.items[0])

                // Footer Data
              const footerData  = await client.getEntries({
                  content_type: 'footer',
                })
                setFooterData(footerData.items[0])
                // console.log('Footer Data')
                // console.log(footerData.items[0])
              
            }
            catch(err){
                console.log('Error is '+err)
            }
      }
      getData()
  },[])

  return(
      <>
     
      </>

)
}