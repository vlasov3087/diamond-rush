import { FC, useEffect } from "react";
import styles from "./heroSection.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Warp from "../warp";
import { Container, Row, Col } from "react-grid-system";
gsap.registerPlugin(ScrollTrigger);
const HeroSection: FC<{}> = () => {
  return (
    <div className={styles.section}>
      <div className={styles.warp}>
        <Warp />
      </div>
      <Container>
        <Row justify="center">
          <Col lg={9}>
            <h1 className={styles.title}>Welcome to the Diamond Rush</h1>
          </Col>
          <Col lg={6}>
            <p className={styles.subtitle}>
              Become the owner of cryptocurrency just by playing an exciting
              game on your computer.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
