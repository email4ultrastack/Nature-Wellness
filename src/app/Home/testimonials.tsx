import TestimonialRich from "./Rich components/testimonialRich"

export default function Testimonials({testimonialData}:any){
    return(
        <section className="bg-background p-8">
              <h2 className="text-3xl font-bold text-primary text-center">{testimonialData?.fields.title}</h2>
              <p className="text-muted-foreground text-center mb-8">{testimonialData?.fields.description}</p>
              <div className="flex flex-wrap justify-center gap-6">
                
                <TestimonialRich richDescriptions = {testimonialData?.fields?.multipleRichDescriptions}/>

               
              </div>
            </section>
    )
}