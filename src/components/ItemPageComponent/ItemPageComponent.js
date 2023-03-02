import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";

import { Button } from "react-bootstrap";

import styles from "./ItemPageComponent.module.css";
import { listItems, getItem } from "../../actions/itemActions";
import { addToBasket } from "../../actions/basketActions";

export default function ItemPageComponent() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);
  const state = useSelector((state) => state.itemPageState);
  const { product, loading } = state;
  const isAuth = !!userInfo.token;
  const [setBeer, onSetBeer] = useState(1);

  useEffect(() => {
    const url = window.location.href; // получаем текущий URL-адрес
    const id = url.split("/").pop(); // разбиваем URL-адрес на части и получаем последнюю часть
    dispatch(getItem(id));

    // console.log(products);
  }, []);

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
  function plusLiters(event) {
    event.target.previousSibling.stepUp();
    const { id, value } = event.target.previousSibling;

    onSetBeer({
      ...setBeer,
      [id]: value,
    });
  }
  const minusLiters = (event) => {
    event.target.nextSibling.stepDown();
    const { id, value } = event.target.nextSibling;
    onSetBeer({
      ...setBeer,
      [id]: value,
    });
  };

  if (product) {
    const { id, nameUA, img, oldPrice, price, promoPrice, rating, info } =
      product;

    let beerAmount = 1;
    const basketIcon = (
      <FontAwesomeIcon icon={faBasketShopping} color="white" size="xl" />
    );

    return (
      <>
        <NavLink to="/">
          <Button variant="success" className={styles.backButton}>
            Назад
          </Button>
        </NavLink>
        <div className={styles.container}>
          <img
            className={styles.img}
            src={
              img
                ? require(`../../../../back_pyvnagavan/static/${img}`)
                : "https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg"
            }
            alt={nameUA}
          />
          <div className={styles.content}>
            <h2 id={id} className={styles.h2}>
              {nameUA}
            </h2>
            <hr />
            <br />
            <div className={styles.longDescription}>
              <p>
                <strong>Про товар:</strong>

                {info &&
                  info.map(({ titleUA, descriptionUA }) => {
                    return (
                      <div>
                        <p className={styles.p}>
                          <b>{titleUA}:</b> <i>{descriptionUA}</i>
                        </p>
                      </div>
                    );
                  })}
              </p>
            </div>

            <div className={styles.grid}>
              {/* //////////////////////// */}

              <div className={styles.shortDescription}> </div>

              {/* ////////////////////////////////////////////// */}

              <div className={styles.inputs}>
                <button
                  className={styles.beerDecrement}
                  onClick={(e) => {
                    minusLiters(e);
                  }}
                >
                  -
                </button>
                <input
                  id={id}
                  className={styles.counter}
                  type="number"
                  min="0.5"
                  max="20"
                  step="0.5"
                  // value={quantity}
                  defaultValue="1"
                  disabled
                />
                <button
                  className={styles.beerIncrement}
                  onClick={(e) => {
                    plusLiters(e);
                  }}
                >
                  +
                </button>
              </div>

              {/* ////////////////////////////////////////////// */}

              <div className={styles.prices}>
                <hr />
                <strike>{oldPrice * beerAmount} грн</strike>
                <br />

                <span className={styles.number}>{price * beerAmount} грн</span>
              </div>

              {/* ////////////////////////////////////////////// */}

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
          </div>
        </div>
      </>
    );
  }
}
