'use client'

import React, { useState } from "react";
import Link from "next/link";
import NavItem from "./NavItem";

interface MenuItem {
  text: string;
  href: string;
}

const MENU_LIST: MenuItem[] = [
  { text: "Főoldal", href: "/" },
  { text: "Rólunk", href: "/#Description" },
  { text: "Szolgáltatások", href: "/#Staff" },
  { text: "Elérhetőségek", href: "/#Contact" },
];

const Navbar: React.FC = () => {
  const [navActive, setNavActive] = useState<boolean | null>(null);
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <header className="fixed sm:sticky xl:fixed w-full top-0 z-50">
      
      <nav className={` font-bold text-xl 2xl:text-2xl hidden  md:gap-10 sm:flex py-10  px-5  justify-between bg-white`}>
        <Link href={"/"}>
          <h1 className="logo">Kispatak</h1>
        </Link>
     

        <div className={`flex gap-x-10 sm:gap-x-5 2xl:gap-x-20`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu}  setNavActive={setNavActive} />
            </div>
          ))}
        </div>
      </nav>

      
      <div className={`sm:hidden `}>
        <nav className={`flex flex-col gap-3 bg-white font-bold text-xl`}>
          <div className="flex p-5 justify-between"> 
          <Link href={"/"}>
            <h1 className="logo">Kispatak</h1>
          </Link>
          <div
            onClick={() => setNavActive(!navActive)}
            className={`peer flex flex-col gap-1 cursor-pointer  justify-self-end`}
          >
            <div className="w-10 h-2 bg-black rounded-md"></div>
            <div className="w-10 h-2 bg-black rounded-md"></div>
            <div className="w-10 h-2 bg-black rounded-md"></div>
          </div>
          </div>
          

          <div className={`${navActive ? "flex flex-col" : "hidden"} justify-items-center text-center gap-x-10 gap-y-5 mb-5`}>
            {MENU_LIST.map((menu, idx) => (
              <div
                onClick={() => {
                  setActiveIdx(idx);
                  (idx ===2 ? "" : setNavActive(!navActive))
                    

                }}
                key={menu.text}
              >
                <NavItem active={activeIdx === idx} setNavActive={setNavActive} {...menu} />
              </div>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
