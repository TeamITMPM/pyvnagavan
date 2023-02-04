import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {Table} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

import styles from "./UserInfo.module.css";

export default function UserInfo() {
  // const dispatch = useDispatch();

  const { payload } = useSelector((state) => state.userInfo.token);
  // В state.userInfo так же хранится error

  const {
    firstName,
    secondName,
    dateOfBirthsday,
    email,
    phone,
    favouriteBeer,
    id,
  } = payload;

  return (
    <Table striped bordered hover size="sm" className={styles.table}>
      <tbody>
      <tr>
        <td>Імя</td>
        <td>{firstName} </td>
      </tr>
      <tr>
        <td>Фамілія</td>
        <td>{secondName}</td>
      </tr>
      <tr>
        <td>Дата народження </td>
        <td>{dateOfBirthsday} </td>
      </tr>
      <tr>
        <td>Електронна адреса </td>
        <td>{email} </td>
      </tr>
      <tr>
        <td>Номер телефону </td>
        <td>{phone}</td>
      </tr>
      <tr>
        <td>Улюблене пиво</td>
        <td>{favouriteBeer}</td>
      </tr>
      <tr>
        <td>ID </td>
        <td>{id}</td>
      </tr>
      </tbody>
    </Table>
  );
}
