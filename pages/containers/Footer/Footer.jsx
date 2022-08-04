import Image from "next/image";
import React from "react";
import ButtonBlue from "../../components/Buttons/button-blue.component";

function Footer() {
  return (
    <div className="bg-white py-6 ">
      <div className="relative container m-auto xl:w-4/5 w-full px-5">
        <Image src="/img/braclet.svg" height={60} width={60} alt="" />
      </div>

      <div className="container m-auto xl:w-4/5 w-full text-[13px] px-4 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-7 border-b-[1px] border-back pb-16">
        <div className="mb-6">
          <h4 className="font-semibold my-6">What it's for</h4>
          <ul className="flex flex-col gap-2">
            <li>Knowledge base</li>
            <li>Working remotly</li>
            <li>Fix remote meetings</li>
            <li>Onboarding remotely</li>
            <li>Build human connection</li>
            <li>Handbooks</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold my-6">How it works</h4>
          <ul className="flex flex-col gap-2">
            <li>Features</li>
            <li>Integrations</li>
            <li>Pricing</li>
            <li>What's new</li>
            <li>Help center</li>
            <li>Contact support</li>
          </ul>
        </div>
        <div className="mb-6">
          <h4 className="font-semibold my-6">Resources</h4>
          <ul className="flex flex-col gap-2">
            <li>Templates</li>
            <li>Learn</li>
            <li>Blog</li>
            <li>Startup Bibles</li>
            <li>Remote handbook</li>
            <li>Management handbook</li>
            <li>Download apps</li>
            <li>Chrome extension</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold my-6">Slite</h4>
          <ul className="flex flex-col gap-2">
            <li>About us</li>
            <li>Find us on Twitter</li>
            <li>
              Careers{"  "}
              <span className="bg-orange py-[1px] px-[5px] text-white rounded-xl">
                Hiring
              </span>
            </li>
            <li>Customers</li>
            <li>Press kit</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold my-6">Compare</h4>
          <ul className="flex flex-col gap-2">
            <li>Notion</li>
            <li>Confluence</li>
            <li>Google Docs</li>
            <li>Dropbox Paper</li>
            <li>All comparisons</li>
          </ul>
        </div>
        <div className="text-center col-span-2 xl:col-span-2 xl:my-0 xl:text-left my-12">
          <h4 className="font-semibold my-6">
            Remote letters to read on your own time
          </h4>
          <div className="relative input-hero col-span-2 justify-self-end w-full m-auto">
            <input
              className="w-[100%] bg-transparent px-[30px] py-[16px] border-solid border-[1px] rounded-[100px] border-back justify-self-end outline-none focus:border-blue"
              placeholder="name@company.com"
            />
            <ButtonBlue
              className="text-medium  absolute w-14 right-0 h-full"
              text="→"
            />
          </div>
          <p className="mt-4 text-xs">
            100% homemade, no tricks or ponies or growth hacking nonsense. Just
            remote things we care about with a short surprising insight every
            week. No rush.
          </p>
        </div>
      </div>
      <div className="container m-auto xl:w-4/5 w-full text-[12px] text-center flex flex-col md:flex-row md:justify-between md:py-6">
        <ul className="flex flex-col font-semibold gap-1 py-10 md:py-0 md:flex-row md:gap-10">
          <li>Privacy</li>
          <li>Security</li>
          <li>User terms</li>
          <li>Customer terms</li>
        </ul>
        <p className="pb-16">©2022 Slite. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
