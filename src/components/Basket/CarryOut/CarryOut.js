import React, { useState } from "react";

import PhoneInput from "react-phone-number-input";

import styles from "./CarryOut.module.css";

export default function CarryOut() {
  const [value, setValue] = useState("+380");
  const [ASAP, setASAP] = useState(false);
  const [noChange, setNoChange] = useState(false);

  const asapInput = (e) => {
    if (ASAP) {
      setASAP(false);
      e.target.value = "off";
    } else {
      setASAP(true);
      e.target.value = "on";
    }
  };

  const noChangeInput = (e) => {
    if (noChange) {
      setNoChange(false);
      e.target.value = "off";
    } else {
      setNoChange(true);
      e.target.value = "on";
    }
  };

  let today = new Date();
  let dateDefaultValue = today.toISOString().substring(0, 10);
  let todayDeliveryMinutes = new Date(
    today.valueOf() + 30 * 60000
  ).getMinutes();
  let todayDeliveryHours = new Date(today.valueOf() + 30 * 60000).getHours();
  let timeDefaultValue = `${todayDeliveryHours}:${todayDeliveryMinutes}`;

  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <label className={styles.label}>
          Контактні дані:
          <input
            type="text"
            name="firstName"
            placeholder="Ім'я"
            required
            className={styles.input}
          />
          <PhoneInput
            placeholder="Телефон"
            defaultCountry="UA"
            name="phone"
            value={value}
            onChange={setValue}
            className={styles.input}
            rules={{ required: true }}
            limitMaxLength
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
          Ресторан:
          <select name="restaurant" className={styles.input}>
            <option value="card">Пивна Гавань біля сільпо</option>
          </select>
        </label>
      </div>

      <div className={styles.block}>
        <label className={styles.label}>
          {" "}
          Час:
          {ASAP ? (
            <>
              <input
                type="date"
                name="date"
                placeholder="День"
                className={styles.input}
                disabled
              />
              <input
                type="time"
                name="time"
                placeholder="Час"
                className={styles.input}
                disabled
              />
            </>
          ) : (
            <>
              <input
                type="date"
                name="date"
                placeholder="День"
                className={styles.input}
                defaultValue={dateDefaultValue}
                min={dateDefaultValue}
              />
              <input
                type="time"
                name="time"
                placeholder="Час"
                className={styles.input}
                defaultValue={timeDefaultValue}
              />
            </>
          )}
          <label>
            Якнайшвидше
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                name="asap"
                value="off"
                onInput={asapInput}
              />{" "}
              <div></div>
            </div>
          </label>
        </label>
      </div>

      <div className={styles.block}>
        <label className={styles.label}>
          Оплата:
          <input
            type="text"
            name="voucher"
            placeholder="Купон на знижку"
            className={styles.input}
          />
          {noChange ? (
            <input
              type="number"
              name="change"
              placeholder="Решта з"
              className={styles.input}
              disabled
            />
          ) : (
            <input
              type="number"
              name="change"
              placeholder="Решта з"
              className={styles.input}
            />
          )}
          <label className={styles.label}>
            Без решти
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                name="noChange"
                value="off"
                onInput={noChangeInput}
              />{" "}
              <div></div>
            </div>
          </label>
          <select name="payment" className={styles.input}>
            <option value="card">Оплата карткою онлайн</option>
            <option value="cash">Оплата готівкою</option>
          </select>
        </label>
      </div>
    </div>
  );
}
