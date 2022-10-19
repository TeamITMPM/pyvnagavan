import React from 'react'
import styles from "./nav.module.css";

export default function nav() {
  return (

    <div className = {styles.nav}>

        <img src="" alt="logo" />
        <p className = {styles.categories}>Розливне пиво</p>
        <p className = {styles.categories}>Розливний сидр</p>
        <p className = {styles.categories}>Розливне вино</p>
        <p className = {styles.categories}>Снеки</p>
        <p className = {styles.categories}>Сети</p>
        <p className = {styles.categories}>Банка</p>
        <p className = {styles.categories}>Б/А</p>
        <p className = {styles.categories}>Корзина</p>
       
        

    </div>

  )
}
