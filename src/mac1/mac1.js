import React from "react";
import styles from "./mac1.module.css";
import Navbar from "../navBar/navBar";

import Presentation from "../presentation/presentation";
import GrayDiv from "../grayDiv/grayDiv";
import Product from "../product and services/product";

export default function Mac() {
  return (
    <div className={styles.container}>
      <Presentation />
      <GrayDiv />
      <Product />
    </div>
  );
}
