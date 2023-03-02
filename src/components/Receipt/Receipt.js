import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

// import GooglePayButton from "@google-pay/button-react";
import styles from "../User/OrderHistory/OrderHistory.module.css";

export default function Receipt() {
  const { currentOrderState } = useSelector((state) => state);
  // console.log(itemInOrder);

  if (currentOrderState.itemInOrder) {
    const {
      apartment,
      asap,
      basketId,
      change,
      code,
      comments,
      createdAt,
      date,
      email,
      firstName,
      floor,
      house,
      id,
      noChange,
      payment,
      phone,
      price,
      restaurant,
      status,
      street,
      time,
      updatedAt,
      voucher,
    } = currentOrderState.itemInOrder.orderInfo;
    const { items } = currentOrderState.itemInOrder;
    return (
      <div className={styles.container}>
        <div className={styles.table}>
          <h3>
            Дякуємо за вибір Пивної гавані. Для підтвердження замовлення , будь
            ласка , очікуйте дзвінок нашого оператора.
          </h3>
        </div>

        <div className={styles.table}>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Nº</th>
                <th>Дата</th>
                <th>Статус</th>
                <th>Інформація про замовлення</th>
                <th>Кошик</th>
                <th>Інформація про оплату</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>{id}</b>
                </td>
                <td>
                  <b>{date}</b>
                </td>
                <td>{status}</td>
                <td>
                  <ul>
                    {firstName && (
                      <li>
                        <b>Ім'я:</b> {firstName}
                      </li>
                    )}
                    {phone && (
                      <li>
                        <b>Номер:</b> {phone}
                      </li>
                    )}
                    {email && (
                      <li>
                        <b>Email:</b> {email}
                      </li>
                    )}
                    {street && (
                      <li>
                        <b>Адреса:</b> {street}
                      </li>
                    )}
                    {restaurant ? (
                      <li>
                        <b>Ресторан: </b>
                        {restaurant}
                      </li>
                    ) : (
                      "Доставка"
                    )}
                    {house && (
                      <li>
                        <b>Будинок:</b> {house}
                      </li>
                    )}
                    {apartment && (
                      <li>
                        <b>Квартира:</b> {apartment}
                      </li>
                    )}
                    {code && (
                      <li>
                        <b>Код домофону:</b> {code}
                      </li>
                    )}
                    {floor && (
                      <li>
                        <b>Поверх:</b> {floor}
                      </li>
                    )}
                    {comments && (
                      <li>
                        <b>Коментар:</b> {comments}
                      </li>
                    )}
                    {time && (
                      <li>
                        <b>Доставити о:</b> {asap && "якнайшвидше ,"} ≈ {time}
                      </li>
                    )}
                    {date && (
                      <li>
                        <b>Дата доставки:</b> {date}
                      </li>
                    )}
                    {voucher && (
                      <li>
                        <b>Купон:</b> {voucher}
                      </li>
                    )}
                  </ul>
                </td>
                <td>
                  <ul>
                    {items.map(({ product, quantity }) => {
                      const { price, name } = product;

                      return (
                        <li>
                          {" "}
                          {name} <i>{quantity}л</i>{" "}
                        </li>
                      );
                    })}
                  </ul>
                </td>
                <td>
                  <ul>
                    {payment && (
                      <li>
                        <b>Спосіб оплати:</b> {payment}
                      </li>
                    )}

                    {price && (
                      <li>
                        <b>До сплати:</b> {price} грн
                      </li>
                    )}
                  </ul>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
