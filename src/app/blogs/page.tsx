'use client'
import BlogSection from "./blogSection";
import HeroSection from "./heroSection";
import { useContext } from "react";
import { context } from "@/context API/contextAPI";
import { DataFetchBlogs } from "@/lib/utils/contentful";


export default function Blogs(){

    const getContext = useContext(context);
    const blogsData = getContext.blogsData;

    return(
        <>
        <DataFetchBlogs/>
        <HeroSection heroSectionData = {blogsData?.fields?.heroSection}/>
        <BlogSection blogSectionData = {blogsData?.fields?.section2}/>
        </>

    )
}