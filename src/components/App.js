import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import News from "./News";
import Items from "./Items";
import Footer from "./Footer";
import items from "../db/item/item.json";

export default function App() {
  // console.log(items);
  return (
    <>
      <Header />
      <Nav />
      <News />
      <Items items={items} />
      <Footer />
    </>
  );
}
