import { FC, useRef } from "react";
import styles from "./aboutSection.module.scss";
import { Container, Row, Col } from "react-grid-system";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
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
                <video className={styles.video} autoPlay playsInline muted loop>
                  <source src="/videos/videoSection.mp4" type="video/mp4" />
                </video>
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <video className={styles.video} autoPlay muted loop playsInline>
                  <source src="/videos/videoSection.mp4" type="video/mp4" />
                </video>
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
