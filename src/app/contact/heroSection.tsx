
export default function HeroSection({heroSectionData}:any){
    return(
        <div className="h-[80vh] flex flex-col">
      <div className=" h-[60vh] bg-cover bg-center relative" style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroSectionData?.fields?.image?.fields?.file?.url}?fm=webp)`,
        }}>
        <div className="hero-text absolute inset-0 flex flex-col justify-center items-center text-white mt-12">
          <h1 className="text-5xl max-md:text-4xl font-extrabold w-[60%] text-center tracking-wide">{heroSectionData?.fields?.title}</h1>
          <p className="mt-8 text-xl w-[60%] max-md:w-[70%] max-md:text-lg text-center">{heroSectionData?.fields?.description}</p>
        </div>
      </div>
    </div>
    )
}