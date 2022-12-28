import { FC, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./footerSection.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Warp from "../warp";
import { Container, Row, Col } from "react-grid-system";
gsap.registerPlugin(ScrollTrigger);

const FooterSection: FC<{
  scrollTo: any;
  goToSectionRef: any;
}> = ({ scrollTo, goToSectionRef }) => {
  const headlineRef: any = useRef();
  const sectionRef: any = useRef();
  return (
    <div className={styles.section} ref={sectionRef}>
      <Container>
        <Row ref={headlineRef}>
          <Col lg={7}>
            <p className={styles.footerText}>
              Subscribe for Diamond Rush insights delivered straight to inbox
            </p>
            <div className={styles.copyright}>
              <img className="logo-image" src="/images/logo.svg" alt="logo" />
              <p>Copyright ⓒ 2022 Diamon Rush. All rights reserved.</p>
            </div>
          </Col>
          <Col lg={5}>
            <form action="" className={styles.subscribe}>
              <input type="email" placeholder="E-mail address" />
              <button>SUBSCRIBE</button>
            </form>
            <div className={styles.mediaLinks}>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer">
                <img
                  className="logo-image"
                  src="/images/telegram.svg"
                  alt="logo"
                />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="logo-image"
                  src="/images/youtube.svg"
                  alt="logo"
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="logo-image"
                  src="/images/twitter.svg"
                  alt="logo"
                />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="logo-image"
                  src="/images/discord.svg"
                  alt="logo"
                />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterSection;
