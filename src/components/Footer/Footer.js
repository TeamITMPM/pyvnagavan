import React from 'react'
import styles from "./Footer.module.css"

export default function footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.menu}>
        <p className={styles.item}>Пивна Гавань</p>
        <p className={styles.item}>Меню</p>
        <p className={styles.item}>Заклади</p>

      </div>
      <div>
        <p className={styles.item}> Додаток</p>   
           
      </div>



    </div>
  )
}
