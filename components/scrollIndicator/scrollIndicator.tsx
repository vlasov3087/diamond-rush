import { FC, useEffect, useState } from "react";

const ScrollIndicator: FC<any> = ({ activeSlide, scrollTop, isMobile }) => {
  const [pageScroll, setPageScroll] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      const scroll = document.querySelector(".scrollCanvas");
      scroll?.addEventListener("scroll", () => {
        const scrollTop = (scroll.scrollTop / scroll.scrollHeight) * 100;
        setPageScroll(scrollTop ? scrollTop : 0);
      });
    }, 0);
  }, []);
  // const handleScroll = (): void => {
  //   const windowTop: number = window.scrollY;
  // };
  // useEventListener(document, "scroll", handleScroll);

  return (
    <div
      style={{
        height: "100%",
        width: 4,
        overflow: "hidden",
        borderRadius: 5,
        position: "relative",
        background: "#3b3a3b",
        boxShadow:
          "inset -0.75px 0px 1px rgba(31, 31, 31, 0.6), inset 0.75px 0px 1px rgba(31, 31, 31, 0.5)",
      }}
    >
      {isMobile ? (
        <div
          className={`scroll active`}
          style={{
            transition: "none",
            height: `${pageScroll + 18}%`,
          }}
        ></div>
      ) : (
        <>
          <div
            className={`scroll  ${
              activeSlide < 1 || activeSlide > 2 ? "active" : ""
            }`}
            style={{
              transition: activeSlide === 4 ? "none" : undefined,
              height:
                activeSlide === 4
                  ? `${60 + scrollTop / 40}%`
                  : `${(activeSlide + 1) * 15}%`,
            }}
          ></div>
          <div
            className={`scroll yellow ${activeSlide === 1 ? "active" : ""}`}
            style={{
              height: `${(activeSlide + 1) * 15}%`,
            }}
          ></div>
          <div
            className={`scroll pink ${activeSlide === 2 ? "active" : ""}`}
            style={{
              height: `${(activeSlide + 1) * 15}%`,
            }}
          ></div>
        </>
      )}
    </div>
  );
};

export default ScrollIndicator;
