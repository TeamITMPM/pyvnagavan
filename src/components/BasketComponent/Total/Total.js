import React from "react";
import styles from "./Total.module.css"

export default function Total() {
  return (
    <div className={styles.container}>
      <div>До сплати: 500грн</div>
      <button className={styles.button}>Перейти до сплати</button>
    </div>
  );
}
