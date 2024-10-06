'use client'
import { useContext } from "react"
import { context } from "@/context API/contextAPI"
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types"
import { DataFetchWhatWeDo } from "@/lib/utils/contentful";

export default function Footer(){
    
    const getContext = useContext(context);
    const footerData = getContext.footerData;
    const navbarData = getContext.navbarData;
    const whatWeDoData = getContext.whatWeDoData;

    const options = {
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node:any) => (
            <p className="mb-3">
            {node.content.map((contentNode: any, index: number) => (
              <span key={index}>{contentNode.value}</span>
            ))}
          </p>
          ),
          
        },
      };

    return(

<footer className="bg-white w-full ">
    <div className="mx-auto flex items-center flex-col w-full max-w-screen-xl">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 px-4 py-6 lg:py-8 lg:grid-cols-3 justify-center">
        <div className=" w-[90%] ">
            <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase ">{footerData?.fields?.footer[0]?.fields?.title}</h2>
            <ul className="text-gray-500  font-medium">
                <li className="mb-6 text-justify">
                    <p className=" ">{footerData?.fields?.footer[0]?.fields?.description}</p>
                </li>
            </ul>
        </div>
        <div className=" w-[100%] min-[1024px]:ml-20">
            <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase ">{footerData?.fields?.footer[1]?.fields?.title}</h2>
            <ul className="mb-6 text-gray-500  font-medium">
            {navbarData?.fields?.navOptions.map((option: any, index: any) => (
              <li key={index} className="mb-3">
                <Link href={option.fields.description} className=" hover:text-lime-600 transition-colors duration-300 ease-in-out">{option.fields.title}</Link>
              </li>
            ))}
               
            </ul>
        </div>
        {/* <div className=" w-[100%] ">
            <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase ">{footerData?.fields?.footer[2]?.fields?.title}</h2>
            <ul className="text-gray-500  font-medium mb-6">
              <DataFetchWhatWeDo/>
                {whatWeDoData?.fields?.section2?.fields?.multipleRichDescriptions?.map((item:any, index:number)=>{
                    return(
                        <li key={index} className="mb-3 hover:text-lime-600 transition-colors duration-300 ease-in-out">
                            <Link href={navbarData?.fields?.navOptions[2]?.fields.description} >{item.fields.title}</Link>
                        </li>
                    )
                    
                })                }
                
            </ul>
        </div> */}
        <div className=" w-[100%]">
            <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase ">{footerData?.fields?.footer[3]?.fields?.title}</h2>
            <ul className="text-gray-500  font-medium mb-6">
                {documentToReactComponents(footerData?.fields?.footer[3]?.fields?.richDescription, options)}
            </ul>
        </div>
        
    </div>
    <hr className="w-full"/>
    <div className="px-4 py-6 md:flex md:items-center md:justify-between">
        <span className="text-sm  sm:text-center">{footerData?.fields?.footer[4]?.fields?.description}</span>
        
      </div>
    </div>
</footer>

    )
}