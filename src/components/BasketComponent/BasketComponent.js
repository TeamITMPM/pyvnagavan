import React, { useState } from "react";
import Delivery from "./Delivery/Delivery";
import CarryOut from "./CarryOut/CarryOut";
import BeerInBasket from "./BeerInBasket";
import Total from "./Total";
import styles from "./BasketComponent.module.css";

export default function BasketComponent() {
  const [delivery, setDelivery] = useState(true);
  const handleDelivery = (e) => {
    delivery === true ? setDelivery(false) : setDelivery(true);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.delivery}>
          <div className={styles.selector}>
            {" "}
           <h2 className={styles.h2}> {delivery?"Заповніть анкету для доставки замовлення":"Заповніть анкету аби забрати самому"} АБО:</h2>
            <button className={styles.input} onClick={handleDelivery} >
              {delivery?"Забрати самому":"Замовити доставку"}         
            </button>
            
          </div>
          {delivery ? <Delivery /> : <CarryOut />}
        </div>
        <div className={styles.basket}>
          <p className={styles.text}>Кошик</p>
          <BeerInBasket  />
          <Total />
        </div>
      </div>
    </>
  );
}
