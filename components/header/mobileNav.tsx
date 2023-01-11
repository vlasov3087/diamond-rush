import { FC, useEffect } from "react";
import { useTransition, animated } from "react-spring";
import { easings } from "@react-spring/web";

const MobileNav: FC<any> = ({ open, toggle }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflowY = "hidden";
      return;
    }
    document.body.style.overflowY = "auto";
  }, [open]);

  const transition = useTransition(open, {
    config: {
      duration: 500,
      easing: easings.easeInOutCubic,
    },

    from: {
      opacity: 0,

      transformMain: "translateY(-400px)",
    },
    enter: {
      opacity: 0.5,
      transformMain: "translateY(0px)",
    },
    leave: {
      opacity: 0,
      transformMain: "translateY(-400px)",
    },
  });

  return transition(({ opacity, transformMain }, visible) => {
    return visible ? (
      <animated.nav style={{ transform: transformMain }} className="mobile-nav">
        <div className="content-wrapper">
          <animated.ul style={{}} className="list">
            <li className="list-item">
              <a
                href="#home"
                onClick={() => {
                  toggle(false);
                }}
              >
                HOME
              </a>
            </li>
            <li
              className="list-item"
              onClick={() => {
                toggle(false);
              }}
            >
              <a href="#video">VIDEO</a>
            </li>
            <li
              className="list-item"
              onClick={() => {
                toggle(false);
              }}
            >
              <a href="#about">ABOUT</a>
            </li>
            <li
              className="list-item"
              onClick={() => {
                toggle(false);
              }}
            >
              <a href="#gameplay">GAMEPLAY</a>
            </li>
            <li
              className="list-item"
              onClick={() => {
                toggle(false);
              }}
            >
              <a href="#about">NFT</a>
            </li>
            <li className="list-item">
              <a
                href="#roadmap"
                onClick={() => {
                  toggle(false);
                }}
              >
                ROADMAP
              </a>
            </li>
          </animated.ul>
        </div>
        <animated.div
          className="content-background"
          style={{ opacity}}
        ></animated.div>
      </animated.nav>
    ) : null;
  });
};

export default MobileNav;
