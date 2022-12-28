import { FC, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./heroSection.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Warp from "../warp";
import { Container, Row, Col } from "react-grid-system";
gsap.registerPlugin(ScrollTrigger);

const HeroSection: FC<{
  scrollTo: any;
  goToSectionRef: any;
}> = ({ scrollTo, goToSectionRef }) => {
  const headlineRef: any = useRef();
  const sectionRef: any = useRef();
  useEffect(() => {
    gsap.fromTo(
      headlineRef.current,
      {
        autoAlpha: 0,
        y: -20,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          scroller: ".container",
          trigger: headlineRef.current,
          start: "top 60%",
          end: "bottom 0%",
          toggleActions: "play none restart reverse",
        },
      }
    );
    return () => {};
  }, []);
  return (
    <div className={styles.section} ref={sectionRef}>
      <div className={styles.warp}>
        <Warp />
      </div>
      <Container>
        <Row justify="center" ref={headlineRef}>
          <Col lg={9}>
            <h1  className={styles.title}>
              Welcome to the Diamond Rush
            </h1>
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
