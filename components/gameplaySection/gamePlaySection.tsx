import { FC, useEffect, useRef, useState } from "react";
import styles from "./gameplaySection.module.scss";
import { Container, Row, Col } from "react-grid-system";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";


// import required modules
import { EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
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
                modules={[Pagination,EffectFade]}
                effect={"fade"}
                fadeEffect={{
                  crossFade: true,
                }}
                className={`${styles.swiperSlider} ${
                  isPhone ? styles.mobileSlide : ""
                }`}
              >
                <SwiperSlide className={`${styles.slide} `}>
                  <video
                    className={`${styles.video} `}
                    autoPlay
                    muted
                    playsInline
                    loop
                  >
                    <source src="/videos/videoSection.mp4" type="video/mp4" />
                  </video>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  <video
                    className={styles.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/videos/videoSection.mp4" type="video/mp4" />
                  </video>
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
