import React from "react";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../actions/userAction";
import styles from "./UserLogin.module.css";
// console.log(login);

export default function UserLogin() {
  const dispatch = useDispatch();
  const loginClick = async (evt) => {
    evt.preventDefault();
    dispatch(login(evt.target[0].value, evt.target[1].value));
  };
  return (
    <div className={styles.modal}>
      <Link to="/login">
        <button className={styles.button1} autoFocus>
          <p className={styles.p1}>Увійти</p>
        </button>
      </Link>
      <Link to="/signup">
        <button className={styles.button2}>
          <p className={styles.p1}>Зареєструватись</p>
        </button>
      </Link>
      <form className={styles.form} action="" onSubmit={loginClick}>
        <div className={styles.FormRegistration}>
          <div className={styles.labelTable}>
            <label htmlFor="mail">
              <p className={styles.p2}>Email</p>
            </label>
          </div>
          <div className={styles.inputTable}>
            <input className={styles.inputText} id="4" type="email" />
          </div>

          <div className={styles.labelTable}>
            <label htmlFor="password">
              <p className={styles.p2}>Пароль</p>
            </label>
          </div>
          <div className={styles.inputTable}>
            <input className={styles.inputText} type="password" id="7" />
          </div>
        </div>
        <div>
          <button className={styles.buttonFinish} type="submit">
            {" "}
            Відправити
          </button>
        </div>
      </form>
    </div>
  );
}
