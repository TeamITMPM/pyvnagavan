import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { login } from "../../actions/userAction";
import { connect } from "react-redux";
import styles from "./UserLogin.module.css";
import { SHOP_ROUTE } from "../../utils/consts";

function UserLogin() {
  const dispatch = useDispatch();
  const { userInfo:{token, error} } = useSelector((state) => state);
  const history = useHistory();

  const loginClick = async (event) => {
    const EMAIL = event.target[0].value,
      PASSWORD = event.target[1].value;

    event.preventDefault();
    dispatch(login(EMAIL, PASSWORD));

    if (token) {
       history.push(SHOP_ROUTE);      
    }
    
  };

  return (
    <div className={styles.modal}>
      <Link to="/login">
        <button className={styles.button1}>
          <p className={styles.p1}>Увійти</p>
        </button>
      </Link>
      <Link to="/signup">
        <button className={styles.button2}>
          <p className={styles.p1}>Зареєструватись</p>
        </button>
      </Link>
      <form className={styles.form} action="" onSubmit={loginClick}>
        <div className={styles.FormRegistration}>
          <div className={styles.labelTable}>
            <label htmlFor="mail">
              <p className={styles.p2}>Email</p>
            </label>
          </div>
          <div className={styles.inputTable}>
            <input className={styles.inputText} id="4" type="email" />
          </div>

          <div className={styles.labelTable}>
            <label htmlFor="password">
              <p className={styles.p2}>Пароль</p>
            </label>
          </div>
          <div className={styles.inputTable}>
            <input className={styles.inputText} type="password" id="7" />
          </div>
        </div>
        <div>
          <button className={styles.buttonFinish} type="submit">
            {" "}
            Відправити
          </button>
          {error && <h1>{error.payload.response.data.message}</h1>}
        </div>
      </form>
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo,
  };
};
let mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
