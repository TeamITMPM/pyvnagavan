import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div>
      <footer className={styles.topFooter}>
        <li>я есть грут</li>
        <li>asd</li>
      </footer>
      <footer>
        <div className={styles.Footer}>
          <div className={styles.NameOfTable}>
            Меню
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
          <div className={styles.NameOfTable}>
            Додаток
            <ul>
              <li>
                <button>
                  <img
                    className={styles.img}
                    src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                    alt="APle"
                  />
                </button>
              </li>
              <li>
                <button>
                  <img
                    className={styles.img}
                    src="https://internetua.com/upload/tinymce/images2/%D0%90%D1%80%D1%82%D0%B5%D0%BC/29012017/irina_blok_android.jpg"
                    alt="android"
                  />
                </button>
              </li>
            </ul>
          </div>
          <div className={styles.NameOfTable}>
            Контакти
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
          <div className={styles.NameOfTable}>
            Платіжна система
            <ul>
              <li>биткоин</li>
              <li>єфир</li>
              <li>кефир</li>
            </ul>
          </div>
          <div>
            Ми у соцмережах
            <ul>
              <li>inst</li>
              <li>facebook</li>
              <li>piska</li>
              <li>cocok</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>made in china</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
