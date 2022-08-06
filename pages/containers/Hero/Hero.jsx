import Image from "next/image";
import React from "react";
import { Autoplay, EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ButtonBlue from "../../components/Buttons/button-blue.component";

import "swiper/css";
import "swiper/css/effect-cards";
import ButtonTransparent from "../../components/Buttons/button-transparent.component copy";

function Hero() {
  return (
    <>
      <section className="hero mt-52">
        <div className="md:w-[750px] m-auto">
          <div className="hero-title">
            <h1 className=" lg:text-2xl md:text-xl text-large text-center font-semibold">
              Where{" "}
              <div className="relative inline-block">
                <span>remote teams</span>
                <div className="absolute -bottom-6 w-full hidden md:block">
                  <Image
                    className="w-full"
                    src="/img/underline.png"
                    alt="underline"
                    width={400}
                    height={20}
                  />
                </div>
              </div>
              <br /> share knowledge and
              <br /> make decisions
            </h1>
          </div>
          <div className="hero-action grid md:grid-cols-3 md:gap-4 grid-cols-1 relative my-10">
            <div className="relative input-hero col-span-2 justify-self-end w-full md:px-16 m-auto">
              <input
                className="w-[100%] bg-transparent px-[30px] py-[16px] border-solid border-[1px] rounded-[100px] border-back justify-self-end outline-none focus:border-blue"
                placeholder="name@company.com"
              />
              <ButtonBlue
                className="text-medium  absolute w-[150px] md:right-6 right-0 h-full"
                text="Start for free"
              />
            </div>
            <div className="md:block hidden">
              <ButtonTransparent
                text="Book a demo"
                className="font-semibold px-[30px] py-[16px] border-solid border-[1px] rounded-[100px] border-back hover:bg-black hover:text-white transition-all duration-300"
              />
            </div>
          </div>
        </div>
        <div className="hero-image__container m-auto container justify-center mt-16 md:flex hidden">
          <Image src="/img/hero.png" width={1350} height={450} alt="hero" />
        </div>
      </section>
      <section className="hero-slide mb-7 -mt-6 md:block hidden">
        <Swiper
          cardsEffect={{
            rotate: false,
          }}
          creativeEffect={{
            next: {
              opacity: 0,
            },
          }}
          allowTouchMove={false}
          autoplay={{
            delay: 3000,
          }}
          effect={"cards"}
          direction={"vertical"}
          loop={true}
          modules={[EffectCards, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="card flex py-6 px-5 gap-3">
            <Image
              src={"/img/profile1.png"}
              height={70}
              width={70}
              alt="profile"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-medium font-semibold">
                Gearges made some changes
              </h3>
              <p className="text-medium opacity-70">
                The abnormal guide to remote
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="card flex py-6 px-5 gap-3">
            <Image
              src={"/img/profile.png"}
              height={70}
              width={70}
              alt="profile"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-medium font-semibold">
                Gearges made some changes
              </h3>
              <p className="text-medium opacity-70">
                The abnormal guide to remote
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

export default Hero;
