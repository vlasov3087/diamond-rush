import { FC, useRef } from "react";
import styles from "./gameplaySection.module.scss";
import { Container, Row, Col } from "react-grid-system";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
const GameplaySection: FC<{
}> = () => {
  const pagination = {
    clickable: true,
    draggble: true,
    renderBullet: function (index: number, className: string) {
      return index === 0
        ? `<span class="paginationNumber">${
            index + 1
          }</span><span class="${className}"></span>`
        : `<span class="${className}"></span><span class="paginationNumber">${
            index + 1
          }</span>`;
    },
  };
  const headlineRef: any = useRef();
  const sectionRef: any = useRef();
  return (
    <div className={styles.section} ref={sectionRef}>
      <Container>
        <Row ref={headlineRef}>
          <Col lg={6} offset={{ lg: 1 }}>
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
          <Col lg={5}>
            <h2 className={styles.sectionTitle}>GAMEPLAY FUTURES</h2>
            <p className={styles.sectionSubtitle}>
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
