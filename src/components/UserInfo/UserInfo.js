import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import {Table} from "react-bootstrap"
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import styles from "./UserInfo.module.css";

export default function UserInfo() {
  // const dispatch = useDispatch();

  const { payload } = useSelector((state) => state.userInfo.token);
  // В state.userInfo так же хранится error

  const [setInput, onSetInput] = useState();


  const {
    firstName,
    secondName,
    dateOfBirthsday,
    email,
    phone,
    favouriteBeer,
    id,
  } = payload;




  const editIcon =<FontAwesomeIcon icon = {faEdit} className={styles.editIcon} size="1x" />


  return (
    <div className={styles.table}>
            <h3>Особиста інформація</h3>

    <Table striped bordered hover size="sm" >
      <tbody>
      <tr>
        <td><b>Імя</b> </td>
        <td>{editIcon} {firstName} </td>
        
      </tr>
      <tr>
        <td><b>Прізвище</b></td>
        <td>{editIcon} {secondName}</td>
      </tr>
      <tr>
        <td><b>Дата народження</b></td>
        <td>{editIcon} {dateOfBirthsday}</td>
      </tr>
      <tr>
        <td><b>Електронна адреса</b></td>
        <td>{editIcon} {email} </td>
      </tr>
      <tr>
        <td><b>Номер телефону</b></td>
        <td>{editIcon} {phone}</td>
      </tr>
      <tr>
        <td><b>Улюблене пиво</b></td>
        <td>{editIcon} {favouriteBeer}</td>
      </tr>
      <tr>
        <td><b>ID</b></td>
        <td>{id}</td>
      </tr>
      </tbody>
    </Table></div>
  );
}
