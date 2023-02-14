import React from "react";

import styles from "./UserPageNav.module.css";

export default function UserPageNav() {
  return (
    <div className={styles.container}>
     <div />
      <h2 className={styles.h2}>Меню</h2>
      <hr />
      <button className={styles.button}>Профіль ➤</button>
      <hr />
      <button className={styles.button}>Бонуси ➤</button>
      <hr />
      <button className={styles.button}>Історія ➤</button>
      <hr />
      <button className={styles.button}>Адреса ➤</button>
      <hr />
      <button className={styles.button}>Залишити відгук ➤</button>
      <div />
     
    </div>
  );
}
