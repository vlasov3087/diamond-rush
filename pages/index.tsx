import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import FooterSection from "../components/footerSection";
import Header from "../components/header";
import HeroSection from "../components/heroSection";
import RoadmapSection from "../components/roadmapSection/roadmapSection";
import ScrollIndicator from "../components/scrollIndicator/scrollIndicator";
import styles from "../styles/Home.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperEvent } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import { EffectFade, Mousewheel, Scrollbar } from "swiper";
import VideoSection from "../components/videoSection";
import AboutSection from "../components/aboutSection";
import GameplaySection from "../components/gameplaySection";

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const [activePage, setActivePage] = useState(0);
  const [swiper, setSwiper] = useState<SwiperEvent>();
  useEffect(() => {
    if (swiper) {
      swiper.slideTo(activePage);
      swiper.mousewheel.enable();
      swiper.allowTouchMove = true;
    }
  }, [activePage]);
  const handleScrollInside = (swiper: SwiperEvent) => {
    var activeIndex = swiper.activeIndex;
    var activeSlide = swiper.slides[activeIndex];

    var { scrollHeight, clientHeight } = activeSlide;
    const hasVerticalScrollbar = scrollHeight - clientHeight;

    if (hasVerticalScrollbar) {
      const scrollDifferenceTop =
        activeSlide.scrollHeight - activeSlide.clientHeight;
      if (activeSlide.scrollTop === 0) activeSlide.scrollTop += 1;
      if (activeSlide.scrollTop === scrollDifferenceTop)
        activeSlide.scrollTop -= 2;
      swiper.mousewheel.disable();
      swiper.allowTouchMove = false;

      activeSlide.addEventListener("scroll", () => {
        console.log(activeSlide.scrollTop);
        setScrollTop(activeSlide.scrollTop);
        if (activeSlide.scrollTop <= 0) {
          swiper.mousewheel.enable();

          swiper.allowTouchMove = true;
        }
      });
    }
  };

  return (
    <>
      <Head>
        <title>Diamond Rush</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header setActivePage={setActivePage} />
      <div className={`container ${styles.container}`}>
        <div className={styles.mainSections}>
          <div className={styles.scroll}>
            <ScrollIndicator
              height={10}
              activeSlide={activeSlide}
              scrollTop={scrollTop}
            />
          </div>
          <Swiper
            direction={"vertical"}
            touchEventsTarget={"container"}
            speed={500}
            parallax={true}
            autoplay={false}
            mousewheel={{
              sensitivity: 0.00001,
              thresholdDelta: 100,
            }}
            followFinger={false}
            shortSwipes={false}
            preventInteractionOnTransition={true}
            allowTouchMove={false}
            initialSlide={activePage}
            onSwiper={(swiper) => setSwiper(swiper)}
            onSlideChange={(e) => {
              setActiveSlide(e.activeIndex);
            }}
            onSlideChangeTransitionEnd={handleScrollInside}
            effect={"fade"}
            fadeEffect={{
              crossFade: true,
            }}
            modules={[Mousewheel, Scrollbar, EffectFade]}
            className="swiper-container"
          >
            <SwiperSlide>
              <div className="panel" id="home">
                <HeroSection />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="panel" id="video">
                <VideoSection />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="panel" id="about">
                <AboutSection />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="panel" id="gameplay">
                <GameplaySection />
              </div>
            </SwiperSlide>
            <SwiperSlide draggable={false} style={{ overflow: "auto" }}>
              <div className="panel" id="roadmap">
                <RoadmapSection />
                <FooterSection />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
