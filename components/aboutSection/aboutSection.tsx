import { FC, useRef } from "react";
import styles from "./aboutSection.module.scss";
import { Container, Row, Col } from "react-grid-system";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
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
  return (
    <div className={styles.section}>
      <Container>
        <Row>
          <Col lg={5} offset={{ lg: 1 }}>
            <Swiper
              pagination={pagination}
              modules={[Pagination]}
              className={styles.swiperSlider}
            >
              <SwiperSlide className={styles.slide}>
                <video className={styles.video} autoPlay muted loop>
                  <source src="/videos/videoSection.webm" type="video/webm" />
                </video>
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <video className={styles.video} autoPlay muted loop>
                  <source src="/videos/videoSection.webm" type="video/webm" />
                </video>
              </SwiperSlide>
            </Swiper>
          </Col>
          <Col lg={6}>
            <h2 className={styles.sectionTitle}>WHAT IS DIAMOND RUSH?</h2>
            <p className={styles.sectionSubtitle}>
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
