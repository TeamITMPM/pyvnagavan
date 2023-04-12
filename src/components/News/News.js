import React from "react";
import { Carousel } from "react-bootstrap";
import styles from "./News.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function News() {
  return (
    <div className={styles.news} id="news">
      <div className={styles.newsDiv}>
        <Carousel>
          <Carousel.Item interval={6000}>
            <img
              className={styles.newsIMG}
              src="https://images8.alphacoders.com/413/thumb-1920-413078.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Ми відкрилися</h3>
              <p>Сайт нарешті юуло розміщено в мережі інтернет!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={6000}>
            <img
              className={styles.newsIMG}
              src="https://images8.alphacoders.com/515/515795.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Скоро нові знижки</h3>
              <p>У зв'язку з відкриттям сайту ми плануємо створити нові знижки покупцям!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
