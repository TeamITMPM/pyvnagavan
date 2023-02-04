import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Button } from "react-bootstrap";

import styles from "./Total.module.css"

export default function Total() {
  const dispatch = useDispatch();
  const { basketState } = useSelector((state) => state);
  
  
  
  if (!basketState.loading && basketState.itemInBasket) {
    const price = basketState.itemInBasket[1]
  return (
    <div className={styles.container}>
      <div>До сплати: {price}грн</div>
      <Link to="/"> <Button variant="success" size ="lg"  value="Submit">Перейти до оплати</Button></Link>
     
    </div>
  );}
  if (basketState.loading || !basketState.itemInBasket) {
    return <div> Завантажується ціна</div>;
  }
}
