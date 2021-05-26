import React from "react";
import styles from "./product.module.css";

export default function Product() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Product and Service</div>
      <div className={styles.list}>
        <div className={styles.listItem}>
          <div className={styles.image}>
            <img src="/product-description 1.png" />
          </div>
          <div className={styles.subTitle}>Our Product</div>
          <div className={styles.paragraph}>
            Our product is made on the base of our team’s careful research and
            analyses, ranging from internet based application.
          </div>
          <div className={styles.button}>Read more</div>
        </div>
        <div className={styles.listItem}>
          <div className={styles.image}>
            <img src="/service.png" />
          </div>
          <div className={styles.subTitle}>Our Service</div>
          <div className={styles.paragraph}>
            DSI’s shared service solutions focus on the front-end based software
            development, designed specifically for the banking and financial
            sectors.
          </div>
          <div className={styles.button}>Read more</div>
        </div>
        <div className={styles.listItem}>
          <div className={styles.image}>
            <img src="/technology.png" />
          </div>
          <div className={styles.subTitle}>Our Technology</div>
          <div className={styles.paragraph}>
            First JAVA, runs on more than 850 million personal computers
            worldwide, and on billions of devices worldwide, including mobile
            and TV devices.
          </div>
          <div className={styles.button}>Read more</div>
        </div>
      </div>
    </div>
  );
}
