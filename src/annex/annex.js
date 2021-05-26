import React from "react";
import styles from "./annex.module.css";

export default function Annex() {
  return (
    <div className={styles.container}>
      <div className={styles.adress}>
        <div className={styles.logo}>
          <img src="/DSI-logo.png" />
        </div>
        <div className={styles.subTitle}>PT Dwidasa Samsara Indonesia</div>
        <div className={styles.text}>
          Ruko Jalur Sutera 29A No. 53 Alam Sutera Serpong, Tangerang 15323
        </div>
      </div>
      <div className={styles.contact}>
        <div className={styles.title}>Contact</div>
        <div className={styles.information}>
          Phone : +62.21.5314.1135 Fax : +62.21.5314.1135 Email :
          community@dwidasa.com
        </div>
      </div>
      <div className={styles.logos}>
        <img src="/silverlight.png" />
        <img src="/dotNet.png" />
        <img src="/java.png" />
        <img src="/ios.png" />
        <img src="/android.png" />
        <img src="/blackBerry.png" />
      </div>
    </div>
  );
}
