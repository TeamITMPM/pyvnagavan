import { useEffect } from "react";

import { connect, useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { login } from "../../actions/userAction";
import { SHOP_PAGE_ROUTE } from "../../utils/consts";
import styles from "./UserLogin.module.css";

function UserLogin() {
  const userInfo = useSelector((state) => state.userInfo);
  const { isAuth } = userInfo;
  useEffect(() => {
    if (isAuth) {
      history.push(SHOP_PAGE_ROUTE);
    }
  });

  const dispatch = useDispatch();
  const history = useHistory();
  const {
    userInfo: { token, error },
  } = useSelector((state) => state);

  const loginClick = async (event) => {
    const EMAIL = event.target[0].value,
      PASSWORD = event.target[1].value;

    event.preventDefault();
    dispatch(login(EMAIL, PASSWORD));
  };

  return (
    <div className={styles.modal}>
      <Link to="/login">
        <button className={styles.button1}>
          <p className={styles.p1}>Вхід</p>
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
              <p className={styles.p2}>Email/телефон</p>
            </label>
          </div>
          <div className={styles.inputTable}>
            <input className={styles.inputText} id="4" required />
          </div>

          <div className={styles.labelTable}>
            <label htmlFor="password">
              <p className={styles.p2}>Пароль</p>
            </label>
          </div>
          <div className={styles.inputTable}>
            <input
              className={styles.inputText}
              type="password"
              id="7"
              required
            />
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
