import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Button, ButtonGroup } from "react-bootstrap";
import { toast } from "react-toastify";

import BeerInBasket from "./BeerInBasket";
import CarryOut from "./CarryOut/CarryOut";
import Delivery from "./Delivery/Delivery";
import Total from "./Total";

import { addToOrder } from "../../actions/orderActions";

import { RECEIPT_PAGE_ROUTE } from "../../utils/consts";

import styles from "./Basket.module.css";

export default function Basket() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [delivery, setDelivery] = useState(true);
  const { basketState } = useSelector((state) => state);

  const switchToDelivery = () => {
    setDelivery(true);
  };
  const switchToCarryOut = () => {
    setDelivery(false);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault(); // prevent default form submission behavior
    if (basketState.itemInBasket[1] == 0) {
      toast.error("Помилка! Кошик пустий.", {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    let data = {};
    const limit = evt.target.length;

    for (let i = 0; i < limit; i++) {
      const element = evt.target[i];
      if (element.name !== "") {
        data[element.name] = element.value;
      }
    }
    dispatch(addToOrder(data));
    history.push(RECEIPT_PAGE_ROUTE);
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
            <div className={styles.submitButton}>
              <Button variant="success" size="lg" value="Submit" type="submit">
                Перейти до оплати
              </Button>
            </div>
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
