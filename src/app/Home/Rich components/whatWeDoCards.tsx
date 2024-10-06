import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';


export default function WhatWeDoCardsRich({richDescription}:any){

    const options = {
        renderNode: {
          [BLOCKS.HEADING_3]: (node:any) => (
            <h3 className="text-2xl font-semibold text-primary">
              {node.content[0].value}
            </h3>
          ),
          [BLOCKS.HEADING_4]: (node:any) => (
            <h4 className="text-xl font-bold text-primary mt-2">
              {node.content[0].value}
            </h4>
          ),
          [BLOCKS.PARAGRAPH]: (node:any) => (
            <p className="text-justify mt-3">
              {node.content[0].value}
            </p>
          ),
          
        },
      };

    return(
       <>
       {richDescription?.map((item:any, index:number)=>{
                return(
            <div key={index} className={`bg-card p-6 max-md:p-3 ${index < richDescription.length - 1 ? ' md:border-r-2 md:border-gray-200 max-md:border-b-2 max-md:border-gray-200' : ''} `}>
              {documentToReactComponents(item.fields.richDescription, options)}
            </div>
                )
            })}
       </>
    )
}