import React from "react";
import Delivery from "./Delivery/Delivery";
import CarryOut from "./CarryOut/CarryOut";

import styles from "./BasketComponent.module.css";

export default function BasketComponent() {
  return (
    <div>
      <div className={styles.selector}>
        {" "}
        <button className={styles.input} onFocus> Доставка </button>
        <button className={styles.input} > Забрати самому </button>
      </div>

      <Delivery />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <CarryOut />
    </div>
  );
}
