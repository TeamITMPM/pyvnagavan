import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { listMyBasket } from "../../../actions/basketActions";
import styles from "./BeerInBasket.module.css";

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
    <div className={styles.items}>
      {finalBasketItem &&
        finalBasketItem.map(({ metaData, quantity }) => {
          return (
            <div key={metaData.id} className={styles.item} >
              <img
                src={
                  metaData.img
                    ? require(`../../../../../back_pyvnagavan/static/${metaData.img}`)
                    : "https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg"
                }
                className={styles.img}
              />
              <h2 className={styles.header}>{metaData.name}</h2>

              <p className={styles.text}>
                <b>Ціна за 1 літр:</b> {metaData.price} грн,
              </p>
              <p>
                <b>Кількість:</b> {quantity} літрів
              </p>
              <p className={styles.text}> </p>
            </div>
          );
        })}
      {loading && <h1> Завантажується пивко ... </h1>}
    </div>
  );
}
