import WhatWeDoCardsRich from "./Rich components/whatWeDoCards"


export default function WhatWeDoCards({ cardsData }: any) {

  return (
    <div>
      <h2 className="text-5xl text-center max-md:text-3xl font-bold text-primary mb-2 mt-14 max-sm:mt-10">What We Do</h2>

      <section className="bg-background p-8 max-md:p-4 z-10 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-md:gap-0 bg-white border-2 border-solid border-[#e5e7eb] rounded-3xl w-[90%]">
          <WhatWeDoCardsRich richDescription={cardsData?.fields?.multipleRichDescriptions} />
        </div>
      </section>
    </div>
  )
}