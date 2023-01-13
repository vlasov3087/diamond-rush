import { FC, useRef } from "react";
import styles from "./videoSection.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Container, Row, Col } from "react-grid-system";
import { useMediaQuery } from "react-responsive";
import ReactPlayer from "react-player/lazy";
gsap.registerPlugin(ScrollTrigger);

const VideoSection: FC<{}> = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1180px)" });

  return (
    <div
      className={`${styles.section} ${isTablet ? styles.mobileSection : ""}`}
    >
      <Container>
        <Row justify="center">
          <Col lg={10}>
            <h2 className={styles.sectionTitle}>
              FIND RARE RESOURCES AND EXCHANGE FOR CRYPTO
            </h2>
          </Col>
          <Col lg={6}>
            <p className={styles.sectionSubtitle}>
              Diamond Rush is a P2E game with a game world represented by a map
              with relief and areas suitable for mining development by players.
            </p>
          </Col>
        </Row>
      </Container>
      <ReactPlayer
        url="/videos/videoSection.mp4"
        playsinline
        muted
        loop
        className={styles.video}
        light={isTablet}
        width={"100%"}
        height={isTablet ? "300px" : "100%"}
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
        playing
      />
    </div>
  );
};

export default VideoSection;
