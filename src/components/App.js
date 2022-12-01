import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import News from "./News";
import Items from "./Items";
import Footer from "./Footer";
import itemsDB from "../db/item/item.json";
import fetchItemsFromDB from "../services/services";

export default function App() {
  // console.log(items);
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

  console.log(items);

  return (
    <>
      {/* <Routes path="/f" component={News} /> */}
      <Header />
      <Nav />
      <News />
      <Items items={items} />
      <Footer />
    </>
  );
}
