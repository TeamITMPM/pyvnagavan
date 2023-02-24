import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listItems, getItem } from "../actions/itemActions";
import styles from "../components/Items/Items.module.css";

export default function ItemPage() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.itemPageState);
  const { product, loading } = state;
  useEffect(() => {
    const url = window.location.href; // получаем текущий URL-адрес
    const id = url.split("/").pop(); // разбиваем URL-адрес на части и получаем последнюю часть
    dispatch(getItem(id));

    // console.log(products);
  }, []);
  console.log(product);
  return (
    <>
      {product && (
        <div>
          <h1>{product.name}</h1>
          <img
            className={styles.itemsIMG}
            src={
              product.img
                ? require(`../../../back_pyvnagavan/static/${product.img}`)
                : "https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg"
            }
            alt={product.namame}
          />

          <div className={styles.prices}>
            <strike>{product.oldPrice} грн</strike>
            <hr />

            <span className={styles.number}>{product.price} грн</span>
          </div>
        </div>
      )}
      {/* {product.info &&
        product.info.map(({ title, description }) => {
          <div>
            <p>{title}</p>
            <p>{description}</p>
          </div>;
        })} */}
    </>
  );
}
