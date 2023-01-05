import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";

export default function User() {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state);
  const { token, error } = userInfo;
  const { payload } = token;
  console.log(payload);

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
        ;
      </div>
      <Footer />
    </>
  );
}

// let mapStateToProps = (state) => {
//   return {
//     userInfo: state.userInfo,
//   };
// };
// let mapDispatchToProps = {

// };

// export default connect(mapStateToProps, mapDispatchToProps)(User);
