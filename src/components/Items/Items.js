import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";

import { listItems } from "../../actions/itemActions";
import { addToBasket } from "../../actions/basketActions";

import { ToastContainer, toast } from "react-toastify";
  
import "react-toastify/dist/ReactToastify.css";
import styles from "./Items.module.css";

const Items = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.itemState);
  const { products, loading } = productList;
  const [setBeer, onSetBeer] = useState();

  const { category } = useSelector((state) => state.navState);

  useEffect(() => {
    dispatch(listItems());
  }, []);

  const onAddToBasket = (id) => {
    toast.success("Товар додано до кошику!", {
      position: "bottom-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    dispatch(addToBasket(id, setBeer));
  };

  const changeLiters = (event) => {
    const { id, value } = event.target;
    onSetBeer({
      ...setBeer,
      [id]: value,
    });
  };

  return (
    <div className={styles.products} id="products">
      <div className={styles.items}>
        {products &&
          products.map(({ name, id, price, oldPrice, rating, img, typeId }) => {
            if (
              category === typeId ||
              category === 9 ||
              category === undefined
            ) {
              return (
                <div className={styles.item} key={id}>
                  <h2>{name}</h2>
                  <img
                    className={styles.itemsIMG}
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
                  <label>
                    <input
                      className={styles.counter}
                      id={id}
                      type="number"
                      min="0.5"
                      max="20"
                      step="0.5"
                      // value={quantity}
                      onChange={changeLiters}
                      defaultValue={0}
                    />{" "}
                    літрів
                  </label>

                  <button
                    onClick={() => {
                      onAddToBasket(id);
                    }}
                    type="button"
                    className={styles.button}
                  >
                    Додати в кошик{" "}
                  </button>
                  <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                  />
                </div>
              );
            }
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
