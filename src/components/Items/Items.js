import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";

import { listItems } from "../../actions/itemActions";
import { addToBasket } from "../../actions/basketActions";

import { Placeholder } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";

import "react-toastify/dist/ReactToastify.css";
import styles from "./Items.module.css";

const Items = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.itemState);
  const { products, loading } = productList;
  const [setBeer, onSetBeer] = useState();
  const { category } = useSelector((state) => state.navState);
  const userInfo = useSelector((state) => state.userInfo);
  const isAuth = !!userInfo.token;

  const toastContainer = (
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
  );
  const basketIcon = <FontAwesomeIcon icon={faBasketShopping} color="white" />;

  useEffect(() => {
    dispatch(listItems());
  }, []);

  useEffect(() => {
    if (products) {
      let data = {};
      products.map(({ id }) => {
        data[id] = "1";
      });
      onSetBeer(data);
    }
  }, [products]);

  const onAddToBasket = (id) => {
    if (!isAuth) {
      toast.error(
        "Помилка! Для того щоб користуватися кошиком потрібно увійти",
        {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
      return;
    }

    dispatch(addToBasket(id, setBeer));
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
  };

  const changeLiters = (event) => {
    const { id, value } = event.target;

    onSetBeer({
      ...setBeer,
      [id]: value,
    });
  };

  const itemPlaceholder = [];
  for (let i = 0; i < 6; i++) {
    itemPlaceholder.push(
      <div className={styles.item}>
        <Placeholder as="p" animation="glow">
          <Placeholder xs={12} />
        </Placeholder>{" "}
        <div className={styles.itemsIMG}>
          <Placeholder as="p" animation="glow">
            <Placeholder xs={600} />
          </Placeholder>{" "}
        </div>
        <hr />
        <Placeholder as="p" animation="glow">
          <Placeholder xs={6} />
        </Placeholder>{" "}
        <Placeholder as="p" animation="glow">
          <Placeholder xs={4} />
        </Placeholder>{" "}
        <Placeholder as="p" animation="glow">
          <Placeholder xs={8} />
        </Placeholder>
        <button className={styles.button}>
          <Placeholder as="p" animation="glow">
            <Placeholder lg={16} bg="info" />
          </Placeholder>
        </button>
      </div>
    );
  }

  return (
    <>
      <h2 className={styles.h2} id="products">
        Асортимент
      </h2>
      <div className={styles.products}>
        <div className={styles.items}>
          {products &&
            products.map(
              ({ name, id, price, oldPrice, rating, img, typeId }) => {
                if (
                  category === typeId ||
                  category === 9 ||
                  category === undefined
                ) {
                  const image = (
                    <img
                      className={styles.itemsIMG}
                      src={
                        img
                          ? require(`../../../../back_pyvnagavan/static/${img}`)
                          : "https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg"
                      }
                      alt={name}
                    />
                  );
                  return (
                    <div className={styles.card1}>
                      <h3 className={styles.h3}>{name}</h3>

                      <div className={styles.item} key={name}>
                        {image}

                        <div className={styles.buySection}>
                          <div className={styles.prices}>
                            <strike>{oldPrice}грн за 1 літр</strike>
                            <br />
                            <span className={styles.number}>{price}</span>грн за
                            1 літр
                          </div>

                          <label>
                            <button>+</button>
                            <button>-</button>
                            <input
                              className={styles.counter}
                              id={id}
                              type="number"
                              min="0.5"
                              max="20"
                              step="0.5"
                              // value={quantity}
                              onChange={changeLiters}
                              defaultValue={1}
                            />
                          </label>

                          <button
                            onClick={() => {
                              onAddToBasket(id);
                            }}
                            type="button"
                            className={styles.button}
                          >
                            {isAuth ? basketIcon : "Потрібно увійти"}
                          </button>
                        </div>
                        <div className={styles.description}>
                          <p className={styles.p}>
                            <b>Тип:</b> <i>Lager</i>
                          </p>
                          <p className={styles.p}>
                            <b>Щільність:</b> <i>22.2%</i>
                          </p>
                          <p className={styles.p}>
                            <b>Походження:</b> <i>123</i>
                          </p>
                          <p className={styles.p}>
                            <b>Міцність:</b> <i>4.5°</i>
                          </p>
                          <p className={styles.p}>
                            <b>Гіркота:</b> <i>15.4</i>
                          </p>
                          <p className={styles.p}>
                            <b>Колір:</b> <i>Пивний</i>
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                }
              }
            )}
          {loading && itemPlaceholder}
          {/* {loading && <h1> Завантажується пивко ... </h1>} */}
        </div>
        {toastContainer}
      </div>
    </>
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
