import Head from "next/head";
import Image from "next/image";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../styles/Home.module.css";
import Navigation from "./components/Navigation/navigation.component";
import Comments from "./containers/Comments/Comments";
import DesktopPhone from "./containers/DesktopPhoneContainer/DesktopPhone";
import Discussions from "./containers/Discussions/Discussions";
import Footer from "./containers/Footer/Footer";
import Hero from "./containers/Hero/Hero";
import Plans from "./containers/Plans/Plans";
import Templates from "./containers/Templates/Templates";

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/templates");
  const carousel = await res.json();
  return {
    props: { carousel },
  };
}

export default function Home({ carousel }) {
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
      <Templates carousel={carousel} />
      <Footer />
    </div>
  );
}
