import React from 'react'
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <div className={styles.nav}>
      <button className={styles.categories}>Разливне пиво</button>
      <button className={styles.categories}>Разливний сидр</button>
      <button className={styles.categories}>Разливне вино</button>
      <button className={styles.categories}>Снеки</button>
      <button className={styles.categories}>Сети</button>
      <button className={styles.categories}>Банка</button>
      <button className={styles.categories}>Б/А</button>
      <button className={styles.shop}>SHop</button>
    </div>
  )
}
