import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

export default function ContactCardsRich({richDescription}:any){
    
    const options = {
        renderNode: {
          
          [BLOCKS.HEADING_4]: (node:any) => (
            <h4 className="text-xl font-bold text-primary mt-2">
              {node.content[0].value}
            </h4>
          ),
          [BLOCKS.PARAGRAPH]: (node:any) => (
            <p className="text-muted-foreground mt-5">
              {node.content[0].value}
            </p>
          ),
        },
      };

    return(
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-md:gap-0 bg-white border-2 border-solid border-[#e5e7eb] rounded-3xl w-[70%]">
            {richDescription?.map((item:any, index:number)=>{
                return(
            <div key={index} className={`bg-card p-6 max-md:p-3 ${index < richDescription.length - 1 ? 'md:border-r-2 md:border-gray-200' : ''} `}>
                {documentToReactComponents(item.fields.richDescription, options)} 
                            
            </div>
                )
            })}
             
            
          </div>
    )
}