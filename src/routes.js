import {
  ABOUTUS_PAGE_ROUTE,
  ADMIN_PAGE_ROUTE,
  ADRESS_PAGE_ROUTE,
  BASKET_PAGE_ROUTE,
  DELIVERY_PAYMENT_INFO_ROUTE,
  ITEM_ROUTE,
  LOGIN_PAGE_ROUTE,
  MAP_PAGE_ROUTE,
  PROMO_PAGE_ROUTE,
  RECEIPT_PAGE_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_PAGE_ROUTE,
  USER_AGREEMENT_ROUTE,
  USER_PAGE_ROUTE,
} from "./utils/consts";

import AboutUsPage from "./pages/AboutUsPage";
import AdminPage from "./pages/AdminPage";
import AdressPage from "./pages/AdressPage";
import BasketPage from "./pages/BasketPage";
import DeliveryPaymentPage from "./pages/DeliveryPaymentPage";
import ItemPage from "./pages/ItemPage";
import LoginPage from "./pages/LoginPage";
import MapPage from "./pages/MapPage";
import PromoPage from "./pages/PromoPage";
import ReceiptPage from "./pages/ReceiptPage";
import RegistrationPage from "./pages/RegistrationPage";
import ShopPage from "./pages/ShopPage";
import UserAgreementPage from "./pages/UserAgreementPage";
import UserPage from "./pages/UserPage";

export const authRoutes = [
  {
    path: ADMIN_PAGE_ROUTE,
    Component: AdminPage,
  },
  {
    path: BASKET_PAGE_ROUTE,
    Component: BasketPage,
  },

  {
    path: USER_PAGE_ROUTE,
    Component: UserPage,
  },
];

export const publicRoutes = [
  {
    path: SHOP_PAGE_ROUTE,
    Component: ShopPage,
  },

  {
    path: LOGIN_PAGE_ROUTE,
    Component: LoginPage,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: RegistrationPage,
  },
  {
    path: ITEM_ROUTE + "/:id",
    Component: ItemPage,
  },
  {
    path: RECEIPT_PAGE_ROUTE,
    Component: ReceiptPage,
  },
  {
    path: MAP_PAGE_ROUTE,
    Component: MapPage,
  },
  {
    path: ABOUTUS_PAGE_ROUTE,
    Component: AboutUsPage,
  },

  {
    path: PROMO_PAGE_ROUTE,
    Component: PromoPage,
  },
  {
    path: USER_AGREEMENT_ROUTE,
    Component: UserAgreementPage,
  },
  {
    path: DELIVERY_PAYMENT_INFO_ROUTE,
    Component: DeliveryPaymentPage,
  },
  {
    path: ADRESS_PAGE_ROUTE,
    Component: AdressPage,
  },
];
