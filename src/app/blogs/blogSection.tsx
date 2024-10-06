import Image from "next/image"
import Link from "next/link";

export default function BlogSection({blogSectionData}:any) {

    // console.log(blogSectionData, "blogSectionData");

    return (
        <section className="">
            <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-md:flex max-md:flex-col-reverse">
                    {blogSectionData?.map((item:any, index:number)=>{
                        return(
                            <>
                    <div key={index} className="max-w-lg mb-5">
                        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">{item.fields.blogTitle}</h2>
                        <p className="mt-4 text-gray-600 text-lg text-justify">{item.fields.shortDescription}</p>
                        <div className="mt-8 ">
                            <div>
                                <Link href={`/blog/${item.fields.slug}`}>
                                <button
                                    type="button"
                                    className="text-white bg-lime-500 hover:bg-lime-700 transition-colors duration-300 ease-in-out font-medium rounded-lg px-8 py-4 text-center "
                                >
                                    Read More
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 md:mt-0">
                        {/* <img src={item?.fields?.image?.fields?.file?.url} alt="About Us Image" className="object-cover rounded-2xl shadow-md" /> */}
                        {item?.fields?.blogImage?.fields?.file?.url === undefined ? null : 
                        <Image src={`https:${item?.fields?.blogImage?.fields?.file?.url}`} width={600} height={300} alt="loading ..." className="object-cover rounded-2xl shadow-md"></Image>
                        }
                    </div>
                            </>

                        )
                    })}

                    
                </div>
            </div>
        </section>
    )
}