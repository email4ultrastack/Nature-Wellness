import Link from "next/link";

export default function HeroSection({heroSectionData}:any) {
  return (
    <div className="h-[100vh] flex flex-col">
      <div className=" h-[100vh] bg-cover bg-center relative" style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroSectionData?.fields?.image?.fields?.file?.url})`,
        }}>
        <div className="hero-text absolute inset-0 flex flex-col justify-center items-center text-white mt-12">
          <h1 className="text-5xl max-md:text-4xl font-extrabold w-[60%] max-md:w-[80%] max-md:tracking-normal text-center tracking-wide">{heroSectionData?.fields?.title}</h1>
          <p className="mt-8 text-xl w-[45%] max-md:w-[70%] max-md:text-lg text-center">{heroSectionData?.fields?.description}</p>
          <Link href="/donate">
          <button  type="button"
            className="max-sm:hidden mt-12 text-white bg-lime-500 hover:bg-lime-700 transition-colors duration-300 ease-in-out font-medium rounded-lg px-8 py-4 text-center ">
            Donate
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
