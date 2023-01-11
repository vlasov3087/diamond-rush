import { FC, useRef } from "react";
import styles from "./videoSection.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Container, Row, Col } from "react-grid-system";
import { useMediaQuery } from "react-responsive";
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
      <video className={styles.video} autoPlay muted playsInline loop>
        <source src="/videos/videoSection.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoSection;
