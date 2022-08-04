import Image from "next/image";
import React from "react";
import ButtonBlue from "../../components/Buttons/button-blue.component";
import ButtonTransparent from "../../components/Buttons/button-transparent.component copy";

function Discussions() {
  return (
    <>
      <div className="text-center mt-16">
        <h3 className="text-large font-semibold">
          All of your documents in one place.
        </h3>
        <p className="font-medium m-4">
          Project, knowledge base, process, bring all your work to life in docs.
        </p>
        <div className="flex sm:flex-row flex-col gap-3 justify-center my-6">
          <ButtonBlue
            text="Get started"
            className="px-[60px] py-[16px] text-small font-semibold"
          />
          <ButtonTransparent
            text="Download the apps"
            className="px-[60px] py-[16px] text-small font-semibold"
          />
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-3 lg:text-left text-center xl:w-3/5 lg:w-4/5 m-auto py-8 gap-10 my-32">
        <div>
          <h3 className="text-large font-semibold my-6">
            Say goodby
            <span className="inline-block relative ">
              e{" "}
              <div className="absolute -top-9 -left-3 w-12 lg:block hidden">
                <Image
                  src={"/img/hand.png"}
                  height={250}
                  width={250}
                  alt="hand"
                />
              </div>
            </span>{" "}
            to endless meetings and Slack threads with Discussions.
          </h3>
          <p className="font-normal text-medium">
            Rich discussions is the central place for decisions to be taken
            thoughtfully and keep your mind clear.
          </p>
          <div>
            <ButtonBlue
              className="py-[16px] px-[60px] text-small font-semibold my-6"
              text="Try Discussions"
            />
          </div>
        </div>
        <div className="col-span-2 aspect-video relative">
          <Image
            src={"/video/video-screen.png"}
            layout="fill"
            objectFit="contain"
            alt="video"
          />
        </div>
      </div>
      <div className="container lg:w-[45%] m-auto text-center py-3 border-t-2 border-b-2 my-32 border-back relative">
        <p className="text-center py-8 CEO px-2">
          <i>
            Slite let us bring the two most important communication bits in the
            same place: documentation & decision-making. The connection between
            docs and discussions makes decision-making more efficient,
            transparent & contextualized.
          </i>
        </p>

        <h4 className="font-bold text-xs -m-2">Sebastien Gendreau</h4>
        <small className="text-xs">CPO of AGORAPULSE</small>
        <div className="absolute lg:block hidden right-12 bottom-[-10px] CEO-image">
          <Image
            src={"/img/CEO.jpeg"}
            height={80}
            width={80}
            alt="ceo"
            className="rounded-full"
          />
        </div>
      </div>
      <div className="container m-auto text-center sm:my-32 my-16">
        <h3 className="text-large font-semibold">
          Communicate where work happens. <br /> Document, discuss, decide,
          repeat.
        </h3>
        <div className="aspect-video relative my-12 sm:w-3/4 m-auto">
          <Image src={"/video/video-screen2.png"} layout="fill" alt="video" />
        </div>
        <p className="text-medium font-medium my-12">
          Open important topics with the right people. Assign deadlines and come
          to clear decisions that the whole team sees.
          <br /> All in context, where work is happening. In your Docs.
        </p>
        <ButtonBlue
          text="I want that too"
          className="py-[16px] px-[60px] text-small font-semibold"
        />
      </div>
    </>
  );
}

export default Discussions;
