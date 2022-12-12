import React from 'react'
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <div className={styles.nav}>
      <button className={styles.categories}>Розливне пиво</button>
      <button className={styles.categories}>Розливний сидр</button>
      <button className={styles.categories}>Розливне вино</button>
      <button className={styles.categories}>Снеки</button>
      <button className={styles.categories}>Сети</button>
      <button className={styles.categories}>Банка</button>
      <button className={styles.categories}>Б/А</button>
      <button className={styles.shop}>Shop</button>
      
    </div>
  )
}
