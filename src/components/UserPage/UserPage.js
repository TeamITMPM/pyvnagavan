import React from "react";

import UserPageNav from "./UserPageNav";
import UserInfo from "./UserInfo";
import OrderHistory from "./OrderHistory";

import styles from "./UserPage.module.css";

export default function UserPage() {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <UserPageNav />
      </div>

      <div className={styles.content}>
        {/* <UserInfo /> */}
        <OrderHistory />
        
      </div>

      {/* <OrderHistory /> */}
    </div>
  );
}
