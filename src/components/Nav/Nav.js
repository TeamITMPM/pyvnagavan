import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { typeList } from "../../actions/navActions";
import styles from "./Nav.module.css";

const Nav = () => {
  const dispatch = useDispatch();
  const navList = useSelector((state) => state.navState);
  const { loading, types } = navList;
  console.log(types);

  useEffect(() => {
    dispatch(typeList());
  }, []);

  return (
    <div className={styles.nav}>
      {loading && <p> Завантажується навігація </p>}
      {types &&
        types.map(({ name, id }) => {
          return (
            <button id={id} key={id} className={styles.categories}>
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
};

let mapStateToProps = (state) => {
  return {
    // items: state.itemState.items,
  };
};
let mapDispatchToProps = {
  // listItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
