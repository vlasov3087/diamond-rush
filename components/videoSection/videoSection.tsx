import { FC, useRef } from "react";
import styles from "./videoSection.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Container, Row, Col } from "react-grid-system";
gsap.registerPlugin(ScrollTrigger);

const VideoSection: FC<{
  scrollTo: any;
  goToSectionRef: any;
}> = ({ scrollTo, goToSectionRef }) => {
  const headlineRef: any = useRef();
  const sectionRef: any = useRef();
  return (
    <div className={styles.section} ref={sectionRef}>
      <video className={styles.video} autoPlay muted loop>
        <source src="/videos/videoSection.webm" type="video/webm" />
      </video>
      <Container>
        <Row ref={headlineRef} justify="center">
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
    </div>
  );
};

export default VideoSection;
