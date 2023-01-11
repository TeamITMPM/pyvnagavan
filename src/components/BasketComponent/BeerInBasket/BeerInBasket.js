import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listMyBasket } from "../../../actions/basketActions";
import styles from "./BeerInBasket.module.css";

export default function BeerInBasket() {
  const dispatch = useDispatch();
  const { basketState } = useSelector((state) => state);
  console.log(basketState);
  const items = basketState.itemInBasket;
  // const totalPrice = useSelector((state) => state.basketState.items[1]);
  const productList = useSelector((state) => state.itemState);
  const { products, loading } = productList;

  // const [finalBasketItem, setFinalBasketItem] = useState([]);
  useEffect(() => {
    dispatch(listMyBasket());
  }, []);

  // useEffect(() => {}, [items]);

  // useEffect(() => {
  //   if (items && products) {
  //     const final = items.map((cartItem) => {
  //       const product = products.find(({ id }) => {
  //         return id === cartItem.itemId;
  //       });
  //       if (product) {
  //         return {
  //           ...cartItem,
  //           metaData: product,
  //         };
  //       }
  //       return cartItem;
  //     });
  //     setFinalBasketItem(final);
  //   }
  // }, [items, products]);

  if (!basketState.loading && basketState.itemInBasket) {
    return (
      <div className={styles.items}>
        {items[0] &&
          items[0].map(({ product, dataValues }) => {
            const { id, img, name, price } = product;
            const { quantity } = dataValues;

            return (
              <div key={id} className={styles.item}>
                <img
                  src={
                    img
                      ? require(`../../../../../back_pyvnagavan/static/${img}`)
                      : "https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg"
                  }
                  className={styles.img}
                />
                <h2 className={styles.header}>{name}</h2>

                <p className={styles.text}>
                  <b>Ціна за 1 літр:</b> {price} грн,
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
  if (basketState.loading || !basketState.itemInBasket) {
    return <div> Завантажується корзина</div>;
  }
}
