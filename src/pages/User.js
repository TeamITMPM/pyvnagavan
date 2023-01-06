import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
// import { connect } from "react-redux";

export default function User() {
  // const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state);
  const { token, error } = userInfo;
  const { payload } = token;

  return (
    <>
      <Header />

      <div>
        <h1>Інформація про користувача</h1>
        {payload && (
          <ul>
            <li> Імя {payload.firstName} </li>
            <li> Фамілія {payload.secondName} </li>
            <li> Дата народження {payload.dateOfBirthsday} </li>
            <li> Електронна адреса {payload.email} </li>
            <li> Номер телефону {payload.phone} </li>
            <li> Улюблене пиво {payload.favouriteBeer} </li>
            <li> ID {payload.id} </li>
          </ul>
        )}
      </div>

      <div>
        <table>
          <tr>
            <td>Імя</td>
            <td>{payload.firstName} </td>
          </tr>
          <tr>
            <td>Фамілія</td>
            <td>{payload.secondName}</td>
          </tr>
          <tr>
            <td>Дата народження </td>
            <td>{payload.dateOfBirthsday} </td>
          </tr>
          <tr>
            <td>Електронна адреса </td>
            <td>{payload.email} </td>
          </tr>
          <tr>
            <td>Номер телефону </td>
            <td>{payload.phone}</td>
          </tr>
          <tr>
            <td>Улюблене пиво</td>
            <td>{payload.favouriteBeer}</td>
          </tr>
          <tr>
            <td>ID </td>
            <td>{payload.id}</td>
          </tr>
        </table>
      </div>
      <Footer />
    </>
  );
}
