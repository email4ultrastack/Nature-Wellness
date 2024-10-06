import ContactCardsRich from "./Rich components/contactCardsRich";


export default function ContactCards({cardsData}:any){
   
    return(
        <section className="bg-background absolute bottom-0 right-0 left-0 z-10 flex justify-center w-full">
          <ContactCardsRich richDescription = {cardsData?.fields?.multipleRichDescriptions}/>
        </section>
    )
}