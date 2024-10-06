import AboutUsRich from "./Rich components/aboutUsRich";
import Image from "next/image";

export default function AboutSection({aboutSectionData}:any){
    return(
        <section className="">
    <div className="container mx-auto py-16 max-md:py-2 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-5xl">{aboutSectionData?.fields?.title}</h2>
                <p className="mt-4 text-gray-600 text-lg text-justify">{aboutSectionData?.fields?.description}</p>
                <AboutUsRich richDescription = {aboutSectionData?.fields?.richDescription}/>
               
            </div>
            <div className="mt-12 md:mt-0">
                {
                    aboutSectionData?.fields?.image?.fields?.file?.url === undefined ? null
                    :
                    <Image width={600} height={500} src={`https:${aboutSectionData?.fields?.image?.fields?.file?.url}`} alt="About Us Image" className="object-cover rounded-2xl shadow-md"/>

                }
                {/* <img src={`https:${aboutSectionData?.fields?.image?.fields?.file?.url}`} alt="About Us Image" className="object-cover rounded-2xl shadow-md"/> */}
            </div>
        </div>
    </div>
</section>
    )
}