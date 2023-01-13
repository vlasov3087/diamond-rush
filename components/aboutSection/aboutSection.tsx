import { FC, useRef } from "react";
import styles from "./aboutSection.module.scss";
import { Container, Row, Col } from "react-grid-system";
import "swiper/css";
import "swiper/css/pagination";
import dynamic from "next/dynamic";
// import required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import ReactPlayer from "react-player/lazy";
import Spinner from "../spinner";

const AboutSection: FC<{}> = () => {
  const pagination = {
    clickable: true,
    draggble: true,

    renderBullet: function (index: number, className: string) {
      return `<span class="${className}"><span class="paginationNumber">${
        index + 1
      }</span></span>`;
    },
  };
  const isPhone = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 991px)" });
  const isLaptop = useMediaQuery({ query: "(min-width: 992px)" });

  return (
    <div
      className={`${styles.section} ${isTablet ? styles.mobileSection : ""}`}
    >
      <Container>
        <Row>
          <Col lg={5} md={12}>
            {isTablet ? (
              <h2 className={styles.sectionTitle}>WHAT IS DIAMOND RUSH?</h2>
            ) : null}

            <Swiper
              pagination={pagination}
              modules={[Pagination]}
              className={`${styles.swiperSlider} ${
                isPhone ? styles.mobileSlide : ""
              }`}
            >
              <SwiperSlide className={`${styles.slide} `}>
                <ReactPlayer
                  url="/videos/videoSection.mp4"
                  playsinline
                  muted
                  fallback={<Spinner />}
                  loop
                  light={"videoThumbnail.png"}
                  width="100%"
                  playIcon={
                    <svg
                      width="72"
                      height="72"
                      viewBox="0 0 72 72"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="35.9999"
                        cy="35.9994"
                        r="34.1962"
                        stroke="white"
                        strokeWidth="2.92276"
                      />
                      <path
                        d="M49.7369 35.7846C50.1266 36.0096 50.1266 36.5721 49.7369 36.7971L29.1315 48.6936C28.7418 48.9186 28.2547 48.6374 28.2547 48.1874L28.2547 24.3943C28.2547 23.9443 28.7418 23.663 29.1315 23.888L49.7369 35.7846Z"
                        fill="white"
                      />
                    </svg>
                  }
                  height="100%"
                  playing
                />
                {/* <video */}
                {/*   preload="auto" */}
                {/*   className={styles.video} */}
                {/*   autoPlay */}
                {/*   playsInline */}
                {/*   muted */}
                {/*   loop */}
                {/* > */}
                {/*   <source src="/videos/videoSection.mp4" type="video/mp4" /> */}
                {/* </video> */}
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <ReactPlayer
                  url="/videos/videoSection.mp4"
                  playsinline
                  muted
                  fallback={<Spinner />}
                  loop
                  playIcon={
                    <svg
                      width="72"
                      height="72"
                      viewBox="0 0 72 72"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="35.9999"
                        cy="35.9994"
                        r="34.1962"
                        stroke="white"
                        strokeWidth="2.92276"
                      />
                      <path
                        d="M49.7369 35.7846C50.1266 36.0096 50.1266 36.5721 49.7369 36.7971L29.1315 48.6936C28.7418 48.9186 28.2547 48.6374 28.2547 48.1874L28.2547 24.3943C28.2547 23.9443 28.7418 23.663 29.1315 23.888L49.7369 35.7846Z"
                        fill="white"
                      />
                    </svg>
                  }
                  light={"videoThumbnail.png"}
                  width="100%"
                  height="100%"
                  playing
                />
              </SwiperSlide>
            </Swiper>
          </Col>
          <Col lg={6} offset={{ lg: 1 }} md={12}>
            {isLaptop ? (
              <h2 className={styles.sectionTitle}>WHAT IS DIAMOND RUSH?</h2>
            ) : null}
            <p
              className={`${styles.sectionSubtitle} ${
                isTablet ? styles.tabletSubtitle : ""
              }`}
            >
              Diamond Rush is a Free-to-Play game where you can explore new
              horizons and earn crypto while playing! In Diamond Rush you will
              be able to create your own unique character from the bottom to
              discover an exciting metaverse and communicate with other
              explorers.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutSection;
