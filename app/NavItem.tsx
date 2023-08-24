import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NavItemProps } from "@/typings";
import Svgs from "../src/svg/Svgs";

const NavItem: React.FC<NavItemProps> = ({ text, href, active, setNavActive }) => {
  const isServiceDropdown = text === "Szolgáltatások";
  return (
    <div className={active ? "text-primary" : "text-black hover:text-primary"}>
      {isServiceDropdown ? (
        <div className="group relative ">
          <button>
            <div className="flex items-center">
              <h1 className="mr-2">Szolgáltatások</h1>
              <div className="group-hover:text-primary group-hover:rotate-180 transition duration-300
"> {/* Apply text color change on hover */}
              
                <Svgs className={"w-5 h-5"} viewBox={"0 0 28 17"} dProps={"M13.9551 16.741C13.4151 16.7569 12.8699 16.5588 12.4578 16.1466L0.62262 4.31142C-0.171082 3.51771 -0.171082 2.23085 0.62262 1.43715C1.41632 0.643439 2.70319 0.643439 3.49689 1.43715L13.955 11.8953L24.4131 1.43714C25.2068 0.643431 26.4937 0.643431 27.2874 1.43714C28.0811 2.23084 28.0811 3.5177 27.2874 4.31141L15.4522 16.1466C15.0401 16.5587 14.4951 16.7569 13.9551 16.741Z"}/>
              </div>
            </div>
          </button>

          <div
          onClick={() => {
            setNavActive(!active); // Use the passed setNavActive function
          }}
          className={`hidden group-hover:block absolute z-10 divide-y rounded-lg shadow-lg w-52 p-3 text-black bg-white dark:divide-gray-600 left-1/2 transform -translate-x-1/2 top-1/8`}
          >
            <Link href={"/staff/CsomorKatalin"}>
              <h1 className="px-4 py-2  hover:text-primary">Női - férfi fodrász</h1>
            </Link>
            {/* <Link href={"/staff/BiroAndrea"}>
              <h1 className="px-4 py-2  hover:text-primary">Masszázs</h1>
            </Link> */}
            <Link href={"/staff/KoselaErika"}>
              <h1 className="px-4 py-2 hover:text-primary">Mester kozmetika</h1>
            </Link>
            <Link href={"/staff/SusaMaria"}>
              <h1 className="px-4 py-2 hover:text-primary">Manikűr - műköröm</h1>
            </Link>
          
          </div>
        </div>
      ) : (
        <Link href={href}>
          <h1>{text}</h1>
        </Link>
      )}
    </div>
  );
};

export default NavItem;
