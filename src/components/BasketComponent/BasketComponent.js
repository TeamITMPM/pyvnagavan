import React, { useState } from "react";
import Delivery from "./Delivery/Delivery";
import CarryOut from "./CarryOut/CarryOut";
import BeerInBasket from "./BeerInBasket";
import Total from "./Total";
import styles from "./BasketComponent.module.css";

export default function BasketComponent() {
  const [OnDalivery, setOnDalivery] = useState(true);
  const [OnCarryOut, setOnCarryOut] = useState(false);

  let onDeliveryTabClick = () => {
    setOnDalivery(true);
    setOnCarryOut(false);
  };

  let onCarryOutTabClick = () => {
    setOnCarryOut(true);
    setOnDalivery(false);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.delivery}>
          <div className={styles.selector}>
            {" "}
            <button className={styles.input} onClick={onDeliveryTabClick} autoFocus>
              {" "}
              Доставка{" "}
            </button>
            <button className={styles.input} onClick={onCarryOutTabClick}>
              {" "}
              Забрати самому{" "}
            </button>
          </div>
          {OnDalivery && <Delivery />}
          {OnCarryOut && <CarryOut />}
        </div>
        <div className={styles.basket}>
          <p className={styles.text}>Кошик</p>
          <BeerInBasket className={styles.beerInBasket} />
          <Total />
        </div>
      </div>
    </>
  );
}
