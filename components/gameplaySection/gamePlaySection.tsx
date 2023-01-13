import { FC, useEffect, useRef, useState } from "react";
import styles from "./gameplaySection.module.scss";
import { Container, Row, Col } from "react-grid-system";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import ReactPlayer from "react-player/lazy";
const GameplaySection: FC<{}> = () => {
  const pagination = {
    clickable: true,
    draggble: true,
    renderBullet: function (index: number, className: string) {
      return `<span class="${className}"><span class="paginationNumber">${
        index + 1
      }</span></span>`;
    },
  };
  const headlineRef: any = useRef();
  const isPhone = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 991px)" });
  const isLaptop = useMediaQuery({ query: "(min-width: 992px)" });
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <div
      className={`${styles.section} ${isTablet ? styles.mobileSection : ""}`}
    >
      <Container>
        <Row ref={headlineRef}>
          <Col lg={6}>
            {isTablet ? (
              <h2 className={styles.sectionTitle}>GAMEPLAY FUTURES</h2>
            ) : null}

            {domLoaded && (
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
                    muted
                    loop
                    light={"videoThumbnail.png"}
                    width="100%"
                    height="100%"
                    playing
                  />
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  <ReactPlayer
                    url="/videos/videoSection.mp4"
                    playsinline
                    muted
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
            )}
          </Col>
          <Col lg={5} offset={{ lg: 1 }}>
            {isLaptop ? (
              <h2 className={styles.sectionTitle}>GAMEPLAY FUTURES</h2>
            ) : null}

            <p
              className={`${styles.sectionSubtitle} ${
                isTablet ? styles.tabletSubtitle : ""
              }`}
            >
              Seeing the character from 3pv, the player can move around the game
              world at different levels of zoom, select areas for mining and
              control one’s character. One earth cube can be mined by one player
              at a time only.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GameplaySection;
