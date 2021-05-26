import React from "react";
import styles from "./grayDiv.module.css";

export default function grayDiv() {
  return (
    <div className={styles.container}>
      <div className={styles.desk}>
        <img className={styles.deskImg} src="/desk.png" />
      </div>
      <div className={styles.text}>
        <div className={styles.multicolorTitle}>
          <p className={styles.black}>
            Welcome to <span className={styles.red}>Dwidasa Samsara</span>
            <br />
            <span className={styles.redTitle}>Indonesia (DSI)</span>
          </p>
        </div>

        <div className={styles.description}>
          <p className={styles.paragraph}>
            Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by
            the founders, who each of them has a common end objective to
            innovate new creations by making the most of the ever-growing
            information technology through DSI’s distinct front-end based
            application concept.
          </p>
          <p className={styles.paragraph}>
            Managed by a team of professional experts with extensive experience
            and impressive track records, DSI believes that continuous
            improvements and innovations assure your business to run effectively
            and efficiently.
          </p>
        </div>
      </div>
    </div>
  );
}
