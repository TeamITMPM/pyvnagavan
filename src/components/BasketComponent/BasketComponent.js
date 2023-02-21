import React, { useState } from "react";

import Delivery from "./Delivery/Delivery";
import CarryOut from "./CarryOut/CarryOut";
import BeerInBasket from "./BeerInBasket";
import BuyAlso from "./BuyAlso";
import Total from "./Total";

import { Button, NavLink } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";

import styles from "./BasketComponent.module.css";

export default function BasketComponent() {
  const [delivery, setDelivery] = useState(true);

  const switchToDelivery = () => {
    setDelivery(true);
  };
  const switchToCarryOut = () => {
    setDelivery(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("WWWWWWWWWWWWW>>>>>>>>>>");
  };

  return (
    <>
      <div className={styles.container}>
        {/* /////////////////////// Left side of header Delivery|Carry out */}
        <div className={styles.delivery}>
          {/* /////////////////// Delivery or CarryOut button Selectors */}
          <div className={styles.selector}>
            <h3 className={styles.text}>
              <ButtonGroup size="lg" className={`"mb-2" ${styles.buttonGroup}`}>
                <Button
                  variant={delivery ? "success" : "secondary"}
                  onClick={switchToDelivery}
                >
                  Доставка
                </Button>
                <Button
                  variant={!delivery ? "success" : "secondary"}
                  onClick={switchToCarryOut}
                >
                  Забрати самому
                </Button>
              </ButtonGroup>
            </h3>
          </div>

          {/* ///////////// Delivery or CarryOut inputs */}
          <form onSubmit={handleSubmit}>
            {delivery ? <Delivery /> : <CarryOut />}
            <Total />
            <Button variant="success" size="lg" value="Submit" type="submit">
              Перейти до оплати
            </Button>
          </form>
        </div>

        {/* /////////////////////////////////////////////////////////// */}

        {/* Right side of screen with basket items */}
        <div className={styles.basket}>
          <p className={styles.text}>Кошик</p>
          <BeerInBasket />
        </div>
      </div>
    </>
  );
}
