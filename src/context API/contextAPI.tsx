'use client'
import { ReactNode, createContext, useState, Dispatch, SetStateAction } from "react"

interface ContextAPI {
    navbarData: any,
    setNavbarData: Dispatch<SetStateAction<any>>,
    homeData: any,
    setHomeData: Dispatch<SetStateAction<any>>,
    aboutUsData: any,
    setAboutUsData: Dispatch<SetStateAction<any>>,
    whatWeDoData: any,
    setWhatWeDoData: Dispatch<SetStateAction<any>>,
    blogsData: any,
    setBlogsData: Dispatch<SetStateAction<any>>,
    donateData: any,
    setDonateData: Dispatch<SetStateAction<any>>,
    contactData: any,
    setContactData: Dispatch<SetStateAction<any>>,
    footerData: any,
    setFooterData: Dispatch<SetStateAction<any>>,
}
export const context = createContext({} as ContextAPI);

export default function ContextApp({ children }: { children: ReactNode }) {
    const [homeData, setHomeData] = useState([]);
    const [navbarData, setNavbarData] = useState([]);
    const [footerData, setFooterData] = useState([]);
    const [aboutUsData, setAboutUsData] = useState([]);
    const [whatWeDoData, setWhatWeDoData] = useState([]);
    const [blogsData, setBlogsData] = useState([]);
    const [contactData, setContactData] = useState([]);
    const [donateData, setDonateData] = useState([]);

    return <context.Provider value={{ homeData, setHomeData, navbarData, setNavbarData, footerData, setFooterData, aboutUsData, setAboutUsData, whatWeDoData, setWhatWeDoData, blogsData,setBlogsData, donateData, setDonateData, contactData, setContactData}}>
        {children}
    </context.Provider>
} 