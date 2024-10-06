import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Image from "next/image"

export default function TestimonialRich({richDescriptions}:any){
    return(
    <>
    {richDescriptions?.map((item:any, index:number)=>{
        return(

        <div key={index} className="bg-card rounded-lg p-6 shadow-lg max-w-xs">
                  <div className="flex items-center mb-4">
                    {item.fields.image.fields.file.url === undefined ? null :
                    
                    <Image width={200} height={200} src={`https:${item.fields.image.fields.file.url}`} alt="Emma Thompson" className="rounded-full mr-3 w-10 h-10" />
                    }
                    <div>
                      <h3 className="text-lg font-semibold">{item.fields.title}</h3>
                      <div className="text-yellow-500">{item.fields.description}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-justify">
                    {documentToReactComponents(item.fields.richDescription)}
                  </p>
                </div>
        )
    })}
    </>
    )
}