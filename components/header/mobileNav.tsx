import { FC, useEffect } from "react";
import { useTransition, animated } from "react-spring";

const headings = ["VIDEO", "ABOUT", "GAMEPLAY", "ROADMAP"];

const MobileNav: FC<any> = ({ open }) => {
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
            {headings.map((heading) => (
              <li className="list-item" key={heading}>
                {heading}
              </li>
            ))}
          </animated.ul>
        </div>
      </animated.nav>
    ) : null;
  });
};

export default MobileNav;
