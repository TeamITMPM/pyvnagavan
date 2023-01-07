import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { listMyBasket } from "../../../actions/basketActions";
import styles from "../../Items/Items.module.css";

export default function BeerInBasket() {
  const dispatch = useDispatch();
  const productListInBasket = useSelector((state) => state.basketState);
  const productList = useSelector((state) => state.itemState);
  const { products, loading } = productList;
  const { itemInBasket } = productListInBasket;
  const [finalBasketItem, setFinalBasketItem] = useState([]);

  useEffect(() => {
    dispatch(listMyBasket());
  }, []);
  useEffect(() => {
    if (itemInBasket && products) {
      const final = itemInBasket.map((cartItem) => {
        const product = products.find((item) => {
          return item.id === cartItem.itemId;
        });
        if (product) {
          return {
            ...cartItem,
            metaData: product,
          };
        }
        return cartItem;
      });
      setFinalBasketItem(final);
    }
  }, [itemInBasket, products]);

  console.log("finalBasketItem>>>>>", finalBasketItem);
  // const {} =

  return (
    <>
      <div className={styles.products}>
        <div className={styles.items}>
          {finalBasketItem &&
            finalBasketItem.map(({ metaData, quantity }) => {
              return (
                <div className={styles.item} key={metaData.id}>
                  <h2>{metaData.name}</h2>
                  <img
                    className={styles.itemsIMG}
                    // src={require("../../db/img/7cfa27f3-0a3d-469a-b9a5-5451534bccc8.png")}
                    src={
                      metaData.img
                        ? require(`../../../../../back_pyvnagavan/static/${metaData.img}`)
                        : "https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg"
                    }
                    alt={metaData.name}
                  />

                  <p>Ціна за 1 літр {metaData.price} грн</p>
                  <p>Кількість {quantity} </p>

                  {/* <div className={styles.counter}>
                  <input
                  id={id}
                    type="number"
                    min="0.5"
                    max="100"
                    step="0.5"
                    // value={quantity}
                    onChange={changeLiters}
                  />
                </div> */}

                  {/* <button
                  onClick={() => {
                    onAddToBasket(id);
                  }}
                  type="button"
                  className={styles.button}
                  >
                  Додати в кошик{" "}
                </button> */}
                </div>
              );
            })}
          {loading && <h1> Завантажується пивко ... </h1>}
        </div>
      </div>
    </>
  );
}
