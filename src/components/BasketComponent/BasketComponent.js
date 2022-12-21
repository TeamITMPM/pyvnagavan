import React, { useState } from "react";
import Delivery from "./Delivery/Delivery";
import CarryOut from "./CarryOut/CarryOut";
import BeerInBasket from "./BeerInBasket";
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
    <div>
      <div className={styles.selector}>
        {" "}
        <button className={styles.input} onClick={onDeliveryTabClick}>
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
      <BeerInBasket />
    </div>
  );
}
