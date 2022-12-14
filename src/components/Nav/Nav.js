import React from "react";
import { Link } from "react-router-dom";
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
      <Link to="/basket" style={{ textDecoration: "none" }}>
        <button className={styles.basket}>
          Кошик{" "}
          <img
            src={require("./img/basket-shopping-solid.png")}
            className={styles.basketImg}
          />{" "}
        </button>
      </Link>
    </div>
  );
}
