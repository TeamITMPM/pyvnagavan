import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Placeholder } from "react-bootstrap";

import {
  faHouse,
  faMoon,
  faRightFromBracket,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { logout } from "../../actions/userAction";

import styles from "./Header.module.css";

export default function Header() {
  const dispatch = useDispatch();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    setTheme(currentTheme);
    document.body.className = currentTheme;
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.body.className = "dark";
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");

      document.body.className = "light";
    }
  };

  // icons
  const sunIcon = (
    <FontAwesomeIcon icon={faSun} color="#efeee9" className={styles.icon} />
  );
  const moonIcon = (
      <FontAwesomeIcon icon={faMoon} color="#efeee9 " className={styles.icon} />
    ),
    exitIcon = <FontAwesomeIcon icon={faRightFromBracket} />,
    uaFlag = <img className={styles.icon} src={require("./img/ukraine.png")} />,
    ukFlag = (
      <img className={styles.icon} src={require("./img/united-kingdom.png")} />
    );

  const shopIcon = (
    <FontAwesomeIcon
      icon={faHouse}
      color="#efeee9"
      size="xl"
      style={{ marginLeft: "1vw" }}
    />
  );
  //logo
  const pyvnaGavanLogo = (
    <img
      className={styles.pyvnagavan}
      src={require("./img/pyvnagavan.png")}
      alt="pyvnagavan"
    />
  );

  const pyvnaGavanLogoPlaceholder = (
    <Placeholder as="p" animation="glow">
      <Placeholder lg={24} />
    </Placeholder>
  );

  const {
    userInfo: { token, error },
  } = useSelector((state) => state);

  const dispatchLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.header}>
      {/* Левая часть хєдера */}
      <div className={styles.headerLeft}>
        {/* <span className={styles.shop}>Магазин:</span> */}
        {shopIcon}
        <select name="shops" id="shop-select" className={styles.buttonShop}>
          <optgroup className={styles.nameGroup} label="Оболонь">
            <option className={styles.name} value="Тимошенка">
              вул. Маршала Тимошенка
            </option>
          </optgroup>
        </select>
        <div className={styles.space} />
        {sunIcon}
        <label className={styles.themeSelector}>
          {theme === "dark" ? (
            <input type="checkbox" onInput={toggleTheme} checked />
          ) : (
            <input type="checkbox" onInput={toggleTheme} />
          )}
          <div></div>
        </label>
        {moonIcon}
        {/* {uaFlag}
        <label className={styles.languageSelector}>
          <input type="checkbox" /> <div />
        </label>
        {ukFlag} */}
      </div>

      {/* Центральная часть хєдера */}
      <Link to="/" className={styles.headerMiddle}>
        {pyvnaGavanLogo}
      </Link>

      {/* Правая часть хєдера */}
      <div className={styles.headerRight}>
        {/* Вход и ЛК */}
        {token && <span className={styles.email}>{token.payload.email}</span>}
        <Link to={token && token.payload.email !== "" ? `/user` : "/login"}>
          <button type="button" className={`${styles.button} ${styles.space}`}>
            {token && token.payload.email !== ""
              ? "Кабінет"
              : "Вхід | Реєстрація"}
          </button>
        </Link>
        {token && token.payload.email !== "" ? (
          <Link to="/">
            <button
              type="button"
              className={styles.button}
              onClick={() => {
                dispatchLogout();
              }}
            >
              {exitIcon}
            </button>
          </Link>
        ) : (
          ""
        )}
        <div className={styles.space} />
      </div>
    </div>
  );
}
