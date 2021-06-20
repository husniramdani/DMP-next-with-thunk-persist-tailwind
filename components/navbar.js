import React, { useEffect, useState } from "react";
// import { useTheme } from "next-themes";
import Link from "next/link";
import { List, XCircle } from "phosphor-react";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  
  return (
    <>
    <header className="z-10 top-0 pt-3 pl-3 pr-5 flex justify-between items-center md:pt-10 md:px-16 xl:px-24">
      {/* <div className="absolute inset-0 shadow-lg opacity-50 -z-1"/> */}
      <div className="flex items-center">
        {/* <img
          alt="X"
          src="/images/logo.svg"
          className="h-10 w-10"
        /> */}
        <p className="font-bold text-xl ">Cekinkuy</p>
      </div>

      <button
        className="sm:hidden"
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        <List size={30} weight="bold" />
      </button>
    </header>
    {/* modal  */}
    <div
        className={
          "z-10 bg-white dark:bg-coolGray fixed top-0 left-0 h-full w-full overflow-hidden px-10 py-20" +
          (navbarOpen ? " flex" : " hidden")
        }
      >
        <div className="absolute top-3 left-3">
          {/* <img
            alt="X"
            src="/images/logo.svg"
            className="h-10 w-10"
          /> */}
          <p className="hidden font-bold text-xl sm:block">Cekinkuy</p>
        </div>
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="absolute top-0 right-0 flex items-center mt-3 mr-5 text-sm"
        >
            <XCircle size={40} />
        </button>
        <ul className="mt-10 text-center w-full text-black dark:text-white">
          <li className="my-6"><Link href="/" className="text-2xl font-semibold">Home</Link></li>
        </ul>
      </div>
    </>
  );
}
