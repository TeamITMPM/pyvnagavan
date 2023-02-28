import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  ITEM_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
  USER_ROUTE,
  PAYMENT_ROUTE,
  MAP_PAGE_ROUTE,
  ABOUTUS_PAGE_ROUTE,
  LOCATIONS_PAGE_ROUTE,
  PROMO_PAGE_ROUTE
} from "./utils/consts";

import Admin from "./pages/Admin";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ItemPage from "./pages/ItemPage";
import User from "./pages/User";
import Payment from "./pages/Payment";
import MapPage from "./pages/MapPage"
import AboutUs from "./pages/AboutUs"
import Locations from "./pages/Locations"
import PromoPage from "./pages/PromoPage"

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: BASKET_ROUTE,
    Component: Basket,
  },

  {
    path: USER_ROUTE,
    Component: User,
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },

  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: SignUp,
  },
  {
    path: ITEM_ROUTE + "/:id",
    Component: ItemPage,
  },
  {
    path: PAYMENT_ROUTE,
    Component: Payment,
  }, {
    path: MAP_PAGE_ROUTE,
    Component: MapPage,
  },{
    path: ABOUTUS_PAGE_ROUTE,
    Component: AboutUs,
  },{
    path:LOCATIONS_PAGE_ROUTE,
    Component: Locations,
  },{
    path:PROMO_PAGE_ROUTE,
    Component: PromoPage,
  },
];
