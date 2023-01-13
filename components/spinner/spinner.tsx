import React from "react";
import styles from "./spinner.module.scss";

const Spinner = () => {
  return (
    <div className={styles.spinnerWrapper}>
      <div className={styles.spinner}>
        <div className={styles.spinner1}></div>
      </div>
    </div>
  );
};

export default Spinner;
