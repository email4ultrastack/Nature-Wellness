import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQAccordian({faqsData}:any) {
    return (
        <div className=" flex items-center flex-col mt-12 mb-16">

            <p className=" font-extrabold text-3xl w-[60%] max-md:w-[90%] text-center">{faqsData?.fields?.title}</p>
            <p className=' mt-3'>{faqsData?.fields?.description}</p>
            <div className=' mt-20 w-[57%] max-md:w-[90%]'>

                    {faqsData?.fields?.multipleRichDescriptions?.map((item:any, index:number)=>{
                        return(
                            <Accordion key={index}>
                                <AccordionSummary className=' font-extrabold text-lg text-black pb-3 pt-2'
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2-content"
                                    id="panel2-header"
                                >
                                    {item.fields.title}
                                </AccordionSummary>
                                <AccordionDetails className='text-justify'>
                                {item.fields.description}        </AccordionDetails>
                            </Accordion>
                        )
                        
                    })}

            </div>

        </div>
    )
}