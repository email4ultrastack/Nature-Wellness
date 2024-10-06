import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

export default function AboutUsRich({richDescription}:any){

    const options = {
        renderNode: {
          [BLOCKS.HEADING_4]: (node:any) => (
            <h4 className="font-bold text-xl mt-3">{node.content[0].value}</h4>
          ),
          [BLOCKS.PARAGRAPH]: (node:any) => (
            <p className=" text-justify mt-2">{node.content[0].value}</p>
          ),
        },
      }; 

    return(
        <div className="mt-8 border-l-2 border-solid flex items-center flex-col ">
                    <div className=" mb-6 mt-4 w-[90%]">
                        {documentToReactComponents(richDescription, options)}
                    </div>
                    
                </div>
    )
}