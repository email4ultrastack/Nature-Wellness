import { BlogsData } from "@/app/dummyData";
import Link from "next/link";
import { createClient } from "contentful";
import RichText from "../richText";
import HeroSection from "../heroSection";

function profilesData(data: any) {
    slug: data.slug;
}


type ProfileData = {
    params: {
        slug: string;
    };
};


export default async function Blog({ params }: ProfileData) {
    
  const spaceId = process.env.NEXT_PUBLIC_SPACE_ID;
  const accessToken = process.env.NEXT_PUBLIC_CONTENT_DELIVERY_API;

  const client = createClient({
    space: spaceId as string,
    accessToken: accessToken as string,
  });

  let blogData:any = null;

  try {
    const blogsData = await client.getEntries({
      content_type: 'blogs',
    });
    blogData = blogsData.items[0]; 
  } catch (err) {
    console.error('Error fetching data:', err);
  }
    const allBlogs = blogData?.fields?.section2;
    const specificBlogData = allBlogs?.find((item:any) => item?.fields?.slug === params.slug);

    return (
        <>
    <HeroSection heroSectionData={specificBlogData}/>
<main className="container mx-auto mt-8">
    <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-8/12 px-4 mb-8">
            <h2 className="text-4xl font-bold mt-6 mb-8">{specificBlogData?.fields?.blogTitle}</h2>
            
            <RichText richText={specificBlogData?.fields?.longDescription}/>
            
        </div>
        <div className="w-full md:w-4/12 px-4 mb-8">
            <div className="bg-gray-100 px-4 py-12 rounded">
                <h3 className="text-lg font-bold mb-6">Recent Blogs</h3>
                <ul className="list-disc list-inside">
                    {
                        allBlogs?.map((item:any, index:number) => (
                            <li key={index} className=" text-gray-900 hover:text-lime-600 mb-4"><Link href={`/blog/${item?.fields?.slug}`} className="">{item?.fields?.blogTitle}</Link></li>
                        ))
                    }
                    
                </ul>
            </div>
        </div>
    </div>
</main>
        </>
    )
}