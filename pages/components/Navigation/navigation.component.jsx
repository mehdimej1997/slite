import React, { useState } from "react";
import ButtonBlue from "../Buttons/button-blue.component";
import Image from "next/image";
import ButtonTransparent from "../Buttons/button-transparent.component copy";

function Navigation() {
  const [shown, setShown] = useState(false);

  const handelNavList = () => {
    setShown((prev) => !prev);
  };

  return (
    <>
      <nav className="flex container m-auto justify-between h-[120px] bg-[#f9efe4] lg:w-5/6">
        <Image src="/slite.svg" width={60} height={30} alt="slite" />
        <ul className="justify-between items-center gap-4 lg:flex hidden ">
          <li className="px-3 py-4 text-small font-semibold hover:opacity-80">
            Product
          </li>
          <li className="px-3 py-4 text-small font-semibold hover:opacity-80">
            Templates
          </li>
          <li className="px-3 py-4 text-small font-semibold hover:opacity-80">
            Pricing
          </li>
          <li className="px-3 py-4 text-small font-semibold hover:opacity-80">
            Blog
          </li>
          <li className="px-3 py-4 text-small font-semibold hover:opacity-80">
            Sign in
          </li>
          <li className="font-semibold">
            <ButtonTransparent className="text-small px-[20px] py-[12px]">
              Request a demo
            </ButtonTransparent>
          </li>
          <li className="font-semibold">
            <ButtonBlue className="text-small px-[20px] py-[12px]">
              Start for free
            </ButtonBlue>
          </li>
        </ul>
        <div className="lg:hidden block self-center relative">
          <div
            className="absolute h-5 w-full -top-2 cursor-pointer"
            onClick={handelNavList}
          ></div>
          <div
            className={`sandwish_menu ${
              shown && "sandwish_menu-open"
            }  rounded-lg h-[2px] w-6 bg-back cursor-pointer`}
          ></div>
          <div
            className={`sandwish_menu1 ${
              shown && "sandwish_menu1-open"
            }  rounded-lg h-[2px] w-6 bg-back cursor-pointer`}
          ></div>
          <div
            className={`sandwish_menu2 ${
              shown && "sandwish_menu2-open"
            }  rounded-lg h-[2px] w-6 bg-back cursor-pointer`}
          ></div>
        </div>
        <ul
          className={`sandwish_menu--list ${
            shown ? "shown" : ""
          } absolute top-0 bg-[#f9efe4] w-full left-0 py-4  mt-[100px] z-50 shadow-lg overflow-hidden`}
        >
          <li className="px-10 py-4 text-small font-semibold hover:opacity-80">
            Product
          </li>
          <li className="px-10 py-4 text-small font-semibold hover:opacity-80">
            Templates
          </li>
          <li className="px-10 py-4 text-small font-semibold hover:opacity-80">
            Pricing
          </li>
          <li className="px-10 py-4 text-small font-semibold hover:opacity-80">
            Blog
          </li>
          <div className="flex py-6 justify-center gap-3 border-t-[1px] border-back border-opacity-50 w-full">
            <li className="px-3 py-4 text-small font-semibold hover:opacity-80">
              Sign in
            </li>
            <li className="font-semibold">
              <ButtonTransparent className="text-small px-[20px] py-[12px]">
                Request a demo
              </ButtonTransparent>
            </li>
            <li className="font-semibold">
              <ButtonBlue className="text-small px-[20px] py-[12px]">
                Start for free
              </ButtonBlue>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
