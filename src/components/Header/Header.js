import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const dispatch = useDispatch();

  const {
    userInfo: { token, error },
  } = useSelector((state) => state);

  return (
    <div className={styles.header}>
      {/* Левая часть хєдера */}
      <div className={styles.headerLeft}>
        <FontAwesomeIcon
          icon={faPhone}
          color="black"
          className={styles.phoneIcon}
        />
        <div className={styles.space} />
        <a href="" className={styles.number}>
          +380639356317
        </a>
      </div>

      {/* Центральная часть хєдера */}
      <Link to="/">
        <div className={styles.headerMiddle}>
          <img
            className={styles.pyvnagavan}
            src={require("../../db/img/pyvnagavan.png")}
            alt="pyvnagavan"
          />
        </div>
      </Link>

      {/* Правая часть хєдера */}
      <div className={styles.headerRight}>
        <FontAwesomeIcon icon={faSun} color="black" className={styles.icon} />
        <label className={styles.themeSelector}>
          <input type="checkbox" /> <div></div>
        </label>
        <FontAwesomeIcon icon={faMoon} color="black" className={styles.icon} />
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
        {/* <div className={styles.space} /> */}

        {/* Вход и ЛК */}

        <Link to={token ? `/user` : "/login"}>
          <button type="button" className={`${styles.button} ${styles.space}`}>
            {token ? "Кабінет" : "Вхід"}
          </button>
        </Link>
        {token && <div className={`${styles.button} ${styles.space}`}>
          <FontAwesomeIcon icon={faRightFromBracket} />
        </div>}
        
      </div>
    </div>
  );
}
