import React, { useState, FC, useLayoutEffect, useEffect } from "react";
import Link from "next/link";
import { useEventListener } from "../../hooks/useEventListener";
import { useSpring } from "react-spring";
import HamburgerMenu from "./hamburgerMenu";
import MobileNav from "./mobileNav";
import { useMediaQuery } from "react-responsive";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const animationConfig = {
  mass: 1,
  frictionLight: 20,
  frictionHeavy: 30,
  tension: 575,
  delay: 175,
};
const Header: FC<{
  activeSlide: number;
  setActivePage: (num: number) => void;
}> = ({ setActivePage, activeSlide }) => {
  const [navShadow, setShadow] = useState<"navShadow" | "">("");
  useEffect(() => {
    setTimeout(() => {
      const scroll = document.querySelector(".scrollCanvas");
      scroll?.addEventListener("scroll", () => {
        const windowTop: number = scroll?.scrollTop as number;
        ScrollTrigger.refresh();
        windowTop > 90 ? setShadow("navShadow") : setShadow("");
      });
    }, 0);
  }, []);
  const handleClick = () => {
    api.start({
      to: open
        ? [
            {
              transformTop: "translate(-6px, 18.5px) rotate(0deg)",
              transformMiddle: "translate(-6px, 0px) rotate(0deg)",
              transformBottom: "translate(-6px, -18.5px) rotate(0deg)",
              widthTop: "28px",
              widthBottom: "28px",
              config: { clamp: true },
            },
            {
              transformTop: "translate(-6px, 10px) rotate(0deg)",
              transformMiddle: "translate(-6px, 0px) rotate(0deg)",
              transformBottom: "translate(-6px, -10px) rotate(0deg)",
              widthTop: "28px",
              widthBottom: "28px",
              config: {
                clamp: false,
                friction: animationConfig.frictionLight,
                tension: animationConfig.tension,
              },
              delay: animationConfig.delay,
            },
          ]
        : [
            {
              transformTop: "translate(-6px, 18.5px) rotate(0deg)",
              transformMiddle: "translate(-6px, 0px) rotate(0deg)",
              transformBottom: "translate(-6px, -18.5px) rotate(0deg)",
              widthTop: "28px",
              widthBottom: "28px",
              config: { clamp: true },
            },
            {
              transformTop: "translate(-6px, 18.5px) rotate(45deg)",
              transformMiddle: "translate(-6px, 0px) rotate(45deg)",
              transformBottom: "translate(-6px, -18.5px) rotate(-45deg)",
              widthTop: "28px",
              widthBottom: "28px",
              config: {
                clamp: false,
                friction: animationConfig.frictionLight,
                tension: animationConfig.tension,
              },
              delay: animationConfig.delay,
            },
          ],
    });
    toggle((prev: any) => !prev);
  };

  const [open, toggle] = useState(false);
  const [styles, api] = useSpring(() => ({
    transformTop: "translate(-6px, 10px) rotate(0deg)",
    transformMiddle: "translate(-6px, 0px) rotate(0deg)",
    transformBottom: "translate(-6px, -10px) rotate(0deg)",
    widthTop: "28px",
    widthBottom: "28px",
    config: {
      mass: animationConfig.mass,
      friction: animationConfig.frictionHeavy,
      tension: animationConfig.tension,
    },
  }));
  const isPhone = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 991px)" });
  const isLaptop = useMediaQuery({ query: "(min-width: 992px)" });

  return (
    <>
      <header>
        <div
          className={`${navShadow} wrapper ${isPhone ? "mobileWrapper" : ""}`}
        >
          <nav>
            <Link href="/" prefetch={false}>
              {isPhone ? (
                <h3 className="mobile-title">
                  DIAMOND
                  <br />
                  RUSH
                </h3>
              ) : (
                <img
                  className="logo-image"
                  src="/images/logo.svg"
                  alt="logo"
                  onClick={() => {
                    setActivePage(0);
                  }}
                />
              )}
            </Link>
            {isPhone ? (
              <HamburgerMenu styles={styles} handleClick={handleClick} />
            ) : (
              <ul className="nav-items">
                <li>
                  <a
                    href="#home"
                    onClick={() => {
                      setActivePage(0);
                    }}
                    className={activeSlide === 0 ? "active" : ""}
                  >
                    HOME
                  </a>
                </li>
                <li
                  onClick={() => {
                    setActivePage(1);
                  }}
                >
                  <a
                    href="#video"
                    className={activeSlide === 1 ? "active" : ""}
                  >
                    VIDEO
                  </a>
                </li>
                <li
                  onClick={() => {
                    setActivePage(2);
                  }}
                >
                  <a
                    className={activeSlide === 2 ? "active" : ""}
                    href="#about"
                  >
                    ABOUT
                  </a>
                </li>
                <li
                  onClick={() => {
                    setActivePage(3);
                  }}
                >
                  <a
                    className={activeSlide === 3 ? "active" : ""}
                    href="#gameplay"
                  >
                    GAMEPLAY
                  </a>
                </li>
                <li
                  onClick={() => {
                    setActivePage(4);
                  }}
                >
                  <a
                    className={activeSlide === 4 ? "active" : ""}
                    href="#about"
                  >
                    NFT
                  </a>
                </li>
                <li>
                  <a
                    href="#roadmap"
                    className={activeSlide === 4 ? "active" : ""}
                    onClick={() => {
                      setActivePage(4);
                    }}
                  >
                    ROADMAP
                  </a>
                </li>
              </ul>
            )}
          </nav>
        </div>
      </header>
      <MobileNav open={open} handleClick={handleClick} />
    </>
  );
};

export default Header;
