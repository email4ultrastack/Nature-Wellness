import { WhatWeDoSectionSecondHalfRich} from './Rich components/whatWeDoSection';
import Link from 'next/link';

export default function BannerNCount({whatWeDoData}:any){
    return(
        <>
        <div className=' flex items-center flex-col w-full mt-10'>
                    <div className="flex items-center justify-between bg-lime-500 p-10 rounded-lg w-[93%]">
              <div>
                <h2 className="text-3xl font-bold text-white">{whatWeDoData?.section3SecondHalf?.fields?.title}</h2>
                <p className="text-white mt-2">{whatWeDoData?.section3SecondHalf?.fields?.description}</p>
              </div>
              <Link href={'/donate'}><button className=" text-black bg-white hover:text-white hover:bg-lime-700 transition-colors duration-300 ease-in-out font-medium rounded-lg px-8 py-4 text-center ">Donate</button></Link>
            </div>    
            
            <div className="bg-background py-8 mt-8">
                <WhatWeDoSectionSecondHalfRich richDescriptions = {whatWeDoData?.section3SecondHalf}/>
        </div>

                    </div>
        </>
    )
}