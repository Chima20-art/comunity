import React from "react";
import styles from "./navBar.module.css";

export default function NavBar() {
  return (
    <div className={styles.navBar}>
      <div className={styles.logo}>
        <div className={styles.image}>
          <img src="DSI.png"></img>
        </div>
        <div className={styles.description}>
          <div className={styles.text1}>DWIDASA</div>
          <div className={styles.text2}>SAMSARA</div>
          <div className={styles.text3}>INDONESIA</div>
        </div>
      </div>
      <div className={styles.menu}>
        <div className={styles.buttons}>
          <div className={styles.item}> Services</div>
          <div className={styles.item}> Products</div>
          <div className={styles.item}> Technology</div>
          <div className={styles.itemX}>
            <div>Client</div>
            <div>
              <img className={styles.chevron} src="/chevron_down.png"></img>
            </div>
          </div>
          <div className={styles.itemX}>
            <div>About</div>
            <div>
              <img className={styles.chevron} src="/chevron_down.png"></img>
            </div>
          </div>
          <div className={styles.item}> Partner</div>
        </div>
        <div className={styles.media}>
          <div>
            <img className={styles.media1} src="/Union.png"></img>
          </div>
          <div>
            <img className={styles.media2} src="/mail.png"></img>
          </div>
          <div>
            <img className={styles.media3} src="/shuffle.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
}