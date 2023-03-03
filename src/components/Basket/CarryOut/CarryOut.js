import { useState } from "react";

import PhoneInput from "react-phone-number-input";
import styles from "./CarryOut.module.css";

export default function CarryOut() {
  const [value, setValue] = useState("+380");
  const [ASAP, setASAP] = useState(false);

  const asapInput = () => {
    if (ASAP) {
      setASAP(false);
    } else {
      setASAP(true);
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
            placeholder="Email (не обов'язково)"
            className={styles.input}
          />
        </label>
      </div>

      <div className={styles.block}>
        <label className={styles.label}>
          Ресторан:
          <select name="restaurant" className={styles.input}>
            <option value="Пивна Гавань біля сільпо">Пивна Гавань біля сільпо</option>
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
              <label className={styles.label}>
                Якнайшвидше{" "}
                <div className={styles.checkbox}>
                  <input
                    type="checkbox"
                    name="asap"
                    defaultValue="on"
                    onChange={asapInput}
                    checked
                  />
                  <div></div>
                </div>
              </label>
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
              <label className={styles.label}>
                Якнайшвидше{" "}
                <div className={styles.checkbox}>
                  <input
                    type="checkbox"
                    name="asap"
                    defaultValue="off"
                    onChange={asapInput}
                  />
                  <div></div>
                </div>
              </label>
            </>
          )}
          
        </label>
      </div>

      <div className={styles.block}>
        <label className={styles.label}>
          Оплата:
          <input
            type="text"
            name="voucher"
            placeholder="Купон на знижку (не обов'язково)"
            className={styles.input}
          />
          
         
          <select name="payment" className={styles.input}>
            <option value="Готівка">Оплата готівкою</option>
            <option value="Карткою">Оплата карткою онлайн</option>
          </select>
        </label>
      </div>
    </div>
  );
}
