import Head from "next/head";
import Image from "next/image";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../styles/Home.module.css";
import ButtonBlue from "./components/Buttons/button-blue.component";
import ButtonTransparent from "./components/Buttons/button-transparent.component copy";
import Navigation from "./components/Navigation/navigation.component";
import Comments from "./containers/Comments/Comments";
import DesktopPhone from "./containers/DesktopPhoneContainer/DesktopPhone";
import Discussions from "./containers/Discussions/Discussions";
import Footer from "./containers/Footer/Footer";
import Hero from "./containers/Hero/Hero";
import Plans from "./containers/Plans/Plans";
import Templates from "./containers/Templates/Templates";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Slite</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <div className={styles.container}>
        <Hero />
        <DesktopPhone />
        <Discussions />
        <Plans />
        <Comments />
      </div>
      <Templates />
      <Footer />
    </div>
  );
}
