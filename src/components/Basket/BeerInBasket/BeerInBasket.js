import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { deleteFromBasket, listMyBasket } from "../../../actions/basketActions";
import styles from "./BeerInBasket.module.css";
import PlaceholderItems from "./Placeholders/PlaceholderItems";

export default function BeerInBasket() {
  const dispatch = useDispatch();
  const { basketState } = useSelector((state) => state);

  const closeIcon = <FontAwesomeIcon icon={faClose} />;

  useEffect(() => {
    dispatch(listMyBasket());
  }, []);

  const removeItem = (id) => {
    dispatch(deleteFromBasket(id));
    toast.success("Товар видалено з кошику!", {
      position: "bottom-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  if (!basketState.loading && basketState.itemInBasket) {
    const items = basketState.itemInBasket[0];
    return (
      <>
        <div className={styles.grid}>
          {items &&
            items.map(({ product, dataValues }) => {
              const { img, nameUA, price } = product;
              const { id, quantity } = dataValues;
              const total = price * quantity;
              return (
                <div key={`beerInBasket${id}`} className={styles.item}>
                  <h3 className={styles.header}>{nameUA}</h3>
                  <img
                    src={
                      img
                        ? require(`../../../../../back_pyvnagavan/static/${img}`)
                        : "https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg"
                    }
                    className={styles.img}
                  />
                  <hr />
                  <p className={styles.text}>
                    <b className={styles.number}>{quantity}</b>л |{" "}
                    <b className={styles.number}>{price}</b> грн/л,
                  </p>
                  <p className={styles.text}>
                    <b>Сума:</b> <u className={styles.number}>{total}</u> грн
                  </p>

                  <button
                    onClick={() => {
                      removeItem(dataValues.id);
                    }}
                    className={styles.button}
                  >
                    {closeIcon} Видалити
                  </button>
                </div>
              );
            })}
        </div>
        <ToastContainer />
      </>
    );
  }

  if (basketState.loading || !basketState.itemInBasket) {
    return (
      <div className={styles.grid}>
        <PlaceholderItems />
      </div>
    );
  }
}
