// import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import styles from "./AdminPanelLogin.module.css"

console.log(styles);
export default function AdminPanelLogIn() {
  return (
    <div className={styles.modal}>
      <button className={styles.button1}>
          <p className={styles.p1}>Увійти</p>
      </button>
      <button className={styles.button2}>
          <p className={styles.p1}>Зареєструватись</p>
      </button>
      <form className={styles.form} action="">
        <div className={styles.FormRegistration}>
        <div className={styles.labelTable}>
            <label htmlFor="mail">
              <p className={styles.p2}>
                Email
                </p>
            </label>
          </div>
          <div className={styles.inputTable}>
            <input className={styles.inputText} id="4" type="email" />
          </div>
          <div className={styles.labelTable}>
            <label htmlFor="numTel">
              <p className={styles.p2}>
                Телефон
              </p>
            </label>
          </div>
          <div className={styles.inputTable}>
            <input className={styles.inputText}
              id="3" type="tel" pattern="[+]{1}\[3]{1}\[8]{1}\[(]{1}\[0-9]{3}\[)]{1}\[0-9]{3}-[0-9]{2}-[0-9]{2}"/>
          </div>
          <div className={styles.labelTable}>
            <label htmlFor="password">
              <p className={styles.p2}>
                Пароль
                </p>
            </label>
          </div>
          <div className={styles.inputTable}>
            <input className={styles.inputText} type="password" id="7" />
          </div>
        </div>
        <div>
          <input className={styles.buttonFinish} type = "submit" />
        </div>
      </form>
    </div>
  );
}
