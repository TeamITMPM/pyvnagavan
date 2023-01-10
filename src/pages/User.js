import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
// import { connect } from "react-redux";

export default function User() {
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
    <>
      <Header />

      <div>
        <h1>Інформація про користувача</h1>
        {payload && (
          <ul>
            <li> Імя {firstName} </li>
            <li> Фамілія {secondName} </li>
            <li> Дата народження {dateOfBirthsday} </li>
            <li> Електронна адреса {email} </li>
            <li> Номер телефону {phone} </li>
            <li> Улюблене пиво {favouriteBeer} </li>
            <li> ID {id} </li>
          </ul>
        )}
      </div>

      <div>
        <table>
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
        </table>
      </div>
      <div style={{ position: "fixed", bottom: "0", width: "100%" }}>
        {/* Что бы закрепить оба футера внизу */}
        <Footer />
      </div>
    </>
  );
}
