import React, { FC } from "react";
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
  return (
    <div
      className={`${styles.milestoneItem} ${
        isFirst ? styles.firstMilestone : ""
      }`}
    >
      <h4 className={isFinished ? `${styles.milestoneTitle} ${styles.completed}` : styles.milestoneTitle}>{title}</h4>
      <div className={styles.milestoneCard}>
        <h4>MILESTONE</h4>
        <ul>
          {milestones.map((item) => {
            return (
              <li key={item.title}>
                <div
                  className={item.completed ? styles.completedMilestone : ""}
                ></div>
                {item.title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Milestone;
