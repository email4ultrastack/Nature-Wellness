'use client'

import { useEffect } from 'react';

export default function DonateCard({donateLink}:any) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.gofundme.com/static/js/embed.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className='absolute top-[45vh] left-0 right-0 flex justify-center bg-background z-10'>
      <div className='w-full max-w-screen-lg flex justify-center'>
        <iframe className=' max-md:w-[80%]'
          src={donateLink}
          width="47%"
          height="523"
          frameBorder="0"
          scrolling="no"
          allow="autoplay; fullscreen"
          title="GoFundMe Widget"
        />
      </div>
    </section>
  );
}