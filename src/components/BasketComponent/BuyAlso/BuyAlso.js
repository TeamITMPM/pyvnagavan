import React from "react";
import styles from "./BuyAlso.module.css";

export default function BuyAlso() {
  return (
    <div>
      <h3>Вас також можуть зацікавити:</h3>
      <div className={styles.items}>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
      
      </div>
    </div>
  );
}
