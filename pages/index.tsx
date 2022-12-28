import Head from "next/head";
import { useEffect, useRef } from "react";
import FooterSection from "../components/footerSection";
import Header from "../components/header";
import HeroSection from "../components/heroSection";
import Mysection from "../components/MySection";
import RoadmapSection from "../components/roadmapSection/roadmapSection";
import ScrollIndicator from "../components/scrollIndicator/scrollIndicator";
import styles from "../styles/Home.module.scss";
import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-fade";

import { Mousewheel, Scrollbar } from "swiper";
import VideoSection from "../components/videoSection";
import AboutSection from "../components/aboutSection";
import GameplaySection from "../components/gameplaySection";

const Animation = dynamic(() => import("../components/animation"), {
  ssr: false,
});
export default function Home() {
  const section1: any = useRef();
  const section2: any = useRef();
  const section3: any = useRef();
  function scrollTo(section: any) {
    section.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Animation /> */}

      <Header />
      <div className={`container ${styles.container}`}>
        <div className={styles.mainSections}>
          <div className={styles.scroll}>
            <ScrollIndicator />
          </div>
          <div ref={section1} className="panel" id="home">
            <HeroSection goToSectionRef={section1} scrollTo={scrollTo} />
          </div>
          <div ref={section1} className="panel" id="video">
            <VideoSection goToSectionRef={section1} scrollTo={scrollTo} />
          </div>
          <div ref={section1} className="panel" id="about">
            <AboutSection goToSectionRef={section1} scrollTo={scrollTo} />
          </div>
          <div ref={section1} className="panel" id="gameplay">
            <GameplaySection goToSectionRef={section1} scrollTo={scrollTo} />
          </div>

          <div ref={section3} className="panel" id="roadmap">
            <RoadmapSection goToSectionRef={section2} scrollTo={scrollTo} />
          </div>
          <div ref={section2} className="panel1" >
            <FooterSection goToSectionRef={section3} scrollTo={scrollTo} />
          </div>
        </div>
        {/* <div ref={section2}> */}
        {/*   <Mysection */}
        {/*     image={`/images/chris-chan-wA-dbT3FJnE-unsplash.jpg`} */}
        {/*     headline={`Lorem Ipsum Dolor Sit Amet`} */}
        {/*     goToSectionRef={section3} */}
        {/*     scrollTo={scrollTo} */}
        {/*     showArrow={true} */}
        {/*   /> */}
        {/* </div> */}
      </div>
    </>
  );
}