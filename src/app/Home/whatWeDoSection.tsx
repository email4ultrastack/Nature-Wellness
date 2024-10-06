'use client'
import { DataFetchWhatWeDo } from '@/lib/utils/contentful';
import { useContext } from 'react';
import { context } from '@/context API/contextAPI';

export const WhatWeDoSection = ({whatWeDoData}:any) => {
  const getContext = useContext(context);
  const whatWeDoDataState = getContext.whatWeDoData;
 
  return (
    <section className=" mt-16">
      <>
        <DataFetchWhatWeDo/>
                    <div className="flex justify-center w-full">
                      <div className=' w-[85%]'>
                        <h2 className="text-5xl text-center max-md:text-3xl font-bold text-primary mb-4">{whatWeDoDataState?.fields?.section2?.fields?.title}</h2>
                        <p className="text-muted-foreground text-justify mb-8">{whatWeDoDataState?.fields?.section2?.fields?.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                          
                        {whatWeDoDataState?.fields?.section2?.fields?.multipleRichDescriptions?.map((item:any, index:number) => (
                            <div key={index} className="bg-card p-6 rounded-lg  text-left">
                                <h3 className="text-2xl font-semibold text-primary">{item.fields.title}</h3>
                                <hr className="border-b-2 border-lime-500 my-4 w-[25%]"/>
                                <p className="text-muted-foreground text-justify">{item.fields.description}</p>
                            </div>
                            ))}
                        </div>

                      </div>
                    </div>
      
      </>
                    
    </section>
  )
}
