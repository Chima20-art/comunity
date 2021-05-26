import React from "react";
import styles from "./annex.module.css";

export default function Annex() {
  return (
    <div className={styles.container}>
      <div className={styles.information}>
        <div className={styles.adress}>
          <div className={styles.logo}>
            <img src="/DSI-logo.png" />
          </div>
          <div className={styles.subTitle}>PT Dwidasa Samsara Indonesia</div>
          <div className={styles.text}>
            <div>Ruko Jalur Sutera 29A No. 53 </div>
            <div>Alam Sutera Serpong, Tangerang 15323</div>
          </div>
        </div>
        <div className={styles.contact}>
          <div className={styles.title}>Contact</div>
          <div className={styles.contacts}>
            <div>Phone : +62.21.5314.1135</div>
            <div>Fax : +62.21.5314.1135</div>
            <div> Email : community@dwidasa.com</div>
          </div>
        </div>
        <div className={styles.logos}>
          <img className={styles.logo} src="/silverlight.png" />
          <img className={styles.logo} src="/dotNet.png" />
          <img className={styles.logoX} src="/java.png" />
          <img className={styles.logo} src="/ios.png" />
          <img className={styles.logo} src="/android.png" />
          <img className={styles.logoX} src="/blackBerry.png" />
        </div>
      </div>
      <div className={styles.footer}>
        Copyright © 2015 - Dwidasa Samsara Indonesia
      </div>
    </div>
  );
}
