import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";

import { typeList } from "../../actions/navActions";
import { setCategory } from "../../actions/navActions";

import styles from "./Nav.module.css";

export default function Nav() {
  const dispatch = useDispatch();
  const navList = useSelector((state) => state.navState);
  const { loading, types } = navList;

  useEffect(() => {
    dispatch(typeList());
  }, []);

  const navClick = (typeId) => {
    dispatch(setCategory(typeId));
    document.getElementById("products").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  };

  return (
    <div className={styles.nav}>
      {loading && <p> Завантажується навігація </p>}
      {types &&
        types.map(({ name, id }) => {
          return (
            <button
              onClick={() => {
                navClick(id);
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
          Кошик <FontAwesomeIcon icon={faBasketShopping} color="white" />
        </button>
      </Link>
    </div>
  );
}
