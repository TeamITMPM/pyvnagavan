import React, { useState } from "react";
import Delivery from "./Delivery/Delivery";
import CarryOut from "./CarryOut/CarryOut";
import BeerInBasket from "./BeerInBasket";
import Total from "./Total";
import styles from "./BasketComponent.module.css";

export default function BasketComponent() {
  const [delivery, setDelivery] = useState(true);
  const handleDelivery = () => {
    delivery === true ? setDelivery(false) : setDelivery(true);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.delivery}>
          <div className={styles.selector}>
            {" "}
            <button className={styles.input} onClick={handleDelivery} autoFocus>
              {" "}
              Доставка{" "}
            </button>
            <button className={styles.input} onClick={handleDelivery}>
              {" "}
              Забрати самому{" "}
            </button>
          </div>
          {delivery ? <Delivery /> : <CarryOut />}
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
