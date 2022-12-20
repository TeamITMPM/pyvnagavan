import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { connect } from "react-redux";
import { listItems } from "../../actions/itemActions";

import styles from "./Items.module.css";

const Items = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.itemState);
  const { products, loading } = productList;

  useEffect(() => {
    dispatch(listItems());
  }, []);
  let quantity;

  const addToBasket = (id) => {
    console.log(id);
  };
  const changeLiters = (evt) => {
    console.log(evt.target.value);
    console.log(evt.target.id);
  };

  return (
    <div className={styles.products}>
      <div className={styles.items}>
        {products &&
          products.map(({ name, id, price, oldPrice, rating, img }) => {
            return (
              <div className={styles.item} key={id}>
                <h2>{name}</h2>
                <img
                  className={styles.itemsIMG}
                  // src={require("../../db/img/7cfa27f3-0a3d-469a-b9a5-5451534bccc8.png")}
                  src={
                    img
                      ? require(`../../../../back_pyvnagavan/static/${img}`)
                      : "https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg"
                  }
                  alt={name}
                />
                <p>Стара ціна за літр {oldPrice}</p>
                <p>Ціна за 1 літр {price} грн</p>
                <p>Рейтинг {rating}</p>
                <div className={styles.counter}>
                  <input
                    id={id}
                    type="number"
                    min="0.5"
                    max="100"
                    step="0.5"
                    value={quantity}
                    onChange={changeLiters}
                  />
                </div>

                <button
                  onClick={() => {
                    addToBasket(id);
                  }}
                  type="button"
                  className={styles.button}
                >
                  Додати в кошик{" "}
                </button>
              </div>
            );
          })}
        {loading && <h1> Завантажується пивко ... </h1>}
      </div>
    </div>

    // <h1>Items</h1>
  );
};

let mapStateToProps = (state) => {
  return {
    items: state.itemState.items,
  };
};
let mapDispatchToProps = {
  listItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
