import { FC, useEffect } from "react";
import { useTransition, animated } from "react-spring";

const headings = ["VIDEO", "ABOUT", "GAMEPLAY", "ROADMAP"];

const MobileNav: FC<any> = ({ open, toggle }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflowY = "hidden";
      return;
    }
    document.body.style.overflowY = "auto";
  }, [open]);

  const transition = useTransition(open, {
    from: {
      opacity: 0,
      transformMain: "translateX(40px)",
      transformFoot: "translateX(200px)",
    },
    enter: {
      opacity: 1,
      transformMain: "translateX(0px)",
      transformFoot: "translateX(0px)",
    },
    leave: {
      opacity: 0,
      transformMain: "translateX(40px)",
      transformFoot: "translateX(200px)",
    },
  });

  return transition(({ opacity, transformMain, transformFoot }, visible) => {
    return visible ? (
      <animated.nav style={{ opacity }} className="mobile-nav">
        <div className="content-wrapper">
          <animated.ul style={{ transform: transformMain }} className="list">
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
      </animated.nav>
    ) : null;
  });
};

export default MobileNav;
