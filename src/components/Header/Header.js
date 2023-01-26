import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../../actions/userAction";

import { cleareBasketState } from "../../actions/basketActions";

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

  if(token){
    console.log(token);
  }
  return (
    <div className={styles.header}>
      {/* Левая часть хєдера */}
      <div className={styles.headerLeft}>
        <FontAwesomeIcon
          icon={faPhone}
          color="black"
          className={styles.phoneIcon}
        />
        <a href="" className={styles.number}>
          +380639356317
        </a>
        <div className={styles.space} />
        <FontAwesomeIcon icon={faSun} color="black" className={styles.icon} />
        <label className={styles.themeSelector}>
          <input type="checkbox" /> <div></div>
        </label>
        <FontAwesomeIcon icon={faMoon} color="black" className={styles.icon} />
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
      

        {/* Вход и ЛК */}


        {token && <span className={styles.email}>{token.payload.email}</span>}
        <Link to={token ? `/user` : "/login"}>
          <button type="button" className={`${styles.button} ${styles.space}`}>
            {token ? "Кабінет" : "Вхід"}
          </button>
        </Link>
        {token && (
          <Link to="/">
            <button
              type="button"
              className={styles.button}
              onClick={() => {
                dispatch(logout());
              }}
              >
              <FontAwesomeIcon icon={faRightFromBracket} />
            </button>
          </Link>
        )}
      <div className={styles.space} />
      </div>
    </div>
  );
}
