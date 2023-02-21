import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";

import styles from "./OrderHistory.module.css";
import { listMyOrder } from "../../../actions/orderActions";

export default function OrderHistory() {
  const dispatch = useDispatch();
  const orderList = useSelector((state) => state.orderState);
  const { itemInOrder } = orderList;

  useEffect(() => {
    dispatch(listMyOrder());
  }, []);
  console.log("itemInOrder", itemInOrder);
  if (itemInOrder) {
    itemInOrder.map((elem) => {
      console.log(elem);
    });
  }

  return (
    <div className={styles.table}>
      <h3>Список замовлень</h3>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>id</th>
            <th>Nº замовлення</th>
            <th>Дата</th>
            <th>Статус</th>
            <th>Спосіб</th>
            <th>Інформація про замовлення</th>
            <th>Інформація про оплату</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>12345</td>
            <td>22.01.2023</td>
            <td>Оплачено</td>
            <td>Доставка</td>
            <td>
              <ul>
                <li>
                  <b>Ім'я:</b> Михайло
                </li>
                <li>
                  <b>Номер:</b> 095-222-33-22
                </li>
                <li>
                  <b>Email:</b> pizza@gmail.com
                </li>
                <li>
                  <b>Адреса:</b> Героїв ст.
                </li>
                <li>
                  <b>Ресторан:</b> Null
                </li>
                <li>
                  <b>Будинок:</b> 32
                </li>
                <li>
                  <b>Квартира:</b> 22
                </li>
                <li>
                  <b>Код:</b> 1234
                </li>
                <li>
                  <b>Поверх:</b> 9
                </li>
                <li>
                  <b>Коментар:</b> І не затримуйтесь!
                </li>
                <li>
                  <b>Час:</b> 18:00
                </li>
                <li>
                  <b>Дата доставки:</b> 23.02.2023
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  <b>Спосіб оплати:</b> MasterCard
                </li>
                <li>
                  <b>Статус:</b> Успішно
                </li>
                <li>
                  <b>Чек:</b> 12345
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
