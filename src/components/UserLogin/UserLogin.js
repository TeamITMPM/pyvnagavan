// import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import styles from "./UserLogin.module.css"

console.log(styles);
export default function UserLogin() {
  return (
    <div className={styles.modal}>
      <button className={styles.button1} autoFocus>
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
