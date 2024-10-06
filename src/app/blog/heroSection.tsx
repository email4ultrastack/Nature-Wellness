
export default function HeroSection({heroSectionData}:any){
    return(
        <div className="h-[80vh] flex flex-col">
      <div className=" h-[60vh] bg-cover bg-center relative" style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroSectionData?.fields?.blogImage?.fields?.file?.url}?fm=webp)`,
        }}>
        <div className="hero-text absolute inset-0 flex flex-col justify-center items-center text-white mt-12">
          <h1 className="text-5xl font-extrabold w-[60%] text-center tracking-wide">{heroSectionData?.fields?.blogTitle}</h1>
        </div>
      </div>
    </div>
    )
}