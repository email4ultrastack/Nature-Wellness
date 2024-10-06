import Link from "next/link";
export default function HeroSection({heroSectionData}:any) {
    return (
        <div className="h-[150vh] flex flex-col relative">
            <div className="h-[60vh] bg-cover bg-center relative" style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroSectionData?.fields?.image?.fields?.file?.url}?fm=webp)`,
            }}>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                    <h1 className="text-5xl max-md:text-4xl font-extrabold w-[60%] text-center tracking-wide">{heroSectionData?.fields?.title}</h1>
                    <p className="mt-8 text-xl w-[60%] max-md:w-[70%] max-md:text-lg text-center">{heroSectionData?.fields?.description}</p>
                </div>
            </div>
            <Link href="/contact" className=" mt-5 flex justify-center">
            <button className="text-white bg-lime-500 hover:bg-lime-600 font-bold text-lg py-4 px-10 w-72 rounded-lg shadow-lg transition-all duration-300 ease-in-out">
      Contact Us To Donate
</button>
            </Link>
        </div>
    );
}
