import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { connect } from "react-redux";
import { listItems } from "../actions/itemActions";
import Nav from "../components/Nav";
import News from "../components/News";
import Items from "../components/Items";
// import fetchItemsFromDB from "../services/services";
// const { loading, error, products, page, pages } = productList;/

const Shop = (items) => {
  // console.log("i", items);

  // const [items, setItems] = useState([]);
  // useEffect(() => {
  //   fetchItems();
  // }, []);

  // let fetchItems = () => {
  //   fetchItemsFromDB()
  //     .then((items) => setItems(items.data.rows))

  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // console.log("items ", items);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(listItems());
  //   // listItems();
  // }, []);
  // console.log(items);

  return (
    <>
      <Nav />
      <News />
      <Items />
    </>
  );
};

// let mapStateToProps = (state) => {
//   console.log("SSS", state);
//   return {
//     items: state.itemState.items,
//   };
// };
// let mapDispatchToProps = {
//   listItems,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Shop);
export default Shop;
