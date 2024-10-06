import Image from "next/image"

export default function WhatWeDoSection({section2Data}:any){
  return (
    <section className="bg-background p-8 mb-16">
              <h2 className="text-3xl font-bold text-foreground text-center mb-4">{section2Data?.fields?.title}</h2>
              <p className="text-muted-foreground text-center mb-8">{section2Data?.fields?.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {section2Data?.fields?.multipleRichDescriptions?.map((item:any, index:number)=>{
                  return(
                    <div key={index} className="bg-card p-4 rounded-2xl border border-solid bg-white ">
                      <h3 className="text-xl font-semibold mt-4">{item?.fields?.title}</h3>
                      <p className="text-muted-foreground mt-3 w-[90%] text-justify">{item?.fields?.description}</p>
                      {
                        item.fields.image.fields.file.url ===undefined ? null :
                        <Image width={400} height={300} src={`https:${item.fields.image.fields.file.url}`} alt="Planting" className="w-full h-[200px] object-cover rounded-xl mt-3 mb-3" />                        
                      }
                      {/* <img src={item.fields.image.fields.file.url} alt="Planting" className="w-full h-[200px] object-cover rounded-xl mt-3 mb-3" /> */}
                    </div>
                  )
                })}
                
              </div>
            </section>
  )
}
