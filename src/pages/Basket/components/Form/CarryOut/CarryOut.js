import React from "react";

import styles from "./CarryOut.module.css";

export default function CarryOut() {
  return (
    <div>
      <form>
        <div>
          <label>
            Контактні дані
            <input type="text" name="name" placeholder="Ім'я" required />
            <input type="tel" name="phone" placeholder="Телефон" required />
            <input type="email" name="email" placeholder="Email " required />
          </label>
        </div>

        <div>
          <label>
            <select name="restaurant">
              <option value="card">Пивна Гавань біля сільпо</option>
            </select>
          </label>
        </div>

        <div>
          <label>
            {" "}
            Час
            <input type="date" name="date" placeholder="День" />
            <input type="time" name="time" placeholder="Час" />
            <label>
              {" "}
              Якнайшвидше
              <input type="checkbox" name="asap" />
            </label>
          </label>
        </div>
        <div>
          <label>
            Оплата
            <input type="text" name="discount" placeholder="Купон на знижку" />
            <input type="number" name="change" placeholder="Решта з" />
            <label>
              Без решти
              <input type="checkbox" name="no-change" />
            </label>
            <select name="payment">
              <option value="card">Оплата карткою онлайн</option>
              <option value="cash">Оплата готівкою</option>
            </select>
          </label>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}
