import React, { FC, useEffect } from "react";
import { animated } from "react-spring";

const HamburgerMenu: FC<any> = ({
  styles,
  handleClick
}) => {

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
