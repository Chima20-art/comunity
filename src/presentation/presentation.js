import React from "react";
import styles from "./presentation.module.css";

export default function presentation() {
  return (
    <div className={styles.container}>
      <div className={styles.presentationText}>
        <div className={styles.blackTitle}>
          Making the most of the ever-growing{" "}
        </div>
        <div className={styles.redTitle}>Information Technology</div>

        <div className={styles.text}>
          Managed by a team of professional experts with extensive experience
          and impressive track records
        </div>
        <div className={styles.button}> Read More</div>
      </div>
      <div className={styles.presentationImage}>
        <img src="/pana.png"></img>
      </div>
    </div>
  );
}
