import styles from "./DeliveryPaymentComponent.module.css";
import { faShippingFast, faBagShopping} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DeliveryPaymentComponent() {

    const deliveryIcon = (
        <FontAwesomeIcon icon={faShippingFast} color="black" size="xl" />
      );
    const carryOutIcon = (
        <FontAwesomeIcon icon={faBagShopping} color="black" size="xl" />
      );



  return (
    <>
      <h2 className={styles.h2}>Доставка та оплата</h2>
      <div className={styles.container}>
        <div className={styles.gridColumn}>
          <h3>КУР'ЄРСЬКА ДОСТАВКА {deliveryIcon} </h3>
          <p>Доставка здійснюється по місту Київ.</p>
          <h4>Як зробити замовлення</h4>
          <p>Час доставки з 10.30 до 20.30</p>
          <p>Замовлення товару можна зробити будь-яким зручним способом:</p>
          <p>- за номером телефону</p>
          <p>- на сайті</p>
          <strong>
            <i>
              ВАЖЛИВО! Алкогольні напої можуть бути придбані тільки особами
              котрим є 18+
            </i>
          </strong>
          <h3>Спосіб оплати</h3>
          <p>- готівкою при доставці кур'єру </p>
          <h3>Умови доставки </h3>
          <p> - мінімальна вартість замовлення від 250 грн. </p>
          <p> - вартість доставки 99 грн. </p>
          <p> - час доставки до 120 хв. </p>
          <p>
            Для підтвердження замовлення на сайті, протягом 5 хв з вами
            зв'яжеться наш оператор.
          </p>
          <strong>
            <i>
              ВАЖЛИВО! На сайті не вказано вартість тари і пакету. При
              підтвердженні замовлення, її уточнить оператор.
            </i>
          </strong>
        </div>


{/* ////////////////////////////////////// */}


        <div className={styles.gridColumn}>
          <h3>ПЕРЕДЗАМОВЛЕННЯ(самовивіз) {carryOutIcon}</h3>
          <h4> Як зробити попереднє замовлення </h4>
          <p> Час попереднього замовлення з 11.00 до 22.00 </p>
          <p>
            {" "}
            Попереднє замовлення товару можна зробити будь-яким зручним
            способом:
          </p>
          <p> - за номером телефону </p>
          <p> - на сайті</p>
          <strong>
            <i>
              ВАЖЛИВО! Алкогольні напої можуть бути придбані тільки особами
              котрим є 18+
            </i>
          </strong>
          <h3>  Спосіб оплати </h3>
          <p>- готівкою при самовивозі</p>
          <p>- банківською картою при самовивозі </p>
          <h3>Умови передзамовлення</h3>
          <p> Здійснити попереднє замовлення ви можете в будь-якому зручному для вас магазині. </p>
          <p>Час підготовки замовлення до 30 хв. </p>
          <p> До вашої появи, він буде зібраний і ви зможете отримати його без черги. </p>
          <p> Інформацію про наявність товару, що цікавить в конкретному магазині, звертайтесь до оператора.</p>
          <strong>
            <i>
              ВАЖЛИВО! На сайті не вказано вартість тари і пакету. При
              підтвердженні замовлення, її уточнить оператор.
            </i>
          </strong>
        </div>
      </div>
    </>
  );
}
