import React, { FC } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./roadmapSection.module.scss";

interface IMilestone {
  title: string;
  completed: boolean;
}
const Milestone: FC<{
  isFinished?: boolean;
  title: string;
  milestones: IMilestone[];
  isFirst?: boolean;
}> = ({ milestones, isFirst, title, isFinished }) => {
  const isPhone = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1180px)" });
  const isLaptop = useMediaQuery({ query: "(min-width: 1181px)" });

  return (
    <div
      className={`${styles.milestoneItem} ${
        isFirst ? styles.firstMilestone : ""
      } ${isPhone ? styles.mobileMilestone : ""}`}
    >
      {!isPhone ? (
        <h4
          className={
            isFinished
              ? `${styles.milestoneTitle} ${styles.completed}`
              : styles.milestoneTitle
          }
        >
          {title}
        </h4>
      ) : null}
      <div className={styles.circleWrapper}>
        <div
          className={`${styles.line} ${
            !isFinished ? styles.unfinishedLine : ""
          }  ${isPhone ? styles.mobileLine : ""}`}
          style={{
            background: isFirst
              ? "linear-gradient(0deg, rgba(67,67,67,1) 0%, rgba(255,255,255,1) 42%);"
              : undefined,
          }}
        ></div>
        <div
          className={`${styles.checkCircle} ${
            !isFinished ? styles.unfinishedCircle : ""
          } ${isPhone ? styles.mobileCircle : ""}`}
        >
          <svg
            width="41"
            height="26"
            viewBox="0 0 41 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="4.5609"
              height="32.5578"
              rx="2.28045"
              transform="matrix(0.700435 0.713716 -0.715513 0.698599 36.8066 0)"
              fill={isFinished ? "white" : "#434343"}
            />
            <rect
              width="4.55901"
              height="20.9896"
              rx="2.2795"
              transform="matrix(0.573417 -0.819264 0.820645 0.571438 0 13.9766)"
              fill={isFinished ? "white" : "#434343"}
            />
          </svg>
        </div>
      </div>
      <div
        className={`${styles.milestoneCard} ${
          !isFinished ? styles.unfinishedCard : ""
        } ${isPhone ? styles.mobileCard : ""}`}
      >
        <h4>MILESTONE</h4>
        <ul>
          {milestones.map((item) => {
            return (
              <li key={item.title}>
                <div
                  className={item.completed ? styles.completedMilestone : ""}
                ></div>
                <p>{item.title}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Milestone;
