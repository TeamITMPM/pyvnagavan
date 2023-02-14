import React, { useState, useEffect } from "react";

// import UserPageNav from "./UserPageNav";
import UserInfo from "./UserInfo";
import OrderHistory from "./OrderHistory";
import UserAdress from "./UserAdress";

import styles from "./UserPage.module.css";

export default function UserPage() {
  const [userCategory, setUserCategory] = useState("0");

  const setCategoryType = (e) => {
    const { category } = e.target.dataset;
    setUserCategory(category);
    console.log(userCategory);
  };

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <div />
        <h2 className={styles.h2}>Меню</h2>
        <hr />
        <button
          className={styles.button}
          data-category="0"
          onClick={(e) => {
            setCategoryType(e);
          }}
        >
          Профіль ➤
        </button>
        <hr />
        <button
          className={styles.button}
          data-category="1"
          onClick={(e) => {
            setCategoryType(e);
          }}
        >
          Бонуси ➤
        </button>
        <hr />
        <button
          className={styles.button}
          data-category="2"
          onClick={(e) => {
            setCategoryType(e);
          }}
        >
          Історія ➤
        </button>
        <hr />
        <button
          className={styles.button}
          data-category="3"
          onClick={(e) => {
            setCategoryType(e);
          }}
        >
          Адреса ➤
        </button>
        <hr />
        <button
          className={styles.button}
          data-category="4"
          onClick={(e) => {
            setCategoryType(e);
          }}
        >
          Залишити відгук ➤
        </button>
        <div />
      </div>
      <div className={styles.content1}></div>
      <div className={styles.content2}>
        {userCategory === "0" && <UserInfo />}
        {userCategory === "2" && <OrderHistory />}
        {userCategory === "3" && <UserAdress />}
      </div>

      {/* <OrderHistory /> */}
    </div>
  );
}
