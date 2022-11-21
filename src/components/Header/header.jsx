import React from "react";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      {/* Левая часть хєдера */}
      <div className={styles.headerLeft}>
        <img
          className={styles.IMG}
          src="https://freesvg.org/img/molumen_phone_icon.png"
          alt="pyvnagavan"
        />
        <div className={styles.space}/>
        <a href="" className={styles.number}>+380639356317</a>
      </div>

      {/* Центральная часть хєдера */}
      <div className={styles.headerMiddle}>
        <img
          className={styles.pyvnagavan}
          src={require("../../db/img/pyvnagavan.png")}
          alt="pyvnagavan"
        />
      </div>








      {/* Правая часть хєдера */}
      <div className={styles.headerRight}>
        <img
          className={styles.icon}
          src="https://cdn.iconscout.com/icon/free/png-256/sun-1767847-1502100.png"
        />
        <label className={styles.themeSelector}>
          <input type="checkbox" /> <div></div>
        </label>
        <img
          className={styles.icon}
          src="        https://cdn.iconscout.com/icon/free/png-256/moon-456-433595.png"
        />



<div className={styles.space} />




        <img
          className={styles.icon}
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/flag-ukraine_1f1fa-1f1e6.png"
        />        
        <label className={styles.languageSelector}>
          <input type="checkbox" /> <div></div>
        </label>
        <img
          className={styles.icon}
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/twitter/322/flag-united-kingdom_1f1ec-1f1e7.png"
        />

<div className={styles.space} />


        <button type="button" id={styles.button}>
          Вход
        </button>
        <button type="button" id={styles.button}>
          ЛК
        </button>
      </div>
    </div>
  );
}
