import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { listMyBasket } from "../../../actions/basketActions";
import styles from "../../Items/Items.module.css";

export default function BeerInBasket() {
  const dispatch = useDispatch();
  const productListInBasket = useSelector((state) => state.basketState);
  const productList = useSelector((state) => state.itemState);
  const { products, loading } = productList;
  const { itemInBasket } = productListInBasket;
  const [finalBasketItem, setFinalBasketItem] = useState([]);

  // console.log(itemInBasket);
  // console.log(products);

  useEffect(() => {
    dispatch(listMyBasket());
  }, []);
  useEffect(() => {
    // dispatch(listMyBasket());
    if (itemInBasket && products) {
      console.log("itemInBasket", itemInBasket);
      const test = itemInBasket.map((cartItem) => {
        const product = products.find((item) => {
          return item.id === cartItem.itemId;
        });
        if (product) {
          return {
            ...cartItem,
            metaData: product,
          };
        }
        return cartItem;
      });
      setFinalBasketItem(test);
    }
    // console.log("test ", test);
  }, [itemInBasket, products]);

  console.log("finalBasketItem>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", finalBasketItem);

  return (
    <>
      <div className={styles.products}>
        <div className={styles.items}>
          {products &&
            products.map(({ name, id, price, oldPrice, rating, img }) => {
              return (
                <div className={styles.item} key={id}>
                  <h2>{name}</h2>
                  <img
                    className={styles.itemsIMG}
                    // src={require("../../db/img/7cfa27f3-0a3d-469a-b9a5-5451534bccc8.png")}
                    src={
                      img
                        ? require(`../../../../../back_pyvnagavan/static/${img}`)
                        : "https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg"
                    }
                    alt={name}
                  />
                  <p>Стара ціна за літр {oldPrice}</p>
                  <p>Ціна за 1 літр {price} грн</p>
                  <p>Рейтинг {rating}</p>
                  {/* <div className={styles.counter}>
                  <input
                  id={id}
                    type="number"
                    min="0.5"
                    max="100"
                    step="0.5"
                    // value={quantity}
                    onChange={changeLiters}
                  />
                </div> */}

                  {/* <button
                  onClick={() => {
                    onAddToBasket(id);
                  }}
                  type="button"
                  className={styles.button}
                  >
                  Додати в кошик{" "}
                </button> */}
                </div>
              );
            })}
          {loading && <h1> Завантажується пивко ... </h1>}
        </div>
      </div>

      <div>
        {itemInBasket &&
          itemInBasket.map(
            ({ id, quantity, itemId, basketId, createdAt, updatedAt }) => {
              return (
                <ul>
                  <li key={id}>{itemId}</li>
                  <li>Кількість {quantity}</li>
                </ul>
              );
            }
          )}
      </div>
    </>
  );

  // return (
  //   <div>
  //     {itemInBasket &&
  //       itemInBasket.map(
  //         ({ id, quantity, itemId, basketId, createdAt, updatedAt }) => {
  //           products.filter(
  //             ({ name, id, price, oldPrice, rating, img }) => id === itemId
  //           );
  //           return <p>{name}</p>;
  //         }
  //       )}
  //   </div>
  // );
}
