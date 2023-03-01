import React, { useState } from "react";

import PhoneInput from "react-phone-number-input";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

import styles from "./Delivery.module.css";
import "react-phone-number-input/style.css";

const popover = <Tooltip>у форматі 0951112233</Tooltip>;

export default function Delivery() {
  const [value, setValue] = useState("+380");

  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <label className={styles.label}>
          Контактні дані:{" "}
          <input
            type="text"
            name="firstName"
            placeholder="Ім'я"
            required
            className={styles.input}
          />
          {/* <OverlayTrigger trigger="click" placement="top" overlay={popover} onHide>
            <input
              type="tel"
              name="phone"
              placeholder="Телефон"
              required
              className={styles.input}
            />
          </OverlayTrigger> */}
          <PhoneInput
            placeholder="Телефон"
            defaultCountry="UA"
            name="phone"
            value={value}
            onChange={setValue}
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
        <label className={styles.label}>
          Доставка:{" "}
          <input
            type="text"
            name="street"
            placeholder="Адреса"
            required
            className={styles.input}
          />
          <input
            type="text"
            name="house"
            placeholder="Будинок"
            required
            className={styles.input}
          />
          <input
            type="text"
            name="apartment"
            placeholder="Квартира"
            required
            className={styles.input}
          />
          <br />
          <input
            type="text"
            name="code"
            placeholder="Код"
            className={styles.input}
          />
          <input
            type="text"
            name="floor"
            placeholder="Поверх"
            required
            className={styles.input}
          />
          <input
            type="text"
            name="comments"
            placeholder="Коментар"
            className={styles.input}
          />
        </label>
      </div>

      <div className={styles.block}>
        <label className={styles.label}>
          Час:{" "}
          <input
            type="date"
            name="date"
            placeholder="День"
            className={styles.input}
          />
          <input
            type="time"
            name="time"
            placeholder="Час"
            className={styles.input}
          />
          <label className={styles.label}>
            Якнайшвидше{" "}
            <div className={styles.checkbox}>
              <input type="checkbox" name="asap" />
              <div></div>
            </div>
          </label>
        </label>
      </div>

      <div className={styles.block}>
        <label className={styles.label}>
          Оплата:{" "}
          <input
            type="text"
            name="voucher"
            placeholder="Купон на знижку"
            className={styles.input}
          />
          <input
            type="number"
            name="change"
            placeholder="Решта з"
            className={styles.input}
          />
          <label className={styles.label}>
            Без решти
            <div className={styles.checkbox}>
              <input type="checkbox" name="noChange" />
              <div></div>
            </div>
          </label>
          <select name="payment" className={styles.input}>
            <option value="card">Оплата карткою онлайн</option>
          </select>
        </label>
      </div>
    </div>
  );
}
