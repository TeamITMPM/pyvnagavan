import React from "react";
import { useSelector } from "react-redux";
import styles from "./Total.module.css";

export default function Total() {
  const { basketState } = useSelector((state) => state);

  if (!basketState.loading && basketState.itemInBasket) {
    const price = basketState.itemInBasket[1];
    return (
      <div className={styles.container}>
        <div>До сплати: {price}грн</div>
      </div>
    );
  }
  if (basketState.loading || !basketState.itemInBasket) {
    return <div> Завантажується ціна</div>;
  }
}
