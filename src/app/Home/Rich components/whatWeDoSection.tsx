import Counter from "@/app/components/counterOnScroll"


export function WhatWeDoSectionSecondHalfRich({richDescriptions}:any){
    return(
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-10">
            {richDescriptions?.fields?.multipleRichDescriptions.map((item:any, index:number)=>{
                return(
                    <div key={index} className=" flex">
                    <div className="flex flex-col">
                        <span className="text-4xl font-bold text-primary"><Counter end={item.fields.numbers} duration={2000} decimals={item.fields.numbers % 1 !== 0 ? 1 : 0} suffix={item.fields.description} /></span>
                        <span className="text-muted-foreground">{item.fields.title}</span>
                    </div>
                {/* Vertical line */}
                    {index !== richDescriptions.fields.multipleRichDescriptions.length - 1 && (
                        <div className="border-r border-muted h-16 mx-4 md:mx-8 max-md:hidden"></div>
                      )}
                    </div>
                )
            })}
          
          </div>
    )
}