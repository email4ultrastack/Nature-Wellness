'use client'
import Link from 'next/link';
import { useState } from 'react';
import { context } from '@/context API/contextAPI';
import { useContext } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const getContext = useContext(context);
  const navbarData = getContext.navbarData;

  return (
    <nav className="bg-transparent absolute w-full z-20 top-0 start-0 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto h-[105px] p-4 max-md:bg-lime-950">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="h-auto w-20"  // Adjust the height as needed
          />
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse md:hidden">
          <Link href={'/donate'}>
          <button
            type="button"
            className="text-black hover:text-white bg-white hover:bg-lime-500 transition-colors duration-300 ease-in-out font-medium rounded-lg px-8 py-4 max-md:px-5 max-md:py-3 text-center max-[407px]:hidden"
          >
            Donate
          </button>
          </Link>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 "
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between ${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 border  md:space-x-14 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 font-bold max-md:bg-white max-md:rounded-xl ">
            {navbarData?.fields?.navOptions?.map((option: any, index: any) => (
              <li key={index}>
                <Link onClick={closeMenu} href={option?.fields?.description} className="block py-2 px-3 max-md:text-black rounded max-md:hover:bg-lime-500 max-md:hover:text-white md:hover:bg-transparent text-white md:hover:text-[#d2d8c0] md:p-0 transition-colors duration-300 ease-in-out">{option?.fields?.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
