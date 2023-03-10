import { FC, useEffect } from "react";
import styles from "./roadmapSection.module.scss";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Container, Row, Col } from "react-grid-system";
import Milestone from "./milestone";
import { useMediaQuery } from "react-responsive";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);

const RoadmapSection: FC<{}> = () => {
  const milestones = [
    {
      isFinished: true,
      isFirst: true,
      title: "Q4 2022",
      items: [
        {
          title: "White paper",
          completed: true,
        },
        {
          title: "Promo video",
          completed: true,
        },
        {
          title: "Website",
          completed: false,
        },
        {
          title: "Pitch deck",
          completed: false,
        },
        {
          title: "Launching social media",
          completed: false,
        },
        {
          title: "PRE-Marketing",
          completed: false,
        },
        {
          title: "Whitelist registration",
          completed: false,
        },
        {
          title: "Genesis pickaxe NFT sale",
          completed: false,
        },
      ],
    },
    {
      title: "Q1 2023",
      items: [
        {
          title: "Marketing and community campaigns",
          completed: false,
        },
        {
          title: "Token Pre-Sale",
          completed: false,
        },
        {
          title: "MVP",
          completed: false,
        },
      ],
    },
    {
      title: "Q2 2023",
      items: [
        {
          title: "Beta test",
          completed: false,
        },
        {
          title: "Exclusive events",
          completed: false,
        },
        {
          title: "Pickaxe NFT sale",
          completed: false,
        },
        {
          title: "Marketing",
          completed: false,
        },
      ],
    },
    {
      title: "Q3 2023",
      items: [
        {
          title: "Official Launch",
          completed: false,
        },
        {
          title: "New NFTs",
          completed: false,
        },
        {
          title: "Special events",
          completed: false,
        },
        {
          title: "Marketing",
          completed: false,
        },
      ],
    },
  ];
  const isTablet = useMediaQuery({ query: "(max-width: 1180px)" });
  useEffect(() => {
    setTimeout(() => {
      const boxes = gsap.utils.toArray(".milestoneCard");

      boxes.forEach((box: any, i) => {
        const anim = gsap.fromTo(
          box,
          { autoAlpha: 0, x: 30 },
          { duration: 0.5, autoAlpha: 1, x: 0 }
        );
        ScrollTrigger.create({
          trigger: box,
          animation: anim,
          toggleActions: "play none none none",
          once: true,
        });
      });

      const steps = gsap.utils.toArray(".step");

      steps.forEach((box: any, i) => {
        const anim = gsap.fromTo(
          box,
          { autoAlpha: 0, y: 10 },
          { duration: 0.7, autoAlpha: 1, y: 0 }
        );
        ScrollTrigger.create({
          trigger: box,
          animation: anim,
          toggleActions: "play none none none",
          once: true,
        });
      });
    }, 0);
  }, []);
  return (
    <div
      className={`${styles.section} ${isTablet ? styles.mobileSection : ""}`}
    >
      <Container>
        <Row justify="center">
          <Col xl={4} md={12} lg={12}>
            <h2>OUR LUCKY ROADMAP</h2>
          </Col>
          <Col xl={8} md={12} lg={9} className="scroller">
            {milestones.map((item) => {
              return (
                <Milestone
                  isFirst={item.isFirst}
                  isFinished={item.isFinished}
                  milestones={item.items}
                  title={item.title}
                  key={item.title}
                />
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RoadmapSection;
