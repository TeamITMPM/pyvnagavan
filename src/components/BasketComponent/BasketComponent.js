import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Delivery from "./Delivery/Delivery";
import CarryOut from "./CarryOut/CarryOut";
import BeerInBasket from "./BeerInBasket";
import BuyAlso from "./BuyAlso";
import Total from "./Total";

import { Button, NavLink } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";

import styles from "./BasketComponent.module.css";
import { addToOrder } from "../../actions/orderActions";

export default function BasketComponent() {
  const dispatch = useDispatch();
  const [delivery, setDelivery] = useState(true);
  const switchToDelivery = () => {
      setDelivery(true);
    },
    switchToCarryOut = () => {
      setDelivery(false);
    };

  const handleSubmit = (evt) => {
    evt.preventDefault(); // prevent default form submission behavior

    let data = {};
    const limit = evt.target.length;

    for (let i = 0; i < limit; i++) {
      const element = evt.target[i];
      if (element.name !== "") {
        data[element.name] = element.value;
      }
    }

    dispatch(addToOrder(data));
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.delivery}>
          <div className={styles.selector}>
            {" "}
            <h3 className={styles.text}>
              {" "}
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
          <form onSubmit={handleSubmit}>
            {" "}
            {delivery ? <Delivery /> : <CarryOut />}
            <Total />
            {/* <NavLink to="/payment"> */}{" "}
            <Button variant="success" size="lg" value="Submit" type="submit">
              Перейти до оплати
            </Button>
            {/* </NavLink> */}
          </form>
        </div>
        <div className={styles.basket}>
          <p className={styles.text}>Кошик</p>
          <BeerInBasket />
          {/* <BuyAlso /> */}
        </div>
      </div>
    </>
  );
}
