import React from "react";
import styles from "./Auth.module.css";

const Auth = () => {
  return (
    <div className={styles.modal}>
      <button className={styles.button1}>Увійти</button>
      <button className={styles.button2}>Зареєструватись</button>

      <form>
        <div className={styles.regestarion}>
          <input
            classname={styles.oldname}
            id="1"
            type="text"
            placeholder="Фамілія"
          />
          <input name="name" id="2" cols="30" type="text" placeholder="Ім'я" />
          <input
            type="tel"
            name="phonenumber"
            id="3"
            placeholder="Мобілка"
            pattern="[\+]\d{3}\s[\(]\d{2}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}"
            minlength="13"
            maxlength="13"
          />

          <textarea name="email" id="4" cols="30" rows="1">
            mail
          </textarea>
          <textarea name="dateofbirthday" id="5" cols="30" rows="1">
            date
          </textarea>
          <textarea name="beer" id="" cols="30" rows="1">
            favoritebeeer
          </textarea>
        </div>
        <div className={styles.buttonfinal}>
          <input className={styles.registr} type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Auth;
