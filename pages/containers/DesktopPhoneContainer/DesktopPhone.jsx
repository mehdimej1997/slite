import Image from "next/image";
import React, { useState } from "react";

function DesktopPhone() {
  const TABS = [
    {
      tabName: "Wiki",
      imgDesktop: "/img/wiki-desktop.jpg",
      imgPhone: "/img/wiki-phone.jpg",
    },
    {
      tabName: "Projects",
      imgDesktop: "/img/projects-desktop.jpg",
      imgPhone: "/img/projects-phone.jpg",
    },
    {
      tabName: "Processes",
      imgDesktop: "/img/wiki-desktop.jpg",
      imgPhone: "/img/wiki-phone.jpg",
    },
    {
      tabName: "Onboarding",
      imgDesktop: "/img/projects-desktop.jpg",
      imgPhone: "/img/projects-phone.jpg",
    },
    {
      tabName: "Meetings",
      imgDesktop: "/img/wiki-desktop.jpg",
      imgPhone: "/img/wiki-phone.jpg",
    },
    {
      tabName: "Team updates",
      imgDesktop: "/img/projects-desktop.jpg",
      imgPhone: "/img/projects-phone.jpg",
    },
    {
      tabName: "1:1s",
      imgDesktop: "/img/wiki-desktop.jpg",
      imgPhone: "/img/wiki-phone.jpg",
    },
    {
      tabName: "User research",
      imgDesktop: "/img/projects-desktop.jpg",
      imgPhone: "/img/projects-phone.jpg",
    },
  ];

  const [activeTab, setActiveTab] = useState(TABS[0]);

  const handleTabClick = ({ target }) => {
    const title = target.textContent.toLowerCase();
    const activeTab = TABS.filter((tab) => {
      if (tab.tabName.toLowerCase() === title) {
        return tab;
      }
    });
    setActiveTab(activeTab[0]);
  };
  return (
    <>
      <section className="desktop-phone__tabs sm:mt-36 container m-auto xl:grid xl:grid-cols-12 flex flex-col">
        <div className="tabs col-start-2 flex items-center overflow-auto">
          <ul className="flex xl:flex-col gap-1 w-full xl:items-start items-center">
            {TABS.map((tab, i) => (
              <li
                key={i}
                onClick={handleTabClick}
                className={`py-4 px-4 text-small font-semibold opacity-70 text-back rounded hover:text-black cursor-pointer ${
                  activeTab.tabName === tab.tabName
                    ? "bg-white text-black shadow-md shadow-gray-900/10 "
                    : ""
                }`}
              >
                {tab.tabName}
              </li>
            ))}
          </ul>
        </div>
        <div className="desktop-phone col-span-10 relative">
          <div className="desktop">
            <div className="relative overflow-hidden flex justify-center">
              <Image
                src="/img/desktop.png"
                width={1100}
                height={620}
                alt="desktop"
              />
              <div className="absolute xl:top-8 top-4 -z-10 px-[8%]">
                <Image
                  src={activeTab.imgDesktop}
                  width={920}
                  height={550}
                  alt="wiki-desktop"
                />
              </div>
            </div>
          </div>
          <div className=" hidden lg:block phone absolute right-24 top-24">
            <div className="inline-block relative">
              <Image
                src="/img/phone.png"
                width={270}
                height={560}
                alt="phone"
                className="z-30"
              />
              <div className="absolute top-3 z-0 left-[10px]">
                <Image
                  src={activeTab.imgPhone}
                  width={250}
                  height={540}
                  alt="wiki-phone"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DesktopPhone;
