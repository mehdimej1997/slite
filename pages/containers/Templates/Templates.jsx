import Image from "next/image";
import React from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ButtonTransparent from "../../components/Buttons/button-transparent.component copy";

function Templates() {
  const carousel = [
    { title: "Talent acquisition", imgUrl: "/img/start.png", color: "bg-pink" },
    {
      title: "Stand-up meeting",
      imgUrl: "/img/meeting.png",
      color: "bg-orange",
    },
    { title: "Creative brief", imgUrl: "/img/brief.png", color: "bg-blue" },
    {
      title: "Employee handbook",
      imgUrl: "/img/handbook.png",
      color: "bg-customWhite",
    },
    { title: "Weekly re-views", imgUrl: "/img/reviews.png", color: "bg-pink" },
    { title: "Product planning", imgUrl: "/img/Plan.png", color: "bg-blue" },
    {
      title: "Onboarding cheklist",
      imgUrl: "/img/checklist.png",
      color: "bg-orange",
    },
    {
      title: "Product specs",
      imgUrl: "/img/specs.png",
      color: "bg-customWhite",
    },
  ];
  return (
    <div className="footer mt-16 text-center relative bg-white ">
      <h1 className="text-xl font-semibold py-8">
        Get started with a template
      </h1>
      <p>Beat the blank canvas.</p>
      <ButtonTransparent
        className="py-[16px] px-[60px] font-semibold text-small my-6"
        text="Browse template"
      />
      <div className="relative">
        <Swiper
          slidesPerView={9}
          spaceBetween={30}
          preventInteractionOnTransition={true}
          loop={true}
          draggable={false}
          autoplay={{ delay: 1, disableOnInteraction: false }}
          modules={[Autoplay]}
          speed={4000}
          className="carousel-template my-16 relative"
        >
          {carousel.map((cart, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white h-64 w-48 p-5 rounded-xl flex flex-col justify-around shadow-lg shadow-gray-900/20">
                <h4 className="text-left text-[22px] font-semibold">
                  {cart.title}
                </h4>
                <div
                  className={`relative self-center h-[100px] w-[100px] after:${cart.color.replace(
                    '"',
                    ""
                  )} after:h-[100px] after:w-[100px] after:content-[''] after:absolute after:flex after:justify-center after:rounded-full after:-z-1`}
                >
                  <div className="absolute w-full h-full z-10">
                    <Image src={cart.imgUrl} layout="fill" alt={cart.title} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <span className="hidden lg:inline-block ball1 h-9 w-9 absolute bg-blue rounded-full -top-8 left-60 z-[999] before:content-['Rosie'] before:absolute before:-left-12 before:-top-4 text-sm"></span>
        <span className="hidden lg:inline-block ball2 h-9 w-9 absolute bg-orange rounded-full -top-20 right-60 z-[999] before:content-['Clara'] before:absolute before:-right-12 before:-top-4 text-sm"></span>
        <span className="hidden lg:inline-block ball3 h-9 w-9 absolute bg-pink rounded-full -bottom-8 right-72 z-[999] before:content-['Chris'] before:absolute before:-right-12 before:-bottom-4 text-sm"></span>
      </div>
      <div className="py-16 border-b-[1px] border-gray-400/50"></div>
    </div>
  );
}

export default Templates;
