import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToBasket } from "../../actions/basketActions";
import { listItems } from "../../actions/itemActions";
import styles from "./Items.module.css";
import PlaceholderDesc from "./Placeholders/PlaceholderDesc";
import PlaceholderItems from "./Placeholders/PlaceholderItems";

export default function Items() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.itemState);
  const { products, loading } = productList;
  const [setBeer, onSetBeer] = useState();
  const { category } = useSelector((state) => state.navState);
  const userInfo = useSelector((state) => state.userInfo);

  const toastContainer = (
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
  const basketIcon = (
    <FontAwesomeIcon icon={faBasketShopping} color="white" size="xl" />
  );

  useEffect(() => {
    dispatch(listItems());
  }, []);

  useEffect(() => {
    if (products) {
      let data = {};
      products.map(({ id }) => {
        data[id] = "1";
      });
      onSetBeer(data);
    }
  }, [products]);

  const onAddToBasket = (id) => {
    // if (!userInfo.isAuth) {
    //   toast.error(
    //     "Помилка! Для того щоб користуватися кошиком потрібно увійти",
    //     {
    //       position: "bottom-right",
    //       autoClose: 4000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "dark",
    //     }
    //   );
    //   return;
    // }

    dispatch(addToBasket(id, setBeer));
    toast.success("Товар додано до кошику!", {
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

  const plusLiters = (event) => {
    event.target.nextSibling.nextSibling.stepUp();
    const { id, value } = event.target.nextSibling.nextSibling;
    onSetBeer({
      ...setBeer,
      [id]: value,
    });
  };
  const minusLiters = (event) => {
    event.target.nextSibling.stepDown();
    const { id, value } = event.target.nextSibling;

    onSetBeer({
      ...setBeer,
      [id]: value,
    });
  };

  return (
    <>
      <h2 className={styles.h2} id="products">
        Асортимент
      </h2>
      <div className={styles.products}>
        <div className={styles.items}>
          {products &&
            products.map((product, idx) => {
              const { nameUA, id, price, oldPrice, rating, img, typeId, info } =
                product;
              if (
                category === typeId ||
                category === 9 ||
                category === undefined
              ) {
                const image = (
                  <img
                    className={styles.itemsIMG}
                    src={
                      img
                        ? require(`../../../../back_pyvnagavan/static/${img}`)
                        : "https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg"
                    }
                    alt={nameUA}
                  />
                );
                const imageLink = `../../../../back_pyvnagavan/static/${img}`;

                let beerAmount;
                if (setBeer) {
                  beerAmount = setBeer[id];
                }

                return (
                  <div
                    className={styles.card1}
                    // style={{backgroundImage: `../../../../back_pyvnagavan/static/${img}`}}
                    key={`item${id}`}
                  >
                    <h3 className={styles.h3}>{nameUA}</h3>
                    {/* <NavLink to={`/item/${id}`}> */}
                    <div className={styles.item} key={`item${idx}`}>
                      <NavLink to={`/item/${id}`}>{image}</NavLink>
                      <div className={styles.description}>
                        {info &&
                          info.map(({ titleUA, descriptionUA }, idx) => {
                            if (
                              titleUA === "Міцність" ||
                              titleUA === "Щільність" ||
                              titleUA === "Походження" ||
                              titleUA === "Гіркота" ||
                              titleUA === "Колір"
                            ) {
                              return (
                                <div key={`description${idx}`}>
                                  <p className={styles.p}>
                                    <b>{titleUA}:</b> <i>{descriptionUA}</i>
                                  </p>
                                </div>
                              );
                            }
                          })}
                        {info.length === 0 && <PlaceholderDesc />}
                      </div>
                      <div className={styles.buySection}>
                        <div className={styles.prices}>
                          <strike>{oldPrice * beerAmount} грн</strike>
                          <hr />

                          <span className={styles.number}>
                            {price * beerAmount} грн
                          </span>
                        </div>

                        <div>
                          <button
                            className={styles.beerIncrement}
                            onClick={(e) => {
                              plusLiters(e);
                            }}
                          >
                            +
                          </button>
                          <button
                            className={styles.beerDecrement}
                            onClick={(e) => {
                              minusLiters(e);
                            }}
                          >
                            -
                          </button>
                          <input
                            className={styles.counter}
                            id={id}
                            type="number"
                            min="0.5"
                            max="20"
                            step="0.5"
                            // value={quantity}
                            defaultValue={1}
                          />
                        </div>

                        <button
                          onClick={() => {
                            onAddToBasket(id);
                          }}
                          type="button"
                          className={styles.button}
                        >
                          {basketIcon}
                        </button>
                      </div>
                    </div>
                    {/* </NavLink> */}
                  </div>
                );
              }
            })}
          {loading && <PlaceholderItems />}
          {/* {loading && <h1> Завантажується пивко ... </h1>} */}
        </div>
        {toastContainer}
      </div>
    </>
  );
}
