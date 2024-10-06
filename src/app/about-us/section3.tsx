import Image from "next/image"

export default function Section3({section3Data}:any){
    return(
        <div className=" flex justify-center w-full mb-16 max-md: mt-10">
        <div className="bg-card  rounded-lg w-[90%] max-md:flex max-md:flex-col-reverse max-md:gap-6">
                  {
                    section3Data?.fields?.image?.fields?.file?.url === undefined ? null :
                    <Image width={400} height={350} alt="Forest" src={`https:${section3Data?.fields?.image?.fields?.file?.url}`} className="rounded-lg mb-4 w-full h-[350px] object-cover" />
                  }
                  {/* <img alt="Forest" src={section3Data?.fields?.image?.fields?.file?.url} className="rounded-lg mb-4 w-full h-[350px] object-cover" /> */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                {section3Data?.fields?.multipleRichDescriptions?.map((item:any, index:number) => (
                  <div className="flex flex-col items-start w-[90%] max-sm:w-full" key={index}>
                    <h2 className="text-xl font-bold text-foreground">{item?.fields?.title}</h2>
                    <p className="text-muted-foreground">{item?.fields?.description}</p>
                  </div>
                ))     
                }
              </div>
            </div>
        </div>
    )
}