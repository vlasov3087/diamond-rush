import { FC, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./roadmapSection.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Container, Row, Col } from "react-grid-system";
import Milestone from "./milestone";
import { useMediaQuery } from "react-responsive";
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

  return (
    <div
      className={`${styles.section} ${isTablet ? styles.mobileSection : ""}`}
    >
      <Container>
        <Row>
          <Col lg={4} md={12}>
            <h2>OUR LUCKY ROADMAP</h2>
          </Col>
          <Col lg={8} md={12}>
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
