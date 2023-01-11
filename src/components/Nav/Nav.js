import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { typeList } from "../../actions/navActions";
import styles from "./Nav.module.css";
import { setCategory } from "../../actions/navActions";

export default function Nav() {
  const dispatch = useDispatch();
  const navList = useSelector((state) => state.navState);
  const { loading, types } = navList;

  useEffect(() => {
    dispatch(typeList());
  }, []);

  const navClick = (name) => {
    dispatch(setCategory(name));
  };

  return (
    <div className={styles.nav}>
      {loading && <p> Завантажується навігація </p>}
      {types &&
        types.map(({ name, id }) => {
          return (
            <button
              onClick={() => {
                navClick(name);
              }}
              id={id}
              key={id}
              className={styles.categories}
            >
              {name}
            </button>
          );
        })}

      <Link to="/basket" style={{ textDecoration: "none" }}>
        <button className={styles.basket}>
          Кошик{" "}
          <img
            src={require("./img/basket-shopping-solid.png")}
            className={styles.basketImg}
          />{" "}
        </button>
      </Link>
    </div>
  );
}
