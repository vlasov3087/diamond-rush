import React, { FC } from "react";
import { animated } from "react-spring";

const HamburgerMenu: FC<any> = ({
  open,
  toggle,
  api,
  styles,
  animationConfig,
}) => {
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
    toggle((prev:any) => !prev);
  };
  return (
    <button className="btn" onClick={() => handleClick()}>
      <animated.div
        style={{ transform: styles.transformTop, width: styles.widthTop }}
        className="menu-line"
      />
      <animated.div
        style={{ transform: styles.transformMiddle }}
        className="menu-line"
      />
      <animated.div
        style={{
          transform: styles.transformBottom,
          width: styles.widthBottom,
        }}
        className="menu-line"
      />
    </button>
  );
};

export default HamburgerMenu;
