import React from "react";

import styles from "./Delivery.module.css";

export default function Delivery() {
  return (
    <div>
      <form>
        <div className={styles.block}>
          <label className={styles.label}>
            Контактні дані:{" "}
            <input
              type="text"
              name="name"
              placeholder="Ім'я"
              required
              className={styles.input}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Телефон"
              required
              className={styles.input}
            />
            <input
              type="email"
              name="email"
              placeholder="Email "
              required
              className={styles.input}
            />
          </label>
        </div>
        <div className={styles.block}>
          <label>
            Адреса:{" "}
            <input
              type="text"
              name="street-address"
              placeholder="Адреса"
              required
            />
            <input type="text" name="house" placeholder="Будинок" required />
            <input
              type="text"
              name="apartment"
              placeholder="Квартира"
              required
            />
            <br />
            <input type="text" name="code" placeholder="Код" />
            <input type="text" name="floor" placeholder="Поверх" required />
            <input type="text" name="comment" placeholder="Коментар" />
          </label>
        </div>
        <div className={styles.block}>
          <label>
            Час: <input type="date" name="date" placeholder="День" />
            <input type="time" name="time" placeholder="Час" />
            <label>
              Якнайшвидше <input type="checkbox" name="asap" />
            </label>
          </label>
        </div>
        <div className={styles.block}>
          <label>
            Оплата:{" "}
            <input type="text" name="discount" placeholder="Купон на знижку" />
            <input type="number" name="change" placeholder="Решта з" />
            <label>
              Без решти
              <input type="checkbox" name="no-change" />
            </label>
            <select name="payment">
              <option value="card">Оплата карткою онлайн</option>
            </select>
          </label>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}
