import Image from "next/image";
import React from "react";
import ButtonBlue from "../../components/Buttons/button-blue.component";
import ButtonTransparent from "../../components/Buttons/button-transparent.component copy";

function Plans() {
  return (
    <>
      <div className="xl:grid xl:grid-cols-2 xl:text-left text-center container m-auto lg:w-4/5 xl:3/5 flex flex-col-reverse gap-16 my-32">
        <div>
          <h1 className="text-xl font-semibold mb-6">
            A radical change at a fair price.
          </h1>
          <p className="my-6">
            Give Slite a try. Save 16% on annual commitment.
            <br /> Big team? check the enterprise plan.
          </p>
          <div className="flex gap-3 xl:justify-start justify-center">
            <ButtonBlue
              text="Start for free"
              className="px-[16px] py-[12px] text-small font-semibold"
            />
            <ButtonTransparent
              text="Compare all plans >"
              className="px-[16px] py-[12px] text-small font-semibold"
            />
          </div>
        </div>
        <div className="sm:grid sm:grid-cols-2  sm:w-full gap-6 flex flex-col w-2/3  justify-items-center m-auto ">
          <div className="text-center border-2 rounded-lg py-8 px-12 border-back">
            <h4 className=" text-[24px] font-semibold">Free</h4>
            <small className="opacity-80">Plan</small>
            <div className="border-t-2 border-back my-12"></div>
            <p className="font-semibold text-large flex items-center">
              $ <span className="text-2xl">0</span>
              <span className="text-back opacity-80 text-xs self-start mt-3">
                /month
              </span>
            </p>
            <small className="opacity-80">Up to 50 docs</small>
          </div>
          <div className="text-center rounded-lg py-8 px-12 bg-white shadow-lg hover:shadow-xl">
            <h4 className=" text-[24px] font-semibold">Standard</h4>
            <small className="opacity-80">Plan</small>
            <div className="border-t-2 border-back my-12"></div>
            <p className="font-semibold text-large flex items-center">
              ${" "}
              <span className="text-2xl flex">
                6<span className="text-xl items-start">67</span>
              </span>
              <span className="text-back opacity-80 text-xs self-start mt-3">
                /month
              </span>
            </p>
            <small className="opacity-80">Per user</small>
          </div>
        </div>
      </div>
      <div className="aspect-video w-full justify-center xl:flex hidden font-semibold text-[20px] items-center">
        <div className="relative">
          <Image
            src="/img/orbit.png"
            width={1000}
            height={780}
            alt="orbit"
            className="relative"
          />
        </div>

        <div className="absolute z-50 flex flex-col gap-2 items-center pt-20 text-white">
          <div className="self-start">
            <p>
              And of course, we cover the basics: a rich, flexible{" "}
              <span className="relative">
                editor↗,
                <span className="absolute w-full h-2 left-0 -bottom-1">
                  <Image
                    src="/img/underlineWhite.png"
                    layout="fill"
                    alt="undeline"
                  />
                </span>
              </span>
            </p>
          </div>
          <div className=" self-start">
            <span>
              <p className="relative inline-block">
                integration↗
                <span className="absolute w-full h-2 left-0 -bottom-1">
                  <Image
                    src="/img/underlineWhite.png"
                    layout="fill"
                    alt="undeline"
                  />
                </span>
              </p>{" "}
              with third parties,{" "}
              <span className="relative">
                collaborative↗{" "}
                <span className="absolute w-full h-2 left-0 -bottom-1">
                  <Image
                    src="/img/underlineWhite.png"
                    layout="fill"
                    alt="undeline"
                  />
                </span>
              </span>{" "}
              tools,
            </span>
          </div>
          <div className=" self-start ">
            <p>
              powerful{" "}
              <span className="relative">
                search↗
                <span className="absolute w-full h-2 left-0 -bottom-1">
                  <Image
                    src="/img/underlineWhite.png"
                    layout="fill"
                    alt="undeline"
                  />
                </span>
              </span>
              ,hassle-free sharing,advanced{" "}
              <span className="relative">
                tables↗,
                <span className="absolute w-full h-2 left-0 -bottom-1">
                  <Image
                    src="/img/underlineWhite.png"
                    layout="fill"
                    alt="undeline"
                  />
                </span>
              </span>
            </p>
          </div>
          <div className=" self-start  ">
            <p>
              built-in{" "}
              <span className="relative">
                sketching↗
                <span className="absolute w-full h-2 left-0 -bottom-1">
                  <Image
                    src="/img/underlineWhite.png"
                    layout="fill"
                    alt="undeline"
                  />
                </span>
              </span>{" "}
              ,
              <span className="relative">
                video explainers↗
                <span className="absolute w-full h-2 left-0 -bottom-1">
                  <Image
                    src="/img/underlineWhite.png"
                    layout="fill"
                    alt="undeline"
                  />
                </span>
              </span>{" "}
              and much much
            </p>
          </div>
          <div className=" self-start  ">
            <p>more.</p>
          </div>

          <ButtonBlue
            className="self-start mt-10 py-[16px] px-[60px] text-small"
            text="Discover them all"
          />
        </div>
      </div>
    </>
  );
}

export default Plans;
