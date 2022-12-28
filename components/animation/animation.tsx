import { FC, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin([ScrollToPlugin, ScrollTrigger]);

const Animation: FC = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);

    const firstElem: any = document.querySelector(".panel");

    function goToSection(i: any) {
      console.log(i, i * innerHeight + firstElem.offsetTop);
      const an = gsap.to(window, {
        scrollTo: {
          y: i * innerHeight + firstElem.offsetTop,
          autoKill: false,
          // ease: "inOut",
        },
        duration: 1,
        immediateRender: true,
      });
      return () => {
        an.kill();
      };
    }

    gsap.utils.toArray(".panel").forEach((panel: any, i) => {
      const activepanelEnter = panel.previousElementSibling;

      ScrollTrigger.create({
        trigger: panel,
        onEnter: () => {
          goToSection(i);
          gsap.fromTo(
            activepanelEnter,
            { opacity: 1 },
            { duration: 0.25, opacity: 0 }
          );
          gsap.fromTo(
            panel,
            { opacity: 0 },
            { duration: 0.5, delay: 0.75, opacity: 1 }
          );
        },
      });

      const activepanelEnterBack = panel.nextElementSibling;

      ScrollTrigger.create({
        trigger: panel,
        start: "bottom bottom",
        onEnterBack: () => {
          goToSection(i);
          //gsap.fromTo(activepanelEnterBack, { opacity: 1 }, { duration: 0.25, opacity: 0 })
          gsap.fromTo(
            activepanelEnterBack,
            { opacity: 1 },
            { duration: 0.5, opacity: 0 }
          );
          gsap.fromTo(
            panel,
            { opacity: 0 },
            { duration: 0.5, delay: 0.75, opacity: 1 }
          );
        },
      });
    });
  }, []);
  return <></>;
};

export default Animation;
