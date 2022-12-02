import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import News from "../components/News";
import Items from "../components/Items";

import fetchItemsFromDB from "../services/services";

export default function Shop() {
  //   console.log(items);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchItems();
  }, []);

  let fetchItems = () => {
    fetchItemsFromDB()
      .then((items) => setItems(items.data.rows))

      .catch((err) => {
        console.log(err);
      });
  };

  console.log("items ", items);

  return (
    <>
      <Nav />
      <News />
      <Items items={items} />
    </>
  );
}
