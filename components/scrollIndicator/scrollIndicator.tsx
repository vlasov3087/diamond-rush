import { FC } from "react";

const ScrollIndicator: FC<any> = ({ activeSlide, scrollTop }) => {
  return (
    <div
      style={{
        height: "100%",
        width: 3,
        overflow: "hidden",
        position: "relative",
        background: "#3b3a3b",
        boxShadow:
          "inset -0.75px 0px 1px rgba(31, 31, 31, 0.6), inset 0.75px 0px 1px rgba(31, 31, 31, 0.5)",
      }}
    >
      <div
        className={`scroll  ${
          activeSlide < 1 || activeSlide > 2 ? "active" : ""
        }`}
        style={{
          transition: activeSlide === 4 ? "none" : undefined,
          height:
            activeSlide === 4
              ? `${40 + scrollTop / 30}%`
              : `${(activeSlide + 1) * 10}%`,
        }}
      ></div>
      <div
        className={`scroll yellow ${activeSlide === 1 ? "active" : ""}`}
        style={{
          height: `${(activeSlide + 1) * 10}%`,
        }}
      ></div>
      <div
        className={`scroll pink ${activeSlide === 2 ? "active" : ""}`}
        style={{
          height: `${(activeSlide + 1) * 10}%`,
        }}
      ></div>
    </div>
  );
};

export default ScrollIndicator;
