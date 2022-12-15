import React from "react";
import Delivery from "./Delivery/Delivery";
import CarryOut from "./CarryOut/CarryOut";


import styles from "./BasketComponent.module.css";

export default function BasketComponent() {
  return (
    <div>
      <button> Доставка </button>
      <button> З собою </button>

      <Delivery />
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
      <CarryOut />
      
    </div>
  );
}
