import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import FooterSection from "../components/footerSection";
import Header from "../components/header";
import HeroSection from "../components/heroSection";
import RoadmapSection from "../components/roadmapSection/roadmapSection";
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
import { ScreenClassProvider, setConfiguration } from "react-grid-system";
import { useMediaQuery } from "react-responsive";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ScrollIndicator from "../components/scrollIndicator/scrollIndicator";
import { NextSeo } from "next-seo";
import DiscordButton from "../components/discordButton/discordButton";
gsap.registerPlugin(ScrollTrigger);

setConfiguration({
  breakpoints: [576, 768, 992, 1180, 1180, 1180],
  containerWidths: [580, 740, 960, 1210, 1210, 1210],
});

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const [activePage, setActivePage] = useState(0);
  const [swiper, setSwiper] = useState<SwiperEvent>();
  const isPhone = useMediaQuery({ query: "(max-width: 580px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1180px)" });
  const isLaptop = useMediaQuery({ query: "(max-width: 1370px)" });

  useEffect(() => {
    if (swiper) {
      swiper.slideTo(activePage);
      swiper.mousewheel.enable();
      swiper.allowTouchMove = true;
    }
  }, [activePage]);
  function preventScroll(e: any) {
    e.preventDefault();
    e.stopPropagation();

    return false;
  }
  const handleScrollInside = (swiper: SwiperEvent) => {
    var activeIndex = swiper.activeIndex;
    var activeSlide = swiper.slides[activeIndex];

    var { scrollHeight, clientHeight } = activeSlide;
    const hasVerticalScrollbar = scrollHeight - clientHeight;

    if (hasVerticalScrollbar) {
      swiper.mousewheel.disable();
      swiper.allowTouchMove = false;
      // activeSlide.addEventListener("wheel", preventScroll);
      // setTimeout(() => {
      //   activeSlide.removeEventListener("wheel", preventScroll);
      // }, 400);
      activeSlide.addEventListener("scroll", () => {
        setScrollTop(activeSlide.scrollTop);

        ScrollTrigger.refresh();

        if (activeSlide.scrollTop <= 0) {
          swiper.slideTo(activeIndex - 1);

          swiper.mousewheel.enable();

          swiper.allowTouchMove = true;
        }
      });
    }
  };
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      const steps = gsap.utils.toArray(".panel");

      steps.forEach((box: any, i) => {
        const anim = gsap.fromTo(
          box,
          {
            autoAlpha: 0,
            y: 20,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            ease: "power3.out",
          }
        );
        ScrollTrigger.create({
          trigger: box,
          animation: anim,
          start: "top 60%",
          end: "bottom 0%",
          toggleActions: "play none restart reverse",
        });
      });
    }, 0);
  }, []);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <>
      <Head>
        <title>Diamond Rush</title>
        <meta
          name="description"
          content="Diamond Rush is a Free-to-Play game where you can explore new horizons and earn crypto while playing!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000000" />
      </Head>
      <NextSeo
        title="Diamond Rush"
        description="Diamond Rush is a Free-to-Play game where you can explore new horizons and earn crypto while playing! In Diamond Rush you will be able to create your own unique character from the bottom to discover an exciting metaverse and communicate with other explorers."
        canonical="https://diamond-rush.vercel.app/"
        openGraph={{
          url: "https://diamond-rush.vercel.app/",
          title: "Diamond Rush",
          description:
            "Diamond Rush is a Free-to-Play game where you can explore new horizons and earn crypto while playing! In Diamond Rush you will be able to create your own unique character from the bottom to discover an exciting metaverse and communicate with other explorers.",
          images: [{ url: "/favicon/apple-touch-icon.png" }],
          siteName: "Diamond rush",
        }}
      />
      <ScreenClassProvider>
        <Header setActivePage={setActivePage} activeSlide={activeSlide} />
        <DiscordButton />
        <div className={`container ${styles.container}`}>
          <div
            className={`${styles.mainSections}  ${
              isPhone ? styles.mobile : isTablet ? styles.tablet : ""
            } scrollCanvas`}
          >
            <div
              className={`${styles.scroll} ${
                isLaptop ? styles.mobileScroll : ""
              }`}
            >
              <ScrollIndicator
                height={10}
                activeSlide={activeSlide}
                scrollTop={scrollTop}
                isMobile={isTablet ? true : false}
              />
            </div>

            {!isTablet ? (
              <>
                {domLoaded && (
                  <Swiper
                    direction={"vertical"}
                    touchEventsTarget={"container"}
                    speed={800}
                    parallax={true}
                    autoplay={false}
                    mousewheel={{
                      sensitivity: 0.00001,
                      thresholdDelta: 40,
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
                )}
              </>
            ) : (
              <>
                <div className="panel" id="home">
                  <HeroSection />
                </div>
                <div className="panel" id="video">
                  <VideoSection />
                </div>
                <div className="panel" id="about">
                  <AboutSection />
                </div>
                <div className="panel" id="gameplay">
                  <GameplaySection />
                </div>
                <div className="panel" id="roadmap">
                  <RoadmapSection />
                  <FooterSection />
                </div>
              </>
            )}
          </div>
        </div>
      </ScreenClassProvider>
    </>
  );
}
