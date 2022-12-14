import React from "react";
import Delivery from "./Delivery/Delivery";
import CarryOut from "./CarryOut/CarryOut";


import styles from "./Form.module.css";

export default function Form() {
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
