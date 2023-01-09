import { FC, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./footerSection.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Warp from "../warp";
import { Container, Row, Col } from "react-grid-system";
import { useMediaQuery } from "react-responsive";
gsap.registerPlugin(ScrollTrigger);

const FooterSection: FC<{}> = () => {
  const isPhone = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1180px)" });
  const isLaptop = useMediaQuery({ query: "(min-width: 1181px)" });

  return (
    <div className={styles.section}>
      <Container>
        <Row>
          <Col lg={7} sm={12}>
            <p className={styles.footerText}>
              Subscribe for Diamond Rush insights delivered straight to inbox
            </p>
            <div className={styles.copyright}>
              {!isPhone ? (
                <img className="logo-image" src="/images/logo.svg" alt="logo" />
              ) : null}
              {!isPhone ? (
                <p>Copyright ⓒ 2022 Diamon Rush. All rights reserved.</p>
              ) : null}
            </div>
          </Col>
          <Col lg={5} sm={12}>
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
            {isPhone ? (
              <p>Copyright ⓒ 2022 Diamon Rush. All rights reserved.</p>
            ) : null}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterSection;
